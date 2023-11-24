import React from 'react'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import LayoutIndex from '../components/Layout/index'
import lazyLoad from './lazyLoad'

export const rootRouter: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad(React.lazy(() => import('../pages/index'))),
    },
    {
        path: '/components',
        element: <LayoutIndex />,
        children: [
            {
                path: '*',
                element: lazyLoad(
                    React.lazy(() => import('../pages/components'))
                ),
            },
        ],
    },
    {
        path: '/resource',
        element: <LayoutIndex />,
        children: [
            {
                path: '*',
                element: lazyLoad(
                    React.lazy(() => import('../pages/resource'))
                ),
            },
        ],
    },
]
const Router = () => useRoutes(rootRouter)

export default Router
