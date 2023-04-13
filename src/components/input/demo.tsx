import React, { useEffect, useRef, useState } from 'react'
import { Input } from './input'
import './demo.scss'

const InputDemo = () => {
  const [value, setValue] = useState('111')
  const myRef = useRef<any>(null)

  useEffect(() => {
    //  console.log(myRef.current)
  })

  const element = (
    <>
      <>
        <div className="demo">
          <h2>基础用法</h2>
          <Input
            defaultValue="asdf"
            onChange={(e) => {
              console.log(e)
              setValue(e)
            }}
            onFocus={(e) => {
              console.log(e)
            }}
          />
          <Input />
          <Input />
          <div onClick={() => myRef.current.focus()}>获取焦点</div>
          <div onClick={() => myRef.current.blur()}>失去焦点</div>
          <div onClick={() => myRef.current.clear()}> 清空value</div>
        </div>
      </>
    </>
  )
  return element
}

export default InputDemo
