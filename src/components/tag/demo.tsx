import React, { useRef } from 'react'
import { Tag } from './tag'
import './demo.scss'

const StickyDemo = () => {
    const container = useRef<HTMLDivElement>(null)
    return (
        <>
            <div className="content ">
                <Tag>adf</Tag>
            </div>
        </>
    )
}

export default StickyDemo
