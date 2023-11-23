import React, { useRef } from 'react'
import { Sticky } from './sticky'
import { Button } from '@/components/ashe.react'
import './demo.scss'

const StickyDemo = () => {
    const container = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="content sticky-content">
                <div className="title">基础用法</div>
                <Sticky threshold={60}>
                    <Button>点击</Button>
                </Sticky>

                <div
                    ref={container}
                    style={{ height: '150px', backgroundColor: '#fff' }}
                >
                    <Sticky container={container} threshold={0}>
                        <Button type="warning" style={{ marginLeft: '215px' }}>
                            指定容器
                        </Button>
                    </Sticky>
                </div>
            </div>
        </>
    )
}

export default StickyDemo
