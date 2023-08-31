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
      <div className="demo">
        <h2>基础用法</h2>
        <div onClick={() => setChecked(!checked)}>切换</div>
        <Skeleton title animated avatar />
      </div>
    </ConfigProvider>
  )
}

export default SkeletonDemo
