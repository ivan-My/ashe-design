import React, { useState } from 'react'
import { Mask } from './mask'
import Button from '@/components/button'
import './demo.scss'

const WrapperStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}
const ContentStyle = {
  display: 'flex',
  width: '150px',
  height: '150px',
  background: '#fff',
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
}
const MaskDemo = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)

  const handleToggleShow = () => {
    setVisible(true)
  }
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const handleToggleShow3 = () => {
    setVisible3(true)
  }
  const handleToggleShow4 = () => {
    setVisible4(true)
  }
  const handleToggleShow5 = () => {
    setVisible5(true)
  }
  const handleToggleShow6 = () => {
    setVisible6(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  const onClose3 = () => {
    setVisible3(false)
  }
  const onClose4 = () => {
    setVisible4(false)
  }
  const onClose5 = () => {
    setVisible5(false)
  }
  const onClose6 = () => {
    setVisible6(false)
  }
  return (
    <>
      <div className="demo demo-Mask">
        <h4>基础用法</h4>
        <div className="first">
          <Button type="primary" onClick={handleToggleShow}>
            显示遮罩层
          </Button>
          <Mask
            visible={visible}
            onClick={onClose}
            afterShow={() => {
              console.log('afterShow')
            }}
            afterClose={() => {
              console.log('afterClose')
            }}
          />
        </div>

        <h4>遮罩样式</h4>
        <>
          <Button type="primary" onClick={handleToggleShow2}>
            遮罩样式
          </Button>
          <Mask visible={visible2} onClick={onClose2} />
        </>

        <h4>设置动画时间</h4>
        <>
          <Button type="primary" onClick={handleToggleShow3}>
            设置动画时间
          </Button>
          <Mask
            visible={visible3}
            onClick={onClose3}
            duration={2.5}
            afterShow={() => {
              console.log('afterShow')
            }}
            afterClose={() => {
              console.log('afterClose')
            }}
          />
        </>

        <h4>不锁定背景滚动</h4>
        <>
          <Button type="primary" onClick={handleToggleShow4}>
            不锁定背景滚动
          </Button>
          <Mask
            visible={visible4}
            onClick={onClose4}
            disableBodyScroll={false}
          />
        </>

        <h4>嵌套内容</h4>
        <>
          <Button type="success" onClick={handleToggleShow5}>
            嵌套内容
          </Button>
          <Mask visible={visible5} onClick={onClose5}>
            <div className="wrapper" style={WrapperStyle}>
              <div className="content" style={ContentStyle}>
                这里是正文
              </div>
            </div>
          </Mask>
        </>

        <h4>点击遮罩不关闭</h4>
        <>
          <Button type="primary" onClick={handleToggleShow6}>
            点击遮罩不关闭
          </Button>
          <Mask visible={visible6} closeOnOverlayClick={false}>
            <div className="wrapper" style={WrapperStyle}>
              <div className="content" style={ContentStyle}>
                这里是正文
              </div>
            </div>
          </Mask>
        </>
      </div>
    </>
  )
}

export default MaskDemo
