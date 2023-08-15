import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// @ts-ignore
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import Header from '@/sites/doc/components/Header'
import Menu from '@/sites/doc/components/Menu'
import GuideNav from '@/sites/doc/components/GuideNav'
import Markdown from '@/sites/doc/components/Markdown'
import DemoPreview from '@/sites/doc/components/DemoPreview/demo-preview'
import { componentRouters, raws } from '@/sites/doc/guide'
import './style.scss'

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

const GuideRoutes = () => {
  return (
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
  )
}

const ComponentRouters = () => {
  return (
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
  )
}

const Page = () => {
  const { pathname } = useLocation()
  const isComponentsPage = pathname.indexOf('components')
  let element
  if (pathname.indexOf('components') == 1) {
    const name = pathname.replace('/components/', '')
    // @ts-ignore
    element = raws[name]
  } else if (pathname.indexOf('guide') == 1) {
    const name = pathname.replace('/guide/', '')
    const s = getGuideRoutes().filter((item) => item.name == name)
    element = s[0].element
  }
  return (
    <div className="components-page">
      <Header />
      {isComponentsPage == 1 ? <Menu /> : <GuideNav />}
      <div className="components-container">
        <div className="components-markdown">
          <GuideRoutes />
          <ComponentRouters />
        </div>
        {isComponentsPage == 1 ? <DemoPreview /> : null}
        <div className={'markdown-bar'}>
          <MarkdownNavbar source={element} declarative={true} ordered={false} />
        </div>
      </div>
    </div>
  )
}

export default Page
