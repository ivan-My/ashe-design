import React, { useRef, useState } from 'react'
import sdk from '@stackblitz/sdk'
import { getProject } from '@/sites/doc/components/Markdown/template'
import Toast from '@/components/toast/toast'
import { copySvg, tzSvg, arrowSvg } from './svg'
import './index.scss'

export const CodeBar = (props: {
    children: React.ReactElement
    text: string
}) => {
    const [status, setStatus] = useState(false)
    const codeRef = useRef<any>(null)
    const copyCode = () => {
        navigator.clipboard
            .writeText(props.text)
            .then(() => {
                Toast.show({
                    content: '复制成功',
                    contentStyle: {
                        top: '10%',
                        minWidth: '8%',
                    },
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const showCode = (e: any) => {
        setStatus(!status)
        const eleParent = codeRef.current.parentElement.parentElement
        if (status) {
            eleParent.classList.remove('show-all')
        } else {
            eleParent.classList.add('show-all')
        }
    }
    const goCode = () => {
        sdk.openProject(getProject(props.text), {
            openFile: 'src/App.jsx',
        })
    }
    return (
        <>
            {props.children}
            <div className="ashe-content-site-bar" ref={codeRef}>
                <button onClick={copyCode}>
                    {copySvg()}
                    <div className="online-tips">复制</div>
                </button>
                <button onClick={showCode}>
                    {arrowSvg(status)}
                    <div className="online-tips">
                        {!status ? '展开' : '收起'}
                    </div>
                </button>
                <button onClick={goCode}>
                    {tzSvg()}
                    <div className="online-tips">调试</div>
                </button>
            </div>
        </>
    )
}
