import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.scss'

type MenuType = {
    data: any
    path: string
}

export const Menu = ({ data, path }: MenuType) => {
    return (
        <div className={'doc-menu'}>
            {path === 'components' && (
                <ol className={'doc-Menu-item'}>
                    <li>开发指南</li>
                    <ul>
                        <NavLink key={Math.random()} to={'/components/readme'}>
                            <li>快速上手</li>
                        </NavLink>
                    </ul>
                </ol>
            )}
            {data.map((cn: any, index: number) => {
                if (cn.packages.length === 0) return null
                return (
                    <ol key={index} className={'doc-Menu-item'}>
                        <li>{cn.name}</li>
                        <ul>
                            {cn.packages.map((cp: any) => {
                                if (!cp?.show) return null
                                return (
                                    <NavLink
                                        key={cp.name}
                                        to={`/${path}/${cp.name.toLocaleLowerCase()}`}
                                    >
                                        <li className={cp.name}>
                                            <span>{cp.name}</span>
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
