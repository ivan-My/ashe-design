import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { Codeblock } from '@/sites/doc/components/Codeblock'
import './style.scss'
import remarkGfm from 'remark-gfm'
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

const Markdown = ({ loadData }: any) => {
    const [data, setData] = useState<string>('loading....')
    // async function loadScript() {
    //     try {
    //         // @ts-ignore
    //         await import('../../../assets/prism/prism.js')
    //         await import('../../../assets/prism/prism.css')
    //     } catch (e) {
    //         console.error('Prism加载出错:', e)
    //     }
    // }
    // useEffect(() => {
    //     loadScript().then((r) => r)
    // }, [])

    useEffect(() => {
        if (typeof loadData === 'string') {
            setData(loadData)
            return
        }
        loadData().then((d: string) => {
            setData(d)
        })
    }, [loadData])

    return (
        <div className="doc-wrapper">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
                children={data}
            />
        </div>
    )
}

export default Markdown
