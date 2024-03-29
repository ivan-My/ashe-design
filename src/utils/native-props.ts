import React, { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
}

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = { ...element.props }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  return React.cloneElement(element, p)
}
