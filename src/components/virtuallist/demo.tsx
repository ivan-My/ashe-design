import React from 'react'
import { VirtualList } from './virtuallist'

const VirtualListDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <VirtualList></VirtualList>
            </div>
        </>
    )
}

export default VirtualListDemo
