import React from 'react'
import {useLocation} from 'react-router-dom'
import './demo-preview.scss'

const DemoPreview = () => {
    const {pathname}= useLocation()
    return (
        <div className='doc-demo-preview'>
            <iframe src={`/demo.html#${pathname}`} frameBorder="0"></iframe>
        </div>
    )
}

export default DemoPreview