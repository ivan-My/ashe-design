import React from 'react'
import { Image } from './image'

const src =
  'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
const ImageDemo = () => {
  return (
    <div className="content">
      <h2>基础用法</h2>
      <Image
        alt="大法"
        src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
      />
      <h2>加载中</h2>
      <Image src={src} />
    </div>
  )
}

export default ImageDemo
