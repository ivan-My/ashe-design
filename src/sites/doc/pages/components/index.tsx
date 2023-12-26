import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from '@/sites/doc/components/Menu/menu'
import Markdown from '@/sites/doc/components/Markdown'
import DemoPreview from '@/sites/doc/components/DemoPreview/demo-preview'
import { componentRouters } from '../../routers/index'
import { nav } from '@/config.json'
import './style.scss'
import { useGlobalStore } from '@/sites/doc/store/store'
import className from 'classnames'

// @ts-ignore
const ComponentRouters = () => {
    return (
        <Routes>
            <Route
                path={'/readme'}
                element={
                    <Markdown
                        loadText={() =>
                            import('@/sites/doc/guide/readme.md?raw').then(
                                (m) => m['default']
                            )
                        }
                    />
                }
            />
            {componentRouters.map((ru, index) => {
                return (
                    <Route
                        key={index}
                        path={ru.path}
                        // @ts-ignore
                        element={<Markdown loadText={ru.component} />}
                    />
                )
            })}
        </Routes>
    )
}

const Components = () => {
    const { menuCollapse } = useGlobalStore()
    const cls = className(
        'components-container',
        menuCollapse ? 'containerRight' : 'containerLeft'
    )
    return (
        <div className="components-page">
            <Menu data={nav} path={'components'} />
            <div className={cls}>
                <div className="components-markdown">
                    <ComponentRouters />
                </div>
                <DemoPreview />
            </div>
        </div>
    )
}

export default React.memo(Components)
