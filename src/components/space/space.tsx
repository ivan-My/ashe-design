import React, { FunctionComponent } from 'react'
import className from 'classnames'
import { BasicComponent } from '@/utils/typeing'
import { withNativeProps } from '@/utils/native-props'

const classPrefix = 'ashe-space'

export interface SpaceProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  align: 'start' | 'end' | 'center' | 'baseline'
  justify:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  direction: 'horizontal',
} as SpaceProps

export const Space: FunctionComponent<
  Partial<SpaceProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, onClick, wrap, align, direction, justify } = {
    ...defaultProps,
    ...props,
  }
  const cls = className(
    classPrefix,
    wrap && `${classPrefix}-wrap`,
    direction && `${classPrefix}-${direction}`,
    align && `${classPrefix}-align-${align}`,
    justify && `${classPrefix}-justify-${justify}`
  )
  return withNativeProps(
    props,
    <div className={cls} onClick={onClick}>
      {React.Children.map(children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        )
      })}
    </div>
  )
}

Space.defaultProps = defaultProps
Space.displayName = 'AsheSpace'
