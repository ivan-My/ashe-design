import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Route, Routes } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { raws, routers } from '@/sites/doc/docs'
import Header from '@/sites/doc/components/header'
import Menu from '@/sites/doc/components/menu'

const Page = () => {
  return (
    <div className="components-page">
      <Header />
      <Menu />
      <div className="components-content">
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
      </div>
    </div>
  )
}

export default Page
