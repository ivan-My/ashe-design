import React from 'react'
import { useLocation } from 'react-router-dom'
import './demo-preview.scss'
import { useCheckLocation } from '@/sites/doc/utils/use-check-location'

const DemoPreview = () => {
  if (useCheckLocation()) return null
  const { pathname } = useLocation()
  const url = `/demo.html#${pathname.replace('/components', '')}`
  return (
    <div className="doc-demo-preview">
      <iframe src={url}></iframe>
      <a href={url} target={'_blank'}>
        跳转
      </a>
    </div>
  )
}

export default DemoPreview
