import './app.scss'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { HashRouter, Routes, Route } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { routers, raws } from './docs'

import Header from './components/header'
import Nav from './components/nav'
import DemoPreview from './components/demo-preview/demo-preview'

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Nav />
        <div className="doc-content">
          <Routes>
            {routers.map((ru, index) => {
              return (
                <Route
                  key={index}
                  path={`/${ru}`}
                  element={
                    <ReactMarkdown
                      // @ts-ignore
                      children={raws[ru]}
                      remarkPlugins={[remarkGfm, remarkDirective]}
                    />
                  }
                />
              )
            })}
          </Routes>
          <DemoPreview />
        </div>
      </HashRouter>
    </>
  )
}

export default App
