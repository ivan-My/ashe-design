import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '@/components/loading'
import './demo-preview.scss'

const DemoPreview = () => {
    const { pathname } = useLocation()
    const iframeRef = useRef<any>(null)

    let url = `/demo.html#${pathname.replace('/components', '')}`
    if (pathname === '/components/readme') {
        url = '/demo.html#/'
    }
    const [state, setState] = useState(true)

    useEffect(() => {
        iframeRef.current.onload = function () {
            setState(false)
        }
    }, [state])

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
