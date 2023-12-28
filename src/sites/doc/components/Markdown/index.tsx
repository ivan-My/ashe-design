import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Components } from 'react-markdown'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBar } from '@/sites/doc/components/CodeBar'
import { findComponentName, getComponentName } from '@/sites/doc/utils/util'
import '@/sites/assets/prism/prism.js'
import '@/sites/assets/prism/prism.css'
import './style.scss'
import CodePopover from '@/sites/doc/components/CodePopover'

// @ts-ignore
const Prisms = window.Prism

const components: Components = {
    h1: (node: any) => {
        return (
            <h1 className="ashe-content-site-name">
                {node.children[0]}
                <CodePopover
                    text={'扫描二维码查看演示效果'}
                    popoverClass="demo-comp-qrcode-popover"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.74992 7.58337H7.58325V1.75004H1.74992V7.58337ZM0.916585 0.083374H8.41658C8.87682 0.083374 9.24992 0.45647 9.24992 0.916707V8.41671C9.24992 8.87694 8.87682 9.25004 8.41658 9.25004H0.916585C0.456348 9.25004 0.083252 8.87694 0.083252 8.41671V0.916707C0.083252 0.45647 0.456348 0.083374 0.916585 0.083374ZM3.41658 3.41671H5.91658V5.91671H3.41658V3.41671ZM1.74992 12.1667V14.25H3.83325V12.1667H1.74992ZM0.916585 10.5H4.66658C5.12682 10.5 5.49992 10.8731 5.49992 11.3334V15.0834C5.49992 15.5436 5.12682 15.9167 4.66658 15.9167H0.916585C0.456348 15.9167 0.083252 15.5436 0.083252 15.0834V11.3334C0.083252 10.8731 0.456348 10.5 0.916585 10.5ZM12.1666 1.75004V3.83337H14.2499V1.75004H12.1666ZM11.3333 0.083374H15.0833C15.5435 0.083374 15.9166 0.45647 15.9166 0.916707V4.66671C15.9166 5.12694 15.5435 5.50004 15.0833 5.50004H11.3333C10.873 5.50004 10.4999 5.12694 10.4999 4.66671V0.916707C10.4999 0.45647 10.873 0.083374 11.3333 0.083374ZM12.1666 12.1667V14.25H14.2499V12.1667H12.1666ZM11.3333 10.5H15.0833C15.5435 10.5 15.9166 10.8731 15.9166 11.3334V15.0834C15.9166 15.5436 15.5435 15.9167 15.0833 15.9167H11.3333C10.873 15.9167 10.4999 15.5436 10.4999 15.0834V11.3334C10.4999 10.8731 10.873 10.5 11.3333 10.5ZM7.16658 10.5H8.83325V12.1667H7.16658V10.5ZM7.16658 13.4167H8.83325V15.9167H7.16658V13.4167ZM10.4999 7.16671H12.1666V8.83337H10.4999V7.16671ZM13.4166 7.16671H15.9166V8.83337H13.4166V7.16671Z"
                            fill="currentColor"
                        />
                    </svg>
                </CodePopover>
            </h1>
        )
    },
    h2: (node: any) => {
        return <h2 className="ashe-content-site-title">{node.children[0]}</h2>
    },
    h3: (node: any) => {
        return <h2 className="ashe-content-site-title">{node.children[0]}</h2>
    },
    p: ({ node, ...props }: any) => {
        return <div className="ashe-content-site-desc" {...props} />
    },
    pre: ({ node, ...props }: any) => (
        <div className="ashe-content-site-pre">
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
                        className="ashe-content-site-demo-code"
                        dangerouslySetInnerHTML={{ __html: formatScript }}
                    />
                )
            }
            return (
                <CodeBar text={String(children)}>
                    <code
                        className="ashe-content-site-demo-code"
                        dangerouslySetInnerHTML={{ __html: formatScript }}
                    />
                </CodeBar>
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
        return findComponentName(getComponentName())
    }, [pathname])

    useEffect(() => {
        loadText().then((text: string) => {
            setData(text)
            window.scroll({ top: 0 })
        })
    }, [loadText])

    return (
        <div className="ashe-content-site">
            {data?.length > 50 && pathname != '/components/readme' && (
                <div className={'ashe-content-site-nav'}>
                    <span>组件</span> <span className={'separator'}> / </span>
                    <strong>{cName}</strong>
                </div>
            )}
            {data?.length > 50 && pathname == '/components/readme' && (
                <div className={'ashe-content-site-nav'}>
                    <span>开发指南</span>
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
