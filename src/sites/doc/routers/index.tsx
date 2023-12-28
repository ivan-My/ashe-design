import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import LayoutIndex from '../components/Layout/index'
import Index from '../pages/index'
import Components from '../pages/components'
import Resource from '@/sites/doc/pages/resource'

export const rootRouter: RouteObject[] = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/components',
        element: <LayoutIndex />,
        children: [
            {
                path: '*',
                element: <Components />,
            },
        ],
    },
    {
        path: '/resource',
        element: <LayoutIndex />,
        children: [
            {
                path: '*',
                element: <Resource />,
            },
        ],
    },
]
const Router = () => useRoutes(rootRouter)

const modulesPage = import.meta.glob('/src/components/**/doc.md', {
    as: 'raw',
    //eager: true,
})

const guidePage = import.meta.glob('/src/sites/doc/guide/**.md', {
    as: 'raw',
    //eager: true,
})

export const routers: any[] = []
for (const path in guidePage) {
    // @ts-ignore
    let name = path.match(/\/([^/]+)\.md$/)[1]
    routers.push({
        path: '/' + name,
        component: guidePage[path],
        name,
    })
}

for (const path in modulesPage) {
    let name = (/components\/(.*)\/doc\.md/.exec(path) as any[])[1]
    routers.push({
        path: '/' + name,
        component: modulesPage[path],
        name,
    })
}

export default Router
