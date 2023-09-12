import React from 'react'
import { Cell } from './cell'

const CellDemo = () => {
    return (
        <>
            <div className="demo">
                <h2>基础用法</h2>
                <Cell title="我是标题" desc="我是秒啊的" extra="我是最右边的" />
                <Cell title="我是标题" desc="我是秒啊的" />{' '}
                <Cell title="我是标题" />
            </div>
        </>
    )
}

export default CellDemo
