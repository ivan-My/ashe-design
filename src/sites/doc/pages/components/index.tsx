import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
    const cls = className('ashe-content', !menuCollapse && 'collapse')
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
