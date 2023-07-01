import React from 'react'
import { Button } from './button'
import './demo.scss'

const ButtonDemo = () => {
  return (
    <div>
      <Button
        className="button"
        onClick={(e) => {
          console.log(e)
        }}
      >
        按钮
      </Button>

      <h3>禁用状态</h3>
      <Button disabled className="test">
        按钮
      </Button>
      <h3>自定义颜色</h3>
      <Button>按钮</Button>
    </div>
  )
}

export default ButtonDemo
