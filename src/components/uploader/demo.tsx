import React from 'react'
import { Uploader } from './uploader'

const UploaderDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Uploader maxFileSize={40} />
            </div>
        </>
    )
}

export default UploaderDemo
