import React from 'react'
import ReactMarkdown from 'react-markdown'
import './style.scss'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
// @ts-ignore
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

// @ts-ignore
// const CodeBlockRenderer = ({ node, ...props }: any) => (
//   <SyntaxHighlighter language="javascript" style={prism} {...props} />
// )
const components = {
  p: ({ node, ...props }: any) => <div className="custom-p" {...props} />,
  pre: ({ node, ...props }: any) => <pre className="custom-code" {...props} />,
  // code: ({ node, ...props }: any) => (
  //   <SyntaxHighlighter language="javascript" PreTag="div" {...props} />
  // ),
}

//

const Markdown = ({ element }: any) => {
  return (
    <div className="doc-wrapper">
      <div>
        {/*@ts-ignore*/}
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkDirective]}
          components={components}
          children={element}
        />
      </div>
      <div className={'mark-wrapper'}>
        <MarkdownNavbar source={element} declarative={true} ordered={false} />
      </div>
    </div>
  )
}

export default Markdown
