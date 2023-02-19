import React from 'react'
import Toast from './index'
import './demo.scss'

const ToastDemo = () => {
  return (
    <>
      <div className="content">
        <h2>基础用法</h2>
        <div onClick={() => Toast.text('文字提示')}>文字提示</div>
        <div onClick={() => Toast.hide()}>隐藏toast</div>
        <div
          onClick={() =>
            Toast.text('文字提示', {
              center: false,
              bottom: '30%',
            })
          }
        >
          自定义高度
        </div>
        <div
          onClick={() =>
            Toast.text('文字提示', {
              duration: 0,
            })
          }
        >
          toast不消失
        </div>
        <div
          onClick={() => {
            Toast.loading('loading...', { duration: 0 })
            setTimeout(() => {
              //  Toast.hide()
            }, 2000)
          }}
        >
          loading 2秒后消失
        </div>
      </div>
    </>
  )
}

export default ToastDemo
