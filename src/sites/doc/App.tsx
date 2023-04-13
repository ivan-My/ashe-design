import React from 'react'
import './app.scss'
import ReactMarkdown from 'react-markdown'
import { HashRouter, Routes, Route } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { routers, raws } from './docs'

import Header from './components/header'
import Nav from './components/nav'
import DemoPreview from './components/demo-preview/demo-preview'

const App = () => {
  return (
    <>
      <HashRouter>
        {/*<Header />*/}
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
                      remarkPlugins={[remarkGfm, remarkDirective]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={prism}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        },
                      }}
                    >
                      {raws[ru]}
                    </ReactMarkdown>
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
