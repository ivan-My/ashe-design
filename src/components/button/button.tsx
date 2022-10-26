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

const defaultProps ={
  children: undefined,
  onClick: () => {},
}


export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const {children} = {
    ...defaultProps,
    ...props
  }
  return <div className='nut-button' >
    {children}
  </div>
}
