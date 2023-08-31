import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '@/config.json'
import './menu.scss'

const Menu = () => {
  return (
    <div className={'doc-menu'}>
      <ol className={'doc-Menu-item'}>
        <li>开发指南</li>
        <ul>
          <li>
            <NavLink key={Math.random()} to={'/components/readme'}>
              快速上手
            </NavLink>
          </li>
        </ul>
      </ol>
      {nav.map((cn: any, index: number) => {
        if (cn.packages.length === 0) return null
        return (
          <ol key={index} className={'doc-Menu-item'}>
            <li>{cn.name}</li>
            <ul>
              {cn.packages.map((cp: any) => {
                if (!cp.show) return null
                return (
                  <NavLink key={Math.random()} to={`/components/${cp.name}`}>
                    <li>
                      {cp.name}&nbsp;&nbsp;{cp.cName}
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
