import React from 'react'
import Toast from './index'
import './demo.scss'
import Loading from '../loading'

const darkTheme = {
  asheToastTextFontSize: '20px',
}
const ToastDemo = () => {
  return (
    <>
      <div className="content">
        <h2>基础用法</h2>
        <div
          onClick={() =>
            Toast.show({
              content: '提示内容',
              duration: 0,
            })
          }
        >
          文字提示
        </div>
        <div
          onClick={() =>
            Toast.show({
              content: '加载中...',
              icon: <Loading show type="rotate" color={'white'} />,
            })
          }
        >
          自定义图标
        </div>
        <h2>自定义位置</h2>
        <div
          onClick={() =>
            Toast.show({
              content: '提示内容',
              position: 'top',
            })
          }
        >
          顶部展示
        </div>
        <div
          onClick={() =>
            Toast.show({
              content: '提示内容',
              position: 'bottom',
            })
          }
        >
          底部展示
        </div>

        <h2> 自定义高度</h2>
        <div
          onClick={() =>
            Toast.show({
              content: '提示内容',
              contentStyle: {
                top: '20%',
              },
            })
          }
        >
          自定义高度
        </div>
        <h2> 背景不滚动</h2>
        <div
          onClick={() =>
            Toast.show({
              content: '提示内容',
              lockScroll: true,
            })
          }
        >
          背景不滚动
        </div>
        <div onClick={() => Toast.hide()}>主动关闭</div>
      </div>
    </>
  )
}

export default ToastDemo
