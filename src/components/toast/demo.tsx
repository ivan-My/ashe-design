import React from 'react'
import Toast from './index'

const ToastDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div onClick={() => Toast.show('loading')}>显示</div>
        <div onClick={() => Toast.clear()}>关闭</div>
      </div>
    </>
  )
}

export default ToastDemo
