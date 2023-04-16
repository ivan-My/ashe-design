import React, { FunctionComponent, CSSProperties } from 'react'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typeing'
import bem from '@/utils/bem'

export interface ButtonProps extends BasicComponent {
  className: string
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  type: ButtonType
  size: ButtonSize
  block: boolean
  icon: string
  style: CSSProperties
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

const defaultProps = {
  className: '',
  disabled: false,
  children: undefined,
  style: {},
  onClick: (e: MouseEvent) => {},
} as ButtonProps

const b = bem('button')

export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const { children, onClick, disabled, style, color, className, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const cls = classNames(b(), className, disabled && `${b()}--disabled`)
  const btnStyle = { color }
  const handleClick = (e: any) => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={cls}
      style={{ ...btnStyle, ...style }}
      onClick={(e) => handleClick(e)}
      {...rest}
    >
      {children}
      MINGYANG
    </div>
  )
}
