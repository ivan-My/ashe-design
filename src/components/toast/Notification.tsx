import React, { useEffect, useRef } from 'react'
import { render, unmount } from '@/utils/render'
import { ToastProps, CallbackFunction } from './interface'

const classPrefix = 'ashe-toast'

const Notification = (props: ToastProps & CallbackFunction) => {
    const { contentStyle, content, duration, position, icon, lockScroll } =
        props
    const closeTimer = useRef<number>()
    const close = () => {
        clearCloseTimer()
        props.onClose && props.onClose()
    }

    const startCloseTimer = () => {
        if (duration) {
            closeTimer.current = window.setTimeout(() => {
                close()
            }, duration * 1000)
        }
    }

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current)
            closeTimer.current = -1
        }
    }

    useEffect(() => {
        props.callback()
        if (lockScroll) {
            document.body.classList.add('ashe-overflow-hidden')
        }
        startCloseTimer()
        return () => {
            clearCloseTimer()
            document.body.classList.remove('ashe-overflow-hidden')
        }
    })

    return (
        <div className={`${classPrefix}`}>
            <div
                className={`${classPrefix}__inner ${classPrefix}--${position}`}
                style={contentStyle}
            >
                {icon && (
                    <div className={`${classPrefix}__icon-wrapper`}>{icon}</div>
                )}
                <span className={`${classPrefix}__text`}>{content}</span>
            </div>
        </div>
    )
}

export const newInstance = (properties: ToastProps, callback: any) => {
    const element = document.createElement('div')
    document.body.appendChild(element)
    let called = false
    function fn() {
        if (called) {
            return
        }
        called = true
        callback({
            destroy() {
                unmount(element)
                element &&
                    element.parentNode &&
                    element.parentNode.removeChild(element)
            },
        })
    }

    // eslint-disable-next-line react/jsx-no-bind
    render(<Notification {...properties} callback={fn} />, element)
}
