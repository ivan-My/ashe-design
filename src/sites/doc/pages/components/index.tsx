import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from '@/sites/doc/components/Menu/menu'
import Markdown from '@/sites/doc/components/Markdown'
import DemoPreview from '@/sites/doc/components/DemoPreview/demo-preview'
import { componentRouters } from '../../routers/index'
import Readme from '@/sites/doc/guide/readme.md?raw'
import { nav } from '@/config.json'
import './style.scss'

// @ts-ignore
const ComponentRouters = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route
                    path={'/readme'}
                    element={<Markdown element={Readme} />}
                />
                {componentRouters.map((ru, index) => {
                    const LazyComponent = lazy(
                        () => import('../../components/LoadCon')
                    )

                    const WrappedLazyComponent = () => (
                        // @ts-ignore
                        <LazyComponent element={ru.component} />
                    )
                    // console.log(LazyComponent)
                    return (
                        <Route
                            key={index}
                            path={ru.path}
                            // @ts-ignore
                            // element={<Markdown element={ru.component} />}
                            // element={<LazyComponent element={ru.component} />}
                            element={<WrappedLazyComponent />}
                        />
                    )
                })}
            </Routes>
        </Suspense>
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
