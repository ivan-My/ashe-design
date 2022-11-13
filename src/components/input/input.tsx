import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { IComponent } from '@/utils/typeing'
import className from 'classnames'
import bem from '@/utils/bem'

export interface InputProps extends IComponent {
  ref?: any
  defaultValue?: string
  disabled?: boolean
  border?: boolean
  center?: boolean
  onChange?: (value: string) => void
  onBlur?: (value: any) => void
  onFocus?: (value: any) => void
}
const defaultProps = {
  defaultValue: '',
  disabled: false,
  border: true,
  center: false,
} as InputProps
export type InputInstance = {
  focus: () => void
  blur: () => void
  clear: () => void
}

const b = bem('input')

export const Input = React.forwardRef<InputInstance, InputProps>(
  (props, ref) => {
    const { defaultValue, disabled, border, center } = {
      ...defaultProps,
      ...props,
    }
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(defaultValue)
    const cls = className(
      b(),
      disabled && `${b()}-disabled`,
      border && `${b()}-border`,
      center && 'center'
    )

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus()
      },
      blur: () => {
        inputRef.current?.blur()
      },
      clear: () => {
        setValue('')
      },
    }))

    useEffect(() => {}, [props.defaultValue])
    return (
      <div className={cls}>
        <input
          type="text"
          value={value}
          ref={inputRef}
          disabled={disabled}
          onChange={(e) => {
            const value = e.target.value
            setValue(value)
            props.onChange?.(value)
          }}
          onBlur={(e) => {
            props.onBlur?.(e)
          }}
          onFocus={(e) => {
            props.onFocus?.(e)
          }}
        />
      </div>
    )
  }
)

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
