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

export const routers: any[] = [
    {
        name: 'readme',
        path: '/readme',
        component: () =>
            import('@/sites/doc/guide/readme.md?raw').then((m) => m['default']),
    },
]
for (const path in modulesPage) {
    let name = (/components\/(.*)\/doc\.md/.exec(path) as any[])[1]
    routers.push({
        path: '/' + name,
        component: modulesPage[path],
        name,
    })
}

export default Router
