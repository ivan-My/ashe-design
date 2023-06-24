import React from 'react'
import { useLocation } from 'react-router-dom'
import './demo-preview.scss'

const DemoPreview = () => {
  const { pathname } = useLocation()
  // @ts-ignore
  const mode = import.meta.env.MODE
  const url =
    mode === 'development'
      ? `/demo.html#${pathname}`
      : `https://ivan-my.github.io/ashe-design/demo/demo.html#${pathname}`
  console.log('url=', url)
  return (
    <div className="doc-demo-preview">
      <iframe src={url} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
