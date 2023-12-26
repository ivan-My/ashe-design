import React from 'react'
import Menu from '../../components/Menu/menu'
import { Route, Routes } from 'react-router-dom'
import Markdown from '@/sites/doc/components/Markdown'
import { nav } from '../../../../../packages/utils/config.json'
import './index.scss'

const raws = import.meta.globEager('../../../../../packages/utils/docs/*.md', {
    as: 'raw',
})

const getRaw = (name: string) => {
    let result = ''
    for (const raw in raws) {
        if (raw.includes(name)) {
            result = raws[raw]
        }
    }
    return result
}

const Resource = () => {
    return (
        <div className={'resource'}>
            <Menu data={nav} path={'resource'} />
            <div className="components-container">
                <div className="components-markdown">
                    <Routes>
                        {nav
                            .map((item: any) => item.packages)
                            .flat()
                            .map((item) => {
                                return (
                                    <Route
                                        key={item.name}
                                        path={`/${item.name}`}
                                        element={
                                            <Markdown
                                                loadText={() =>
                                                    Promise.resolve(
                                                        getRaw(item.name)
                                                    )
                                                }
                                            />
                                        }
                                    />
                                )
                            })}
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default Resource
