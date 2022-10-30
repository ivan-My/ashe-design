import React, { FunctionComponent } from 'react'

export interface ToastProps {
  text?: string
  duration?: number
  afterCloe?: () => void
}
export const defaultProps = {
  duration: 1500,
  text: 'loading',
} as ToastProps

export const show: FunctionComponent<Partial<ToastProps | string>> = (
  props
) => {
  const textObj = typeof props === 'string' ? { text: props } : props
  const { text, duration } = {
    ...defaultProps,
    ...textObj,
  }

  console.log(text, duration)
  return <div>124</div>
}
export const clear = () => {
  console.log('clear')
}
export const config = () => {}
