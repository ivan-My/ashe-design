import React, { FunctionComponent } from 'react'

export interface ButtonProps {
  className: string
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  style: React.CSSProperties
  type: ButtonType
  size: ButtonSize
  block: boolean
  icon: string
  children: any
  onClick: (e: MouseEvent) => void
}

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'



export const Button: FunctionComponent<Partial<ButtonProps>> = () => {
  return <div className='nut-button'>button22222888333</div>
}
