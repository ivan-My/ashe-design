import React from 'react'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
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

export default Router
