import React from 'react'
import { nav } from '@/config.json'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const navs = useNavigate()
    return (
        <div className="demo-index">
            {nav.map((cn: any, index: number) => {
                if (cn.packages.length === 0) return null
                return (
                    <ol key={index} className={'doc-Menu-item'}>
                        <li>{cn.name}</li>
                        <ul>
                            {cn.packages.map((cp: any) => {
                                if (!cp.show) return null
                                return (
                                    <li
                                        key={Math.random()}
                                        onClick={() => {
                                            navs(`/${cp.name}`)
                                            window.scroll({ top: 0 })
                                        }}
                                    >
                                        {cp.name}&nbsp;&nbsp;{cp.cName}
                                    </li>
                                )
                            })}
                        </ul>
                    </ol>
                )
            })}
        </div>
    )
}

export default Index
