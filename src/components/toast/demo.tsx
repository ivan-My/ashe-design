import React from 'react'
import Toast from './index'
import './demo.scss'
import Loading from '../loading'
import { Cell } from '@/components/ashe.react'

const ToastDemo = () => {
    return (
        <>
            <div className="content">
                <h2>基础用法</h2>
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
                            icon: <Loading show type="rotate" color="white" />,
                        })
                    }
                />

                <h2>自定义位置</h2>

                <Cell
                    title="顶部展示"
                    onClick={() =>
                        Toast.show({
                            content: '提示内容',
                            position: 'top',
                        })
                    }
                />

                <h2> 自定义高度</h2>

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

                <h2> 背景不滚动</h2>
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
