import React, {useEffect, useState} from 'react'
 import { Input } from './input'
// import {GlInput}from 'zed-ui'
// import {Input}from 'antd-mobile'


const InputDemo = () => {
  const [value,setValue]= useState('111')
  // const [value2,setValue2]= useState('222')
  useEffect(()=>{
    console.log(value)
    //onsole.log(value)
  })
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Input defaultValue={value} onChange={e =>setValue(e.target.value)} />
       {/*// <Input  defaultValue={value2} onChange={e =>setValue2(e.target.value)} />*/}
      </div>
    '</>
  )
}

export default InputDemo
