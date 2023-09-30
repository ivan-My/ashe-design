import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ListProps } from './interface'

declare let window: Window & { webkitRequestAnimationFrame: any }

const classPrefix = 'ashe-list'

const defaultProps = {
    hasMore: true,
    threshold: 200,
    useCapture: false,
    target: '',
    isOpenRefresh: false,
    pullTxt: '松开刷新',
    loadTxt: '加载中···',
    loadMoreTxt: '',
} as ListProps

export const List: FunctionComponent<
    Partial<ListProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const {
        children,
        hasMore,
        threshold,
        target,
        useCapture,
        isOpenRefresh,
        pullTxt,
        loadTxt,
        loadMoreTxt,
        className,
        onRefresh,
        onLoadMore,
        onScrollChange,

        ...restProps
    } = {
        ...defaultProps,
        ...props,
    }
    const [isInfiniting, setIsInfiniting] = useState(true)
    const scroller = useRef<HTMLDivElement>(null)
    const refreshTop = useRef<HTMLDivElement>(null)
    const scrollEl = useRef<Window | HTMLElement | (Node & ParentNode)>(window)
    const isTouching = useRef(false)
    const beforeScrollTop = useRef(0)
    const refreshMaxH = useRef(0)
    const y = useRef(0)
    const distance = useRef(0)
    const classes = classNames(className, classPrefix)

    useEffect(() => {
        onLoadMore && onLoadMore(() => infiniteDone())
    }, [])
    useEffect(() => {
        if (target && document.getElementById(target)) {
            scrollEl.current = document.getElementById(target) as
                | HTMLElement
                | Window
        } else {
            scrollEl.current = window
        }
        scrollEl.current.addEventListener('scroll', handleScroll, useCapture)
        return () => {
            scrollEl.current.removeEventListener(
                'scroll',
                handleScroll,
                useCapture
            )
        }
    }, [hasMore, isInfiniting])
    useEffect(() => {
        const element = scroller.current as HTMLDivElement
        element.addEventListener('touchmove', touchMove, { passive: false })
        return () => {
            element.removeEventListener('touchmove', touchMove, {
                passive: false,
            } as EventListenerOptions)
        }
    }, [])

    const getStyle = () => {
        return {
            height: distance.current < 0 ? `0px` : `${distance.current}px`,
            transition: isTouching.current
                ? `height 0s cubic-bezier(0.25,0.1,0.25,1)`
                : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
        }
    }

    const handleScroll = () => {
        requestAniFrame()(() => {
            if (!isScrollAtBottom() || !hasMore || isInfiniting) {
                return false
            }
            setIsInfiniting(true)
            onLoadMore && onLoadMore(infiniteDone)
            return true
        })
    }

    const infiniteDone = () => {
        setIsInfiniting(false)
    }

    const refreshDone = () => {
        distance.current = 0
        ;(
            refreshTop.current as HTMLDivElement
        ).style.height = `${distance.current}px`
        isTouching.current = false
    }

    const touchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        if (
            beforeScrollTop.current === 0 &&
            !isTouching.current &&
            isOpenRefresh
        ) {
            y.current = event.touches[0].pageY
            isTouching.current = true
            const childHeight = (
                (refreshTop.current as HTMLDivElement)
                    .firstElementChild as HTMLElement
            ).offsetHeight
            refreshMaxH.current = Math.floor(childHeight * 1 + 50)
        }
    }

    const touchMove = (event: any) => {
        distance.current = event.touches[0].pageY - y.current
        if (distance.current > 0 && isTouching.current) {
            event.preventDefault()
            if (distance.current >= refreshMaxH.current) {
                distance.current = refreshMaxH.current
                ;(
                    refreshTop.current as HTMLDivElement
                ).style.height = `${distance.current}px`
            } else {
                ;(
                    refreshTop.current as HTMLDivElement
                ).style.height = `${distance.current}px`
            }
        } else {
            distance.current = 0
            ;(
                refreshTop.current as HTMLDivElement
            ).style.height = `${distance.current}px`
            isTouching.current = false
        }
    }

    const touchEnd = () => {
        if (distance.current < refreshMaxH.current) {
            distance.current = 0
            ;(
                refreshTop.current as HTMLDivElement
            ).style.height = `${distance.current}px`
        } else {
            onRefresh && onRefresh(refreshDone)
        }
    }

    const requestAniFrame = () => {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function fn(callback) {
                window.setTimeout(callback, 1000 / 60)
            }
        )
    }

    const getWindowScrollTop = () => {
        return window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
              ).scrollTop
    }

    const calculateTopPosition = (el: HTMLElement): number => {
        return !el
            ? 0
            : el.offsetTop +
                  calculateTopPosition(el.offsetParent as HTMLElement)
    }

    const isScrollAtBottom = () => {
        let offsetDistance = 0
        let resScrollTop = 0
        let direction = 'down'
        const windowScrollTop = getWindowScrollTop()
        if (!target || !document.getElementById(target)) {
            if (scroller.current) {
                offsetDistance =
                    calculateTopPosition(scroller.current) +
                    scroller.current.offsetHeight -
                    windowScrollTop -
                    window.innerHeight
            }
            resScrollTop = windowScrollTop
        } else {
            const { scrollHeight, clientHeight, scrollTop } =
                scrollEl.current as HTMLElement
            offsetDistance = scrollHeight - clientHeight - scrollTop
            resScrollTop = scrollTop
        }
        if (beforeScrollTop.current > resScrollTop) {
            direction = 'up'
        } else {
            direction = 'down'
        }
        beforeScrollTop.current = resScrollTop
        onScrollChange && onScrollChange(resScrollTop)
        return offsetDistance <= threshold && direction === 'down'
    }

    return (
        <div
            className={classes}
            ref={scroller}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            {...restProps}
        >
            {isOpenRefresh && (
                <div
                    className="ashe-list__refresh"
                    ref={refreshTop}
                    style={getStyle()}
                >
                    <div className="top-box">
                        <span className="top-text">{pullTxt}</span>
                    </div>
                </div>
            )}

            <div className="ashe-infinite-container">{children}</div>

            {isInfiniting ? (
                <div className="ashe-list__loadmore">{loadTxt}</div>
            ) : (
                !hasMore && (
                    <div className="ashe-list__loadmore">{loadMoreTxt}</div>
                )
            )}
        </div>
    )
}

List.defaultProps = defaultProps
List.displayName = 'asheList'
