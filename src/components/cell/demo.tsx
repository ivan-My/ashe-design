import React from 'react'
import { Cell } from './cell'
import Loading from '../loading'

const CellDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Cell title="我是标题" desc="我是秒啊的" extra="我是最右边的" />
                <Cell title="我是标题" desc="我是秒啊的" extra={<Loading />} />
                <Cell title="我是标题" />
            </div>
        </>
    )
}

export default CellDemo
