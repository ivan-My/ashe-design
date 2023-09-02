import React from 'react'
import { newInstance } from './Notification'
import { ToastProps } from './interface'

let messageInstance: any = null

export const defaultProps = {
  msg: '',
  title: '',
  style: {},
  duration: 1.5,
  type: 'text',
  center: true,
  bottom: '30px', // center为false时生效，距离底部位置
  cover: false, // 是否展示透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
  textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
  loadingRotate: true, // 未实现
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: () => {},
  closeOnClickOverlay: false, // 是否点击遮罩可关闭
} as ToastProps

const getInstance = (
  props: ToastProps,
  callback: (notification: any) => void
) => {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }
  newInstance(props, (notification: any) => {
    return callback && callback(notification)
  })
}

const notice = (options: any) => {
  const close = () => {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
  const opts = { ...defaultProps, ...options, onClose: close }

  getInstance(opts, (notification: any) => {
    messageInstance = notification
  })
}

const errorMsg = (msg: string | React.ReactNode) => {
  if (!msg) {
    console.warn('[Ashe Toast]: msg cannot be null')
  }
}

export default {
  text(msg: string | React.ReactNode, options?: Partial<ToastProps>) {
    errorMsg(msg)
    return notice({ msg, type: 'text', ...options })
  },
  loading(msg: string | React.ReactNode, options?: Partial<ToastProps>) {
    errorMsg(msg)
    return notice({ msg, icon: 'loading', type: 'loading', ...options })
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
