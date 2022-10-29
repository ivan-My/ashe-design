import React, { FunctionComponent, useEffect, useState } from 'react'
import { IComponent } from '@/utils/typeing'
import className from 'classnames'

export interface InputProps extends IComponent {
  defaultValue?: string
  disabled?: boolean
  border?: boolean
  center?: boolean
  onChange: (value: string) => void
  onBlur?: (value: any) => void
}
const defaultProps = {
  defaultValue: '',
  disabled: false,
  border: true,
  center: false,
} as InputProps

const prefixCls = 'ashe-input'

export const Input: FunctionComponent<
  Partial<InputProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>
> = (props) => {
  const { defaultValue, disabled, border, center } = {
    ...defaultProps,
    ...props,
  }
  const [value, setValue] = useState(defaultValue)
  const cls = className(
    prefixCls,
    disabled && `${prefixCls}-disabled`,
    border && 'ashe-input-border',
    center && 'center'
  )

  return (
    <div className={cls}>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => {
          const value = e.target.value
          setValue(value)
          props.onChange?.(value)
        }}
      />
    </div>
  )
}

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
