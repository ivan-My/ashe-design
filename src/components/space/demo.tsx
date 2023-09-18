import React from 'react'
import { Space } from './space'
import Button from '../button'
import { ConfigProvider } from '@/components/ashe.react'

const SpaceDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Space align="end" justify="around">
                    <Button>按钮1</Button>
                    <Button>按钮2</Button>
                    <Button>按钮3</Button>
                </Space>
                <div className="title">换行</div>
                <Space wrap>
                    <Button>按钮1</Button>
                    <Button>按钮2</Button>
                    <Button>按钮3</Button>
                    <Button>按钮4</Button>
                    <Button>按钮5</Button>
                    <Button>按钮6</Button>
                    <Button>按钮7</Button>
                    <Button>按钮8</Button>
                    <Button>按钮9</Button>
                    <Button>按钮10</Button>
                    <Button>按钮11</Button>
                </Space>
                <div className="title">垂直方向的间距</div>
                <Space direction="vertical">
                    <Button>按钮1</Button>
                    <Button>按钮2</Button>
                    <Button>按钮3</Button>
                </Space>

                <div className="title">间距大小</div>
                <ConfigProvider
                    theme={{
                        asheSpaceGap: '20px',
                    }}
                >
                    <Space direction="vertical">
                        <Button>按钮1</Button>
                        <Button>按钮2</Button>
                        <Button>按钮3</Button>
                    </Space>
                </ConfigProvider>
            </div>
        </>
    )
}

export default SpaceDemo
