import './app.scss'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { routers, raws } from './docs'
import DemoPreview from './components/demo-preview/demo-preview'


const App = () => {
  return (
    <div id="app">
      headers
      <HashRouter>
        <Link to={'/button'}>button</Link>
        <Link to={'/input'}>input</Link>
        <Link to={'/mask'}>mask</Link>
        <DemoPreview />
        <Routes>
          {routers.map((ru, index) => {
            return (
              <Route
                key={index}
                path={`/${ru}`}
                element={
                  <ReactMarkdown
                    children={raws[ru]}
                    remarkPlugins={[remarkGfm, remarkDirective]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  />
                }
              />
            )
          })}
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
