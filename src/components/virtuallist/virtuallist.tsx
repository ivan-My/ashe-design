import React, { FunctionComponent } from 'react'
import { VirtualListProps } from './interface'

const defaultProps = {} as VirtualListProps
export const VirtualList: FunctionComponent<
    Partial<VirtualListProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { children } = { ...defaultProps, ...props }
    return <div className="ashe-virtuallist">VirtualList</div>
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'AsheVirtualList'
