import React, { useEffect, useRef, useState } from 'react'
import { Input } from './input'
import './demo.scss'

const InputDemo = () => {
  const myRef = useRef<any>(null)

  useEffect(() => {
    console.log(myRef.current)
  })

  return (
    <>
      <>
        <div className="demo">
          <h2>基础用法</h2>
          <Input
            ref={myRef}
            name="username"
            onChange={(e) => {
              console.log(e)
            }}
          />
        </div>
      </>
    </>
  )
}

export default InputDemo
