import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCheckLocation } from '@/sites/doc/utils/use-check-location'
import Loading from '@/components/loading'
import './demo-preview.scss'

const DemoPreview = () => {
  if (useCheckLocation()) return null
  const { pathname } = useLocation()
  const iframeRef = useRef<any>(null)
  const url = `/demo.html#${pathname.replace('/components', '')}`
  const [state, setState] = useState(true)

  useEffect(() => {
    iframeRef.current.onload = function () {
      setState(false)
    }
  }, [state])

  return (
    <div className="doc-demo-preview">
      <div className="doc-demo_wrapper">
        {state ? (
          <Loading show type="circle" size="large" className="loading" />
        ) : null}
        <iframe src={url} ref={iframeRef} />
        <a href={url} target={'_blank'}>
          跳转
        </a>
      </div>
    </div>
  )
}

export default DemoPreview
