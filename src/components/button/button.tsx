import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typeing'
import { withNativeProps } from '@/utils/native-props'

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

const classPrefix = 'ashe-button'

export const Button: FC<Partial<ButtonProps>> = (props) => {
  const { children, onClick, disabled, style, color, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const cls = classNames(classPrefix, disabled && `${classPrefix}--disabled`)

  const btnStyle = { color }
  const handleClick = (e: any) => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return withNativeProps(
    props,
    <div
      className={cls}
      style={btnStyle}
      onClick={(e) => handleClick(e)}
      {...rest}
    >
      {children}
    </div>
  )
}
