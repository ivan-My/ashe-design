import React from 'react'
import { Space } from './space'
import Button from '../button'

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
        <p>换行</p>
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
        <p>垂直方向的间距</p>
        <Space direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </div>
    </>
  )
}

export default SpaceDemo
