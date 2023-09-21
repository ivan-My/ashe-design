import React from 'react'
import { newInstance } from './Notification'
import { MessageInstance, ToastProps } from './interface'

let messageInstance: any = null

export const defaultProps = {
    content: '',
    duration: 1.5,
    contentStyle: {},
    position: 'center',
    lockScroll: false,
    onClose: () => {},
} as ToastProps

const close = () => {
    if (messageInstance) {
        messageInstance.destroy()
        messageInstance = null
    }
}

const notice = (options: any) => {
    // close()
    if (messageInstance) return
    const opts: ToastProps = { ...defaultProps, ...options, onClose: close }
    newInstance(opts, function (notification: MessageInstance) {
        messageInstance = notification
    })
}

const errorMsg = (msg: string | React.ReactNode) => {
    if (!msg) {
        console.warn('[Ashe Toast]: msg cannot be null')
    }
}

function config(
    config: Partial<Pick<ToastProps, 'duration' | 'position' | 'lockScroll'>>
) {
    if (config.duration !== undefined) {
        defaultProps.duration = config.duration
    }
    if (config.position !== undefined) {
        defaultProps.position = config.position
    }
    if (config.lockScroll !== undefined) {
        defaultProps.lockScroll = config.lockScroll
    }
}

export default {
    show(options: string | Partial<ToastProps>) {
        if (typeof options === 'string') {
            errorMsg(options)
            return notice({ content: options })
        }
        errorMsg(options.content)
        return notice({ ...options })
    },
    hide() {
        if (messageInstance) {
            messageInstance.destroy()
            messageInstance = null
        }
    },
    config,
}
