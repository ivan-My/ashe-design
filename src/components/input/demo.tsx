import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Input } from './input'

const InputDemo = () => {
  const [value, setValue] = useState('111')
  const myRef = useRef<any>(null)

  useEffect(() => {
    //  console.log(myRef.current)
  })

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Input
          defaultValue={'asdf'}
          ref={myRef}
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
        <button onClick={() => myRef.current.focus()}>获取焦点</button>
        <button onClick={() => myRef.current.blur()}>失去焦点</button>
        <button onClick={() => myRef.current.clear()}> 清空value</button>
      </div>
    </>
  )
}

export default InputDemo
