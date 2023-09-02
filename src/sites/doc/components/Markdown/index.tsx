import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import './style.scss'
import remarkGfm from 'remark-gfm'
import { Codeblock } from '@/sites/doc/components/Codeblock'

import '@/sites/assets/prism/prism.js'
import '@/sites/assets/prism/prism.css'
// @ts-ignore
const Prisms = window.Prism

const components: Components = {
  h1: (node: any) => {
    return <h1 className="demo-doc-name">{node.children[0]}</h1>
  },
  h2: (node: any) => {
    return <h2 className="demo-code-title">{node.children[0]}</h2>
  },
  h3: (node: any) => {
    return <h2 className="demo-code-title">{node.children[0]}</h2>
  },
  p: ({ node, ...props }: any) => <div className="demo-doc-desc" {...props} />,
  pre: ({ node, ...props }: any) => (
    <div className="demo-code-content">
      <pre {...props} />
    </div>
  ),
  code({ node, inline, className, children, ...props }: any) {
    const match: any = /language-(\w+)/.exec(className || '')
    if (!inline && match) {
      let language = match[1]
      const formatScript = Prisms.highlight(
        children[0],
        Prisms.languages[language],
        language
      )
      return (
        <Codeblock text={String(children).replace(/\n$/, '')}>
          <code
            className="demo-code"
            dangerouslySetInnerHTML={{ __html: formatScript }}
          />
        </Codeblock>
      )
    } else {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  },
}

const Markdown = ({ element }: any) => {
  return (
    <div className="doc-wrapper">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
        children={element}
      />
    </div>
  )
}

export default Markdown
