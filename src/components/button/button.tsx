import React, { FunctionComponent, CSSProperties } from 'react'
import classNames from 'classnames'
import { IComponent } from '@/utils/typeing'

export interface ButtonProps extends IComponent {
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
  children: '',
  style: {},
  onClick: (e: MouseEvent) => {},
} as ButtonProps

const prefixCls = 'ashe-button'

export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const { children, onClick, disabled, style, color, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const cls = classNames(
    prefixCls,
    className,
    disabled && `${prefixCls}--disabled`
  )
  const btnStyle = { color }
  const onHandleClick = (e: any) => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={cls}
      style={{ ...btnStyle, ...style }}
      onClick={(e) => onHandleClick(e)}
      {...rest}
    >
      {children}
    </div>
  )
}
