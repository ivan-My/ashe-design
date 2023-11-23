import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import className from 'classnames'
import { Image as ImageIcon, ImageError } from '@nutui/icons-react'
import { ImageProps } from './interface'
import { withNativeProps } from '@/utils/native-props'
import { pxCheck } from '@/utils/px-check'

const classPrefix = 'ashe-image'
const defaultProps = {
    src: '',
    alt: '',
    fit: 'fill',
    width: 'center',
    height: '',
    radius: 0,
    loading: true,
    error: true,
    lazy: false,
} as ImageProps
export const Image: FunctionComponent<
    Partial<ImageProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    console.log(props)
    const {
        src,
        alt,
        fit,
        width,
        height,
        loading,
        radius,
        onLoad,
        error,
        onError,
        lazy,
        ...ret
    } = {
        ...defaultProps,
        ...props,
    }
    const imgRef = useRef<HTMLImageElement>(null)
    const [innerLoading, setInnerLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const cls = className(classPrefix)
    const containerStyle = {
        width: width ? pxCheck(width) : '',
        height: height ? pxCheck(height) : '',
        overflow: radius !== undefined && radius !== null ? 'hidden' : '',
        borderRadius:
            radius !== undefined && radius !== null ? pxCheck(radius) : '',
    }
    const imgStyle: any = {
        objectFit: fit,
    }

    const renderLoading = useCallback(() => {
        if (!loading) return null
        if (typeof loading === 'boolean' && loading && innerLoading) {
            return (
                <div className="ashe-img--loading">
                    <ImageIcon />
                </div>
            )
        }
        if (React.isValidElement(loading) && innerLoading) {
            return <div className="ashe-img--loading">{loading}</div>
        }
        return null
    }, [loading, innerLoading])
    const renderError = useCallback(() => {
        if (!isError) return null
        if (typeof error === 'boolean' && error && !innerLoading) {
            return (
                <div className="ashe-img--error">
                    <ImageError />
                </div>
            )
        }
        if (React.isValidElement(error) && !innerLoading) {
            return <div className="ashe-img--error">{error}</div>
        }
        return null
    }, [isError, innerLoading])
    const handleLoad = () => {
        setIsError(false)
        setInnerLoading(false)
        onLoad && onLoad()
    }
    const handleError = () => {
        setIsError(true)
        setInnerLoading(false)
        onError && onError()
    }
    // 图片懒加载
    const observer: any = useRef(null)
    const initObserver = () => {
        const options = {
            threshold: [0], // 交会处
            rootMargin: '0px', // 对视口进行收缩和扩张
        }
        // 监听dom是否在视口内
        observer.current = new IntersectionObserver((entires, self) => {
            // entires为监听的节点数组对象
            entires.forEach((item) => {
                // isIntersecting是当前监听元素交叉区域是否在可视区域指定的阈值内返回的是一个布尔值
                if (item.isIntersecting) {
                    setTimeout(() => {
                        const img: any = item.target
                        if (img.dataset.src) {
                            img.src = img.dataset.src
                            img.removeAttribute('data-src')
                        }
                        // 资源加载后停止监听
                        resetObserver()
                    }, 300)
                }
            })
        }, options)
        observer.current.observe(imgRef.current)
    }

    // 使用disconnect将取消的Observer实例中的所有监听
    const resetObserver = () => {
        observer.current.disconnect && observer.current.disconnect()
    }

    useEffect(() => {
        lazy && initObserver()
        return () => {
            lazy && resetObserver()
        }
    }, [lazy])

    return withNativeProps(
        props,
        <div className={cls} style={containerStyle} {...ret}>
            <img
                ref={imgRef}
                className={`${classPrefix}--img`}
                style={imgStyle}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                {...(lazy ? { 'data-src': src, loading: 'lazy' } : { src })}
            />
            {renderLoading()}
            {renderError()}
        </div>
    )
}

Image.defaultProps = defaultProps
Image.displayName = 'AsheImage'
