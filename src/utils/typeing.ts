import React, { ReactNode } from 'react'

export interface BasicComponent {
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
}
