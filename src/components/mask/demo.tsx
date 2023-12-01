import React, { useState } from 'react'
import { Mask } from './mask'

import { Cell } from '../cell/cell'
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
            <div className="content">
                <div className="title">基础用法</div>
                <div className="first">
                    <Cell title="显示遮罩层" onClick={handleToggleShow} />

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

                <>
                    <Cell title="遮罩样式" onClick={handleToggleShow2} />
                    <Mask visible={visible2} onClick={onClose2} />
                </>

                <>
                    <Cell title="设置动画时间" onClick={handleToggleShow3} />
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

                <>
                    <Cell title="不锁定背景滚动" onClick={handleToggleShow4} />
                    <Mask
                        visible={visible4}
                        onClick={onClose4}
                        disableBodyScroll={false}
                    />
                </>

                <>
                    <Cell title="嵌套内容" onClick={handleToggleShow5} />

                    <Mask visible={visible5} onClick={onClose5}>
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
