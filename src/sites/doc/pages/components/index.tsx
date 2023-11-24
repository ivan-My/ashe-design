import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from '@/sites/doc/components/Menu/menu'
import Markdown from '@/sites/doc/components/Markdown'
import DemoPreview from '@/sites/doc/components/DemoPreview/demo-preview'
import { componentRouters, raws } from '@/sites/doc/guide'
import Readme from '@/sites/doc/guide/readme.md?raw'
import { nav } from '@/config.json'
import './style.scss'

const ComponentRouters = () => {
    return (
        <Routes>
            <Route path={'/readme'} element={<Markdown element={Readme} />} />
            {componentRouters.map((ru, index) => {
                return (
                    <Route
                        key={index}
                        path={`/${ru}`}
                        // @ts-ignore
                        element={<Markdown element={raws[ru]} />}
                    />
                )
            })}
        </Routes>
    )
}

const Components = () => {
    return (
        <div className="components-page">
            <Menu data={nav} path={'components'} />
            <div className="components-container">
                <div className="components-markdown">
                    <ComponentRouters />
                </div>
                <DemoPreview />
            </div>
        </div>
    )
}

export default React.memo(Components)
