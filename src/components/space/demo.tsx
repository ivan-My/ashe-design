import React from 'react'
import { Space } from './space'
import Button from '../button'
import './demo.scss'

const SpaceDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Space justify="center">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </div>
    </>
  )
}

export default SpaceDemo
