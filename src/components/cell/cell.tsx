import React, { FunctionComponent } from 'react'
import { CellProps } from '@/components/cell/interface'

const defaultProps = {} as CellProps
export const Cell: FunctionComponent<
  Partial<CellProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="ashe-cell">Cell</div>
}

Cell.defaultProps = defaultProps
Cell.displayName = 'AsheCell'
