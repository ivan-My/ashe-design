import React, { useEffect, useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import { useCheckLocation } from '@/sites/doc/utils/use-check-location'
import './menu.scss'

const Menu = () => {
  if (useCheckLocation()) return null
  const [cNav] = useState<any>(nav)
  const [fixed, setFixed] = useState(false)
  const scrollNav = () => {
    let top = document.documentElement.scrollTop
    if (top > 64) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollNav)
  }, [])
  return (
    <div className={`doc-menu ${fixed ? 'fixed' : ''}`}>
      {cNav.map((cn: any, index: number) => {
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
                      {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
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
