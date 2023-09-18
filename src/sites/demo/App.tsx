import React, { useEffect, useState } from 'react'
import Routes from './router'
import { HashRouter, useLocation } from 'react-router-dom'
import { nav } from '@/config.json'
import './App.scss'

const App = () => {
    const [state, setName] = useState<any>()
    const handelComponent = () => {
        const pathname = location.hash.replace('#/', '').trim()
        const currentComponent = nav.flatMap((item) =>
            item.packages.filter((e) => e.name == pathname)
        )[0]
        window.scroll({ top: 0 })
        setName(currentComponent)
    }

    useEffect(() => {
        handelComponent()
        window.addEventListener('hashchange', handelComponent)
        return () => {
            window.removeEventListener('hashchange', handelComponent)
        }
    }, [state])

    return (
        <div className="demo-wrapper">
            <div className="status-bar" />
            <div className={'demo-header'}>
                {/*<div onClick={() => history.back()}>上一步</div>*/}
                {state?.name} {state?.cName}
            </div>
            <HashRouter>
                <Routes />
            </HashRouter>
        </div>
    )
}

export default App
