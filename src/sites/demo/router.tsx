import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

// @ts-ignore
const modulesPage = import.meta.glob('/src/components/**/demo.tsx')

const routes: any = [
    {
        path: '/',
        element: lazy(() => import('./components/Index')),
    },
]

for (const path in modulesPage) {
    let name = (/components\/(.*)\/demo.tsx/.exec(path) as any[])[1]
    routes.push({
        path: '/' + name.toLowerCase(),
        // @ts-ignore
        element: lazy(modulesPage[path]),
    })
}

const SetRouter = (list: any[]) => {
    let mRouteTable: any = []
    list.forEach((route) => {
        mRouteTable.push({
            path: route.path,
            element: (
                <Suspense fallback={<div />}>
                    <route.element />
                </Suspense>
            ),
            children: route.children && SetRouter(route.children),
        })
    })
    return mRouteTable
}

const Routes = () => useRoutes(SetRouter(routes))
export default Routes
