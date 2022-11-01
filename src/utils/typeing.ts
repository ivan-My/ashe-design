import React, { ReactNode } from 'react'

export interface IComponent {
  clasName?: string
  style?: React.CSSProperties
  children?: ReactNode
}
