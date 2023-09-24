import React, { FC } from 'react'
import classNames from 'classnames'
import { withNativeProps } from '@/utils/native-props'
import { ButtonProps } from './interface'

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
