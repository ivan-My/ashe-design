import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import className from 'classnames'
import { ImageProps } from './interface'
import { withNativeProps } from '@/utils/native-props'
import { pxCheck } from '@/utils/px-check'

import Compressor from 'compressorjs'

const classPrefix = 'ashe-image'
const defaultProps = {
    src: '',
    alt: '',
    fit: 'fill',
    width: 'center',
    height: '',
    loading: true,
    error: true,
    lazy: true,
} as ImageProps
export const Image: FunctionComponent<
    Partial<ImageProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const {
        src,
        alt,
        fit,
        width,
        height,
        loading,
        onLoad,
        error,
        onError,
        lazy,
        children,
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
    }
    const imgStyle: any = {
        objectFit: fit,
    }

    const renderLoading = useCallback(() => {
        if (!loading) return null
        if (typeof loading === 'boolean' && loading && innerLoading) {
            return <div className="ashe-img-loading">loading...</div>
        }
        if (React.isValidElement(loading) && innerLoading) {
            return <div className="ashe-img-loading">{loading}</div>
        }
        return null
    }, [loading, innerLoading])
    const renderError = useCallback(() => {
        if (!isError) return null
        if (typeof error === 'boolean' && error && !innerLoading) {
            return <div className="ashe-img-error">加载失败</div>
        }
        if (React.isValidElement(error) && !innerLoading) {
            return <div className="nut-img-error">{error}</div>
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

        // new Compressor(imgRef.current, {
        //     quality: '0.6',
        // })

        console.log(imgRef.current)
        return () => {
            lazy && resetObserver()
        }
    }, [lazy])
    return withNativeProps(
        props,
        <div className={cls} style={containerStyle}>
            <img
                ref={imgRef}
                className={`${classPrefix}--img`}
                style={imgStyle}
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleError}
            />
            {renderLoading()}
            {renderError()}
        </div>
    )
}

Image.defaultProps = defaultProps
Image.displayName = 'AsheImage'
