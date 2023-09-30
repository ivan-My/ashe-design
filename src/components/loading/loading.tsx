import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { LoadingProps } from './interface'
import { pxCheck } from '@/utils/px-check'

const classPrefix = 'ashe-loading'
const defaultProps = {
    type: 'rotate',
    size: '',
    color: '',
    vertical: false,
} as LoadingProps

export const Loading: FunctionComponent<
    Partial<LoadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { type, size, color, vertical, children, className, icon } = {
        ...defaultProps,
        ...props,
    }

    const width = pxCheck(size)
    const height = pxCheck(size)
    const changeElement = (
        <>
            <div
                style={{ backgroundColor: color, width, height }}
                className={`${type}-bounce bounce1`}
            />
            <div
                style={{ backgroundColor: color, width, height }}
                className={`${type}-bounce  bounce2`}
            />
            <div
                style={{ backgroundColor: color, width, height }}
                className={`${type}-bounce bounce3`}
            />
        </>
    )

    const cls = classNames(classPrefix, className)
    const spinnerCls = classNames(
        `spinner-${type}`,
        children && `${classPrefix}__spinner`
    )

    const spinnerStyle: React.CSSProperties = {
        flexDirection: vertical ? 'column' : 'initial',
    }
    const textStyle = {
        marginTop: vertical ? '5px' : '',
        marginLeft: !vertical ? '5px' : '',
    }
    return (
        <div className={cls}>
            <div className={spinnerCls} style={spinnerStyle}>
                {icon && <>{icon}</>}
                {type === 'rotate' && !icon && (
                    <div
                        className="rotate"
                        style={{ borderColor: color, width, height }}
                    />
                )}
                {type === 'change' && !icon && changeElement}
                {children && (
                    <span className="ashe-loading__text" style={textStyle}>
                        {children}
                    </span>
                )}
            </div>
        </div>
    )
}

Loading.defaultProps = defaultProps
Loading.displayName = 'AsheLoading'
