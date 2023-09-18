import React from 'react'
import { useTouch } from '@/utils/use-touch'

const DialogDemo = () => {
    const d = useTouch()
    console.log(d)
    return (
        <>
            <div className="content">
                <div
                    style={{
                        height: '2000px',
                    }}
                >
                    基础用法
                </div>
            </div>
        </>
    )
}

export default DialogDemo
