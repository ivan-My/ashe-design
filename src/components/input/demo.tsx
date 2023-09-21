import React, { useEffect, useRef } from 'react'
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
                <div className="content">
                    <div className="title">基础用法</div>
                    <Input
                        ref={myRef}
                        name="username"
                        placeholder="请输入用户名"
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
