import React, { ReactNode } from 'react'

export interface BasicComponent {
  clasName?: string
  style?: React.CSSProperties
  children?: ReactNode
}
