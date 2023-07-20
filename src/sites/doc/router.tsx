import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Guide from '@/sites/doc/components/guide'
import ComponentLayout from '@/sites/doc/components/comnponet'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

const mark = (ele: any) => {
  return (
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
      {ele}
    </ReactMarkdown>
  )
}
const modulesPage = import.meta.globEager('./guide/*.md', { as: 'raw' })
export const guideRoutes: any[] = []
for (const path in modulesPage) {
  const regex = /\/(\w+)\.md$/
  // @ts-ignore
  const name = path.match(regex)[1]
  const module: any = modulesPage[path]
  guideRoutes.push({
    path: name,
    element: mark(modulesPage[path]),
    name,
  })
}

// @ts-ignore
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'guide',
        element: <Guide />,
        children: guideRoutes,
      },
      {
        path: 'component',
        element: <ComponentLayout />,
        children: [],
      },
    ],
  },
])
