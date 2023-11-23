import React, { FC } from 'react'
import { TagProps } from './interface'
import { withNativeProps } from '@/utils/native-props'

const classPrefix = 'ashe-tag'

const defaultProps = {
    color: '',
    background: '',
    round: false,
    plain: false,
} as TagProps
export const Tag: FC<
    Partial<TagProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { background, color, children } = { ...defaultProps, ...props }
    const style = {
        background,
        color,
    }
    return withNativeProps(
        props,
        <span className={classPrefix} style={style}>
            {children}
        </span>
    )
}

Tag.defaultProps = defaultProps
Tag.displayName = 'AsheTag'
