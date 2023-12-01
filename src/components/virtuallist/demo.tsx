import React from 'react'
import { VirtualList } from './virtuallist'

const VirtualListDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <VirtualList itemHeight={66} list={new Array(10)}></VirtualList>
            </div>
        </>
    )
}

export default VirtualListDemo
