import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/sites/doc/components/Header'
import Menu from '@/sites/doc/components/Menu'
import GuideNav from '@/sites/doc/components/GuideNav'
import Markdown from '@/sites/doc/components/Markdown'
import './style.scss'
import DemoPreview from '@/sites/doc/components/DemoPreview/demo-preview'
import { componentRouters, raws } from '@/sites/doc/guide'

const getGuideRoutes = () => {
  const modulesPage = import.meta.globEager('../../guide/*.md', { as: 'raw' })
  const guideRoutes: any[] = []
  for (const path in modulesPage) {
    const regex = /\/(\w+)\.md$/
    // @ts-ignore
    const name = path.match(regex)[1]
    const module: any = modulesPage[path]
    guideRoutes.push({
      path: '/' + name,
      element: modulesPage[path],
      name,
    })
  }
  return guideRoutes
}

const Page = () => {
  const { pathname } = useLocation()
  const isComponentsPage = pathname.indexOf('components')

  return (
    <div className="components-page">
      <Markdown />
      <Header />
      {isComponentsPage == 1 ? <Menu /> : <GuideNav />}
      <div className="components-content">
        <div className="wrapper">
          <Routes>
            {getGuideRoutes().map((item, key) => {
              return (
                <Route
                  key={key}
                  path={`/${item.path}`}
                  element={<Markdown element={item.element} />}
                />
              )
            })}
          </Routes>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
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
          </Suspense>
        </div>
        {isComponentsPage == 1 ? <DemoPreview /> : null}
      </div>
    </div>
  )
}

export default Page
