import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '@/components/loading'
import './demo-preview.scss'

const BASE_URL = '/react/demo.html#'

const DemoPreview = () => {
    const { pathname } = useLocation()
    const [state, setState] = useState(true)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const url =
        pathname === '/components/readme'
            ? BASE_URL
            : `${BASE_URL + pathname.replace('/components', '')}`

    useEffect(() => {
        iframeRef.current!.onload = function () {
            setState(false)
        }
    })

    return (
        <div className="doc-demo-preview">
            <div className="doc-demo_wrapper">
                {state ? <Loading size="large" className="loading" /> : null}
                <iframe src={url} ref={iframeRef} />
                <a href={url} target={'_blank'} className={'href'}>
                    跳转
                </a>
            </div>
        </div>
    )
}

export default DemoPreview
