import * as React from 'react'
import { Loading } from './loading'
import { Button } from '../button/button'
import { Cell } from '../cell/cell'
import { Mask } from '../mask/mask'
import './demo.scss'

const Icon = () => (
    <svg
        className="nut-icon nut-icon-Category"
        xmlns="http://www.w3.org/2000/svg"
        color="red"
        viewBox="0 0 1024 1024"
        aria-labelledby="Category"
        role="presentation"
        style={{ width: ' 30px', height: '30px' }}
    >
        <path
            d="M307.2 468.114H160.914C73.143 468.114 0 394.971 0 307.2V160.914C0 73.143 73.143 0 160.914 0H307.2c87.771 0 160.914 73.143 160.914 160.914V307.2c0 87.771-73.143 160.914-160.914 160.914zM160.914 87.771c-40.96 0-73.143 32.183-73.143 73.143V307.2c0 40.96 32.183 73.143 73.143 73.143H307.2c40.96 0 73.143-32.183 73.143-73.143V160.914c0-40.96-32.183-73.143-73.143-73.143H160.914zM307.2 1024H160.914C73.143 1024 0 950.857 0 863.086V716.8c0-87.771 73.143-160.914 160.914-160.914H307.2c87.771 0 160.914 73.143 160.914 160.914v146.286c0 87.771-73.143 160.914-160.914 160.914zM160.914 643.657c-40.96 0-73.143 32.183-73.143 73.143v146.286c0 40.96 32.183 73.143 73.143 73.143H307.2c40.96 0 73.143-32.183 73.143-73.143V716.8c0-40.96-32.183-73.143-73.143-73.143H160.914zm629.029-175.543c-128.732 0-234.057-105.325-234.057-234.057S661.21 0 789.943 0 1024 105.326 1024 234.057 918.674 468.114 789.943 468.114zm0-380.343c-81.92 0-146.286 64.366-146.286 146.286s64.366 146.286 146.286 146.286 146.286-64.366 146.286-146.286S871.863 87.771 789.943 87.771zM863.086 1024H716.8c-87.771 0-160.914-73.143-160.914-160.914V716.8c0-87.771 73.143-160.914 160.914-160.914h146.286c87.771 0 160.914 73.143 160.914 160.914v146.286C1024 950.857 950.857 1024 863.086 1024zM716.8 643.657c-40.96 0-73.143 32.183-73.143 73.143v146.286c0 40.96 32.183 73.143 73.143 73.143h146.286c40.96 0 73.143-32.183 73.143-73.143V716.8c0-40.96-32.183-73.143-73.143-73.143H716.8z"
            fill="currentColor"
            fillOpacity="0.9"
        />
    </svg>
)
const LoadingDemo = () => {
    const [fullScreen, setFullScreen] = React.useState(false)
    const WrapperStyle = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <>
            <div className="content loading-content">
                <div className="title">基础用法</div>
                <Cell
                    title={
                        <div>
                            <Loading type="rotate" />
                            <Loading type="change" />
                        </div>
                    }
                />

                <div className="title">设置大小和颜色</div>
                <Cell
                    title={
                        <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            <Loading type="change" size="10" color="red" />
                            <Loading type="rotate" size="15" color="green" />
                        </div>
                    }
                />

                <div className="title">自定渲染图标</div>
                <Cell title={<Loading type="change" icon={<Icon />} />} />

                <div className="title">与Mask遮罩结合使用</div>
                <Button onClick={() => setFullScreen(true)}>全屏显示</Button>
                <Mask visible={fullScreen} onClick={() => setFullScreen(false)}>
                    <div className="wrapper" style={WrapperStyle}>
                        <Loading type="rotate" color="white" size={25} vertical>
                            加载中...
                        </Loading>
                    </div>
                </Mask>
                <Loading>加载中</Loading>
            </div>
        </>
    )
}

export default LoadingDemo
