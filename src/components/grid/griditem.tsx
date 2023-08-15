import React from 'react'
import className from 'classnames'
import { GridProps } from '@/components/grid/interface'
import { withNativeProps } from '@/utils/native-props'
import { BasicComponent } from '@/utils/typeing'
import { pxCheck } from '@/utils/px-check'

const classPrefix = 'ashe-grid-item'
export interface GridItemProps extends BasicComponent, GridProps {
  text: string
  index: number
}
const defaultProps = {
  text: '',
  columns: 3,
  square: false,
  gap: 0,
  index: 0,
  center: true,
} as GridItemProps

export const GridItem: React.FC<Partial<GridItemProps>> = (props) => {
  const {
    text,
    style,
    columns,
    square,
    gap,
    center,
    index,
    onClick,
    children,
  } = {
    ...defaultProps,
    ...props,
  }
  const cls = className(classPrefix)
  const contentCls = className(
    `${classPrefix}__content`,
    center && `${classPrefix}__content--center`,
    square && `${classPrefix}__content--square`
  )
  const rootStyle = () => {
    const styles: React.CSSProperties = {
      flexBasis: `${100 / +columns}%`,
      ...style,
    }
    if (square) {
      styles.paddingTop = `${100 / +columns}%`
    }
    if (gap) {
      styles.paddingRight = pxCheck(gap)
      if (index >= Number(columns)) {
        styles.marginTop = pxCheck(gap)
      }
    }
    return styles
  }

  return withNativeProps(
    props,
    <div className={cls} style={rootStyle()}>
      <div className={contentCls} onClick={onClick}>
        {children}
        {text ? <div className={`${classPrefix}__text`}>{text}</div> : null}
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'AsheGridItem'
