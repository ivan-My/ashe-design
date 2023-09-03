import * as React from 'react'
import { BasicComponent } from '@/utils/typeing'

type ToastPosition = 'top' | 'center' | 'bottom'

export interface ToastProps extends BasicComponent {
  // 提示内容
  content: string

  //  自定义content样式
  contentStyle: React.CSSProperties

  // 自动关闭的延时（单位: ms），设置为0则不会自动关闭
  duration: number

  //  展示的位置，默认center
  position: ToastPosition

  // 自定义图标
  icon: React.ReactNode

  // 背景是否锁定
  lockScroll: boolean

  // 关闭时的回调
  onClose: () => void
}

export type CallbackFunction = { callback: () => void }

export interface MessageInstance {
  destroy: CallbackFunction
}
