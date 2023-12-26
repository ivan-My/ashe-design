import React, { useEffect, useMemo, useState } from 'react'
import type { Components } from 'react-markdown'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Codeblock } from '@/sites/doc/components/Codeblock'
import { findComponentName } from '@/sites/doc/utils/util'
import '@/sites/assets/prism/prism.js'
import '@/sites/assets/prism/prism.css'
import './style.scss'

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
    p: ({ node, ...props }: any) => {
        return <div className="demo-doc-desc" {...props} />
    },
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
            if (node.data?.meta == '!!') {
                return (
                    <code
                        className="demo-code"
                        dangerouslySetInnerHTML={{ __html: formatScript }}
                    />
                )
            }
            return (
                <Codeblock text={String(children)}>
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

type MarkdownProps = {
    loadText: () => Promise<string>
}
const Markdown = ({ loadText }: MarkdownProps) => {
    const { pathname } = useLocation()
    const [data, setData] = useState<string>('loading......')
    const cName = useMemo(() => {
        return findComponentName(pathname.replace('/components/', ''))
    }, [pathname])

    useEffect(() => {
        loadText().then((text: string) => {
            setData(text)
            window.scroll({ top: 0 })
        })
    }, [loadText])

    return (
        <div className="doc-wrapper">
            {data?.length > 50 && pathname != '/components/readme' && (
                <div className={'doc-nav'}>
                    <span>组件</span> <span className={'separator'}> / </span>
                    <strong>{cName}</strong>
                </div>
            )}
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
                children={data}
            />
        </div>
    )
}

export default Markdown
