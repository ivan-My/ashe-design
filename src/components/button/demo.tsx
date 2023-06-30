import React, { useState } from 'react'
import { Button } from './button'

const ButtonDemo = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <Button
        type={'success'}
        onClick={(e) => {
          console.log(e)
        }}
      >
        按钮
      </Button>

      <h3>禁用状态</h3>
      <Button disabled color="red" className="test">
        按钮
      </Button>
      <h3>自定义颜色</h3>

      <Button
        color="green"
        loading={loading}
        nativeType="button"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
      >
        点击
      </Button>
    </div>
  )
}

export default ButtonDemo
