import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { GridProps } from './interface'
import { withNativeProps } from '@/utils/native-props'
import { pxCheck } from '@/utils/px-check'

const classPrefix = 'ashe-grid'

const defaultProps = {
  columns: 3,
  gap: 0,
  center: true,
  square: false,
} as GridProps
export const Grid: FunctionComponent<
  Partial<GridProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { columns, gap, center, square, onClick, children } = {
    ...defaultProps,
    ...props,
  }

  const cls = () => {
    return classNames(classPrefix, {
      [`${classPrefix}__border`]: !gap,
    })
  }

  return withNativeProps(
    props,
    <div
      className={cls()}
      style={{
        paddingLeft: pxCheck(gap),
      }}
    >
      {React.Children.toArray(children)
        .filter(Boolean)
        .map((child: any, index: number) => {
          return React.cloneElement(child, {
            index,
            columns,
            gap,
            center,
            square,
            onClick,
          })
        })}
    </div>
  )
}

Grid.defaultProps = defaultProps
Grid.displayName = 'AsheGrid'
