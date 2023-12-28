import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import className from 'classnames'
import Menu from '@/sites/doc/components/Menu/menu'
import Markdown from '@/sites/doc/components/Markdown'
import { routers } from '../../routers/index'
import { useGlobalStore } from '@/sites/doc/store/store'
import Loading from '@/components/loading'
import { nav } from '@/config.json'
import './style.scss'

const BASE_URL = '/react/demo.html#'

const renderMobile = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [state, setState] = useState(true)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    let url =
        pathname === '/components/readme'
            ? '/react/demo.html#/index'
            : `${BASE_URL + pathname.replace('/components', '')}`

    const handleMessage = (e: any) => {
        if (e.data.hashChange) {
            const { hash } = e.data
            navigate(`/components/${hash.toLocaleLowerCase()}`)
        }
    }

    useEffect(() => {
        iframeRef.current!.onload = function () {
            setState(false)
        }
        window.addEventListener('message', handleMessage)
        return () => {
            window.removeEventListener('message', handleMessage)
        }
    }, [])
    return (
        <div className="ashe-mobile">
            {state ? <Loading size="large" className="loading" /> : null}
            <iframe src={url} ref={iframeRef} />
            <a href={url} target={'_blank'} className={'href'}>
                跳转
            </a>
        </div>
    )
}

const Content = () => {
    const { menuCollapse } = useGlobalStore()
    const cls = className(
        'ashe-content',
        !menuCollapse && 'ashe-content-collapse'
    )
    return (
        <div className="ashe-content-wrap">
            <Menu data={nav} path={'components'} />
            <div className={cls}>
                <Routes>
                    {routers.map((ru, index) => (
                        <Route
                            key={index}
                            path={ru.path}
                            element={<Markdown loadText={ru.component} />}
                        />
                    ))}
                </Routes>
                {renderMobile()}
            </div>
        </div>
    )
}

export default React.memo(Content)
