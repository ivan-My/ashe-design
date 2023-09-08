import React from 'react'
import { Space } from './space'
import Button from '../button'
import { ConfigProvider } from '@/components/ashe.react'

const SpaceDemo = () => {
  return (
    <>
      <div className="content">
        <h2>基础用法</h2>
        <Space align="end" justify="around">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
        <h2>换行</h2>
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
        <h2>垂直方向的间距</h2>
        <Space direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>

        <h2>间距大小</h2>
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
