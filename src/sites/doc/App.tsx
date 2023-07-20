import React from 'react'
import './app.scss'

import Header from './components/header'

const App = () => {
  return (
    <>
      {/*<BrowserRouter>*/}
      <Header />

      <div className="doc-content">
        {/*<Routes>*/}
        {/*  {guideRoutes.map((item, key) => {*/}
        {/*    return (*/}
        {/*      <Route*/}
        {/*        key={key}*/}
        {/*        path={`/${item.path}`}*/}
        {/*        element={*/}
        {/*          <ReactMarkdown remarkPlugins={[remarkGfm, remarkDirective]}>*/}
        {/*            {item.component}*/}
        {/*          </ReactMarkdown>*/}
        {/*        }*/}
        {/*      />*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</Routes>*/}

        {/*<Routes>*/}
        {/*  {routers.map((ru, index) => {*/}
        {/*    return (*/}
        {/*      <Route*/}
        {/*        key={index}*/}
        {/*        path={`/component/${ru}`}*/}
        {/*        element={*/}
        {/*          <ReactMarkdown*/}
        {/*            remarkPlugins={[remarkGfm, remarkDirective]}*/}
        {/*            components={{*/}
        {/*              code({ node, inline, className, children, ...props }) {*/}
        {/*                const match = /language-(\w+)/.exec(className || '')*/}
        {/*                return !inline && match ? (*/}
        {/*                  <SyntaxHighlighter*/}
        {/*                    style={prism}*/}
        {/*                    language={match[1]}*/}
        {/*                    PreTag="div"*/}
        {/*                    {...props}*/}
        {/*                  >*/}
        {/*                    {String(children).replace(/\n$/, '')}*/}
        {/*                  </SyntaxHighlighter>*/}
        {/*                ) : (*/}
        {/*                  <code className={className} {...props}>*/}
        {/*                    {children}*/}
        {/*                  </code>*/}
        {/*                )*/}
        {/*              },*/}
        {/*            }}*/}
        {/*          >*/}
        {/*            {raws[ru]}*/}
        {/*          </ReactMarkdown>*/}
        {/*        }*/}
        {/*      />*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</Routes>*/}
        {/*<DemoPreview />*/}
      </div>
      {/*</BrowserRouter>*/}
    </>
  )
}

export default App
