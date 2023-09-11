import React, { CSSProperties, FunctionComponent } from 'react'
import { SkeletonProps } from './interface'
import { withNativeProps } from '@/utils/native-props'

const addUnit = (value?: string | number): string | undefined => {
    if (value === undefined || value === null) {
        return undefined
    }
    value = String(value)
    return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value
}

const classPrefix = 'ashe-skeleton'
const DEFAULT_ROW_WIDTH = '100%'
const DEFAULT_LAST_ROW_WIDTH = '70%'

const defaultProps = {
    visible: false,
    animated: true,
    rows: 3,
    avatar: false,
    avatarSize: '50px',
    title: false,
    rowWidth: '100%',
    rowHeight: '',
    avatarShape: 'round',
} as SkeletonProps
export const Skeleton: FunctionComponent<Partial<SkeletonProps>> = (props) => {
    const {
        visible,
        animated,
        rows,
        rowWidth,
        rowHeight,
        title,
        avatar,
        avatarSize,
        avatarShape,
        children,
    } = {
        ...defaultProps,
        ...props,
    }

    const repeatLines = (num: number) => {
        return Array.from({ length: num }, (v, i) => i)
    }

    const getRowWidth = (index: number) => {
        if (
            rowWidth === DEFAULT_ROW_WIDTH &&
            index === +rows - 1 &&
            index !== 0
        ) {
            return DEFAULT_LAST_ROW_WIDTH
        }

        if (Array.isArray(rowWidth)) {
            return rowWidth[index]
        }

        return rowWidth
    }
    const getRowHeight = (index: number) => {
        if (Array.isArray(rowHeight)) {
            return rowHeight[index]
        }
        return rowHeight
    }

    const getAvatarStyle = () => {
        const style: CSSProperties = {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
        }
        if (avatarSize) {
            style.width = avatarSize
            style.height = avatarSize
        }
        if (avatarShape === 'round') {
            style.borderRadius = '50%'
        }
        return style
    }
    return withNativeProps(
        props,
        <>
            {visible ? (
                <div>{children}</div>
            ) : (
                <div className={classPrefix}>
                    {animated && (
                        <div className={`${classPrefix}__animation`} />
                    )}
                    <div className={`${classPrefix}__content`}>
                        {avatar && (
                            <div
                                className={`${classPrefix}__content__avatar`}
                                style={getAvatarStyle()}
                            />
                        )}
                        <div className={`${classPrefix}__content-line`}>
                            {title && (
                                <div className={`${classPrefix}__title`} />
                            )}
                            {repeatLines(rows).map((item, index) => {
                                const width = addUnit(getRowWidth(index))
                                const height = addUnit(getRowHeight(index))
                                return (
                                    <div
                                        className={`${classPrefix}__block`}
                                        key={index}
                                        style={{ width, height }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Skeleton.defaultProps = defaultProps
Skeleton.displayName = 'AsheSkeleton'
