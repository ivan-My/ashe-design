import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import scrollIntoView from 'scroll-into-view-if-needed'
import { useGlobalStore } from '@/sites/doc/store/store'
import { getComponentName } from '@/sites/doc/utils/util'
import './menu.scss'

type MenuProps = {
    data: any
    path: string
}

export const Menu = ({ data, path }: MenuProps) => {
    const { menuCollapse } = useGlobalStore()
    useEffect(() => {
        const name = getComponentName()
        const targetEle = document.querySelector(`.${name}`) as Element
        setTimeout(() => {
            scrollIntoView(targetEle, {
                behavior: 'smooth',
                block: 'start',
                scrollMode: 'if-needed',
                boundary: document.body,
            })
        }, 500)
    }, [])
    return (
        <div
            className={'ashe-menu'}
            style={{ width: menuCollapse ? '230px' : '0' }}
        >
            {data.map((cn: any, index: number) => {
                if (cn.packages.length === 0) return null
                return (
                    <ol key={index}>
                        <li>{cn.name}</li>
                        <ul>
                            {cn.packages.map((cp: any) => {
                                if (!cp?.show) return null
                                return (
                                    <NavLink
                                        key={cp.name}
                                        to={`/${path}/${cp.name.toLocaleLowerCase()}`}
                                    >
                                        <li
                                            className={cp.name.toLocaleLowerCase()}
                                        >
                                            <span>
                                                {cp.type !== 'guide' && cp.name}
                                            </span>
                                            {cp.cName}
                                        </li>
                                    </NavLink>
                                )
                            })}
                        </ul>
                    </ol>
                )
            })}
        </div>
    )
}

export default Menu
