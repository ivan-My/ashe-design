import React from 'react'
import { Button } from './button'

const ButtonDemo = () => {
  return (
    <div>
      <Button
        onClick={(e) => {
          console.log(e)
          console.log(2222)
        }}
      >
        按钮
      </Button>

      <h3>禁用状态</h3>
      <Button disabled color="cyan" className="test">
        按钮
      </Button>
      <h3>自定义颜色</h3>
      <Button color="green">按钮</Button>
    </div>
  )
}

export default ButtonDemo
