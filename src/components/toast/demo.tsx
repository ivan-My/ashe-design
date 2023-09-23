import React from 'react'
import Toast from './index'
import './demo.scss'
import Loading from '../loading'
import { Cell } from '@/components/ashe.react'

const ToastDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Cell
                    title="文字提示"
                    onClick={() =>
                        Toast.show({
                            content: '提示内容',
                        })
                    }
                />
                <Cell
                    title="自定义图标"
                    onClick={() =>
                        Toast.show({
                            content: '加载中...',
                            icon: <Loading type="rotate" color="white" />,
                        })
                    }
                />

                <div className="title">自定义位置</div>

                <Cell
                    title="顶部展示"
                    onClick={() =>
                        Toast.show({
                            content: '提示内容',
                            position: 'top',
                        })
                    }
                />

                <div className="title"> 自定义高度</div>

                <Cell
                    title="自定义高度"
                    onClick={() =>
                        Toast.show({
                            content: '提示内容',
                            contentStyle: {
                                top: '20%',
                            },
                        })
                    }
                />

                <div className="title"> 背景不滚动</div>
                <Cell
                    title="自定义高度"
                    onClick={() =>
                        Toast.show({
                            content: '提示内容',
                            lockScroll: true,
                        })
                    }
                />

                <Cell title="主动关闭" onClick={() => Toast.hide()} />
            </div>
        </>
    )
}

export default ToastDemo
