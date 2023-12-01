import React, { FunctionComponent } from 'react'
import { VirtualListProps } from './interface'

const initPosition = (reaItemSize: number, length = 0) => {
    let index = 0
    const positions = Array(length)
    while (index < length) {
        positions[index] = {
            index,
            width: reaItemSize,
            height: reaItemSize,
            top: index * reaItemSize,
            bottom: (index + 1) * reaItemSize,
            left: index * reaItemSize,
            right: (index + 1) * reaItemSize,
        }
        index++
    }
}
const defaultProps = {} as VirtualListProps
export const VirtualList: FunctionComponent<
    Partial<VirtualListProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { itemHeight, list, children } = { ...defaultProps, ...props }

    initPosition(itemHeight, list.length)
    return <div className="ashe-virtuallist">VirtualList</div>
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'AsheVirtualList'
