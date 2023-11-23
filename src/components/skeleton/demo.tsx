import React, { useState } from 'react'
import { Skeleton } from './skeleton'
import ConfigProvider from '../configprovider'

const style = {
    width: '50px',
    height: '50px',
}
const SkeletonDemo = () => {
    const [checked, setChecked] = useState(false)
    const changeStatus = (
        value: boolean,
        event: React.MouseEvent<Element, MouseEvent>
    ) => {
        console.log(`触发了change事件，开关状态：${value}`)
        setChecked(value)
    }
    return (
        <ConfigProvider
            theme={{
                asheSkeletonLineBorderRadius: '5px',
            }}
        >
            <div className="content">
                <div className="title">基础用法</div>
                <div onClick={() => setChecked(!checked)}>切换</div>
                <Skeleton title avatar />
                <Skeleton grid rows={4} />
            </div>
        </ConfigProvider>
    )
}

export default SkeletonDemo
