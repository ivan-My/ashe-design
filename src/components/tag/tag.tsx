import React, { FC } from 'react'
import { TagProps } from './interface'

const classPrefix = 'ashe-tag'

const defaultProps = {
    color: 'string',
    background: 'string',
    round: false,
    plain: false,
} as TagProps
export const Tag: FC<
    Partial<TagProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { children } = { ...defaultProps, ...props }

    return <span className={classPrefix}>{children}</span>
}

Tag.defaultProps = defaultProps
Tag.displayName = 'AsheTag'
