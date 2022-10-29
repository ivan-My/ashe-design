import React, { useEffect, useState } from 'react'
import { Input } from './input'

const InputDemo = () => {
  const [value, setValue] = useState('111')
  useEffect(() => {
    console.log(value)
  })
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Input defaultValue={value} onChange={(e) => setValue(e)} />
        <Input />
      </div>
    </>
  )
}

export default InputDemo
