import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import className from 'classnames'
import { InputInstance, InputProps } from './interface'
import { withNativeProps } from '@/utils/native-props'

const defaultProps = {
    name: '',
    type: 'text',
    placeholder: '',
    defaultValue: '',
    disabled: false,
} as InputProps

const classPrefix = 'ashe-input'

export const Input = React.forwardRef<InputInstance, Partial<InputProps>>(
    (props, ref) => {
        const { name, defaultValue, disabled, placeholder } = {
            ...defaultProps,
            ...props,
        }
        const inputRef = useRef<HTMLInputElement>(null)
        const [value, setValue] = useState(defaultValue)
        const cls = className(
            classPrefix,
            disabled && `${classPrefix}-disabled`
        )

        useEffect(() => {
            setValue(defaultValue)
        }, [defaultValue])

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

        return withNativeProps(
            props,
            <div className={cls}>
                <input
                    type="text"
                    name={name}
                    value={value}
                    ref={inputRef}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={(e) => {
                        const value = e.target.value
                        setValue(value)
                        props.onChange?.(value)
                    }}
                    onBlur={(e) => {
                        const value = e.target.value
                        setValue(value)
                        props.onBlur?.(value)
                    }}
                    onFocus={(e) => {
                        props.onFocus?.(value)
                    }}
                />
            </div>
        )
    }
)

Input.defaultProps = defaultProps
Input.displayName = 'AsheInput'
