import * as React from 'react'
import { Loading } from './loading'
import './demo.scss'

const LoadingDemo = () => {
    const [fullScreen, setFullScreen] = React.useState(false)
    return (
        <>
            {!fullScreen && (
                <div className="loading-content">
                    <div className="title">基础用法</div>
                    <div>
                        <Loading show type="flash" />
                        <div> flash</div>
                    </div>
                    <div>
                        <Loading show type="circle" bgColor="yellow" />
                        <div> circle</div>
                    </div>
                    <div>
                        <Loading show type="rotate" />
                        <div> rotate</div>
                    </div>
                    <div>
                        <Loading show type="change" />
                        <div> change</div>
                    </div>
                    <div className="title">加载动画大小</div>
                    <div>
                        <Loading show type="rotate" size="mini" />
                        <div> mini</div>
                    </div>
                    <div>
                        <Loading show type="rotate" size="medium" />
                        <div> medium</div>
                    </div>
                    <div>
                        <Loading show type="rotate" size="large" />
                        <div> large</div>
                    </div>
                    <div className="title">自定义颜色</div>
                    <Loading show type="flash" color="blue" />
                    <div>
                        <div onClick={() => setFullScreen(true)}>全屏显示</div>
                    </div>
                </div>
            )}

            {fullScreen && (
                <div onClick={() => setFullScreen(false)}>
                    <Loading show type="circle" fullScreen size="large">
                        <h5> 加载中...</h5>
                    </Loading>
                </div>
            )}
        </>
    )
}

export default LoadingDemo
