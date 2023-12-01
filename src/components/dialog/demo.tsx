import React from 'react'
import { Button } from '../button/button'
import { Dialog } from '../dialog/dialog'

const DialogDemo = () => {
    return (
        <>
            <div className="content">
                基础用法
                <Button
                    onClick={() => {
                        Dialog.show()
                    }}
                >
                    点击
                </Button>
            </div>
        </>
    )
}

export default DialogDemo
