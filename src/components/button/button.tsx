import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typeing'
import { withNativeProps } from '@/utils/native-props'
import Loading from '@/components/loading'

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
  nativeType: 'submit' | 'reset' | 'button'
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
  loading: false,
  type: 'default',
  nativeType: 'button',
  onClick: (e: MouseEvent) => {},
} as ButtonProps

const prefixCls = 'ashe-button'

export const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (props, ref) => {
    const {
      type,
      children,
      onClick,
      disabled,
      style,
      color,
      className,
      loading,
      nativeType,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }

    const cls = classNames(
      prefixCls,
      disabled && `${prefixCls}--disabled`,
      type ? `${prefixCls}--${type}` : null
    )
    const btnStyle = { color }
    const handleClick = (e: any) => {
      if (!disabled && onClick) {
        onClick(e)
      }
    }

    return withNativeProps(
      props,
      <button
        {...rest}
        /* eslint-disable-next-line react/button-has-type */
        type={nativeType}
        style={btnStyle}
        className={cls}
        onClick={(e) => handleClick(e)}
      >
        <div className={`${prefixCls}_warp`}>
          {loading && <Loading type="change" show />}
          {children && (
            <div className={loading ? 'ashe-button-text' : ''}>{children}</div>
          )}
        </div>
      </button>
    )
  }
)

Button.displayName = 'AsheButton'
