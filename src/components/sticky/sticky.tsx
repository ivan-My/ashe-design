import React, { FC, useEffect, useRef, useState } from 'react'
import className from 'classnames'
import { StickyProps } from './interface'

const classPrefix = 'ashe-sticky'

const defaultProps = {
    position: 'top',
    threshold: 0,
} as StickyProps
export const Sticky: FC<
    Partial<StickyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { threshold, container, children } = { ...defaultProps, ...props }
    const [isFixed, setIsFixed] = useState(false)
    const rootRef = useRef<any>()

    const handelScroll = () => {
        const top = container?.current?.getBoundingClientRect().top
        const top2 =
            document.documentElement.scrollTop || document.body.scrollTop
        if (top <= threshold) {
            setIsFixed(true)
        }
        if (top2 <= threshold) {
            setIsFixed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    })
    const cls = className(classPrefix, isFixed && 'ashe-sticky__fixed')
    const rootStyle: React.CSSProperties = {
        top: isFixed ? `${threshold}px` : '',
    }

    return (
        <div className={cls} style={rootStyle} ref={rootRef}>
            {children}
        </div>
    )
}

Sticky.defaultProps = defaultProps
Sticky.displayName = 'AsheSticky'
