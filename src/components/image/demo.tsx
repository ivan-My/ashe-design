import React from 'react'
import { Image } from './image'

const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
const ImageDemo = () => {
    return (
        <div className="content">
            <div className="title">基础用法</div>
            <Image
                alt="大法"
                src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
            />
            <div className="title">加载中</div>
            <Image src={src} />
        </div>
    )
}

export default ImageDemo
