import React, { useEffect, useState } from 'react'
import { nav } from '../../../../config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
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
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      <ol>
        {cNav.map((cn: any, index: number) => {
          if (cn.packages.length === 0) return null
          return (
            <div key={index}>
              <ol>{cn.name}</ol>
              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null

                  return (
                    <NavLink
                      key={Math.random()}
                      // activeClassName="selected"
                      to={`${cp.name}`}
                    >
                      <li>
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </li>
                    </NavLink>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default Nav
