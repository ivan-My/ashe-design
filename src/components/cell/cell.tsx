import React, { FunctionComponent } from 'react'
import { CellProps } from '@/components/cell/interface'

const classPrefix = 'ashe-cell'

const defaultProps = {
    title: null,
    desc: null,
    extra: null,
} as CellProps
export const Cell: FunctionComponent<
    Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
    const { title, desc, extra, onClick, children } = {
        ...defaultProps,
        ...props,
    }

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        onClick(event)
    }
    return (
        <div className={classPrefix} onClick={(event) => handleClick(event)}>
            {title || desc ? (
                <div className={`${classPrefix}__left`}>
                    {title && (
                        <div className={`${classPrefix}__title`}>{title}</div>
                    )}
                    {desc && (
                        <div className={`${classPrefix}__desc`}>{desc}</div>
                    )}
                </div>
            ) : null}
            {extra && <div className={`${classPrefix}__extra`}> {extra}</div>}
        </div>
    )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'AsheCell'
