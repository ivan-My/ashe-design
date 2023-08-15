import React from 'react'
import './header.scss'
import { Link, NavLink, useMatch } from 'react-router-dom'

const navList = [
  {
    name: '指南',
    path: '/guide/installation',
  },
  {
    name: '组件',
    path: '/components/Button',
  },
  {
    name: 'hooks',
    path: '/hooks/hook1',
  },
]

const Header = () => {
  return (
    <div className={'doc-header'}>
      <div className="header-logo">
        <Link to={'/'}>Ashe design</Link>
      </div>
      <div className="header-nav">
        <ul>
          {navList.map((item, key) => {
            return (
              <li key={key}>
                <NavLink
                  to={item.path}
                  className={useMatch(`${item.name}`) ? 'selected' : ''}
                >
                  {item.name}
                </NavLink>
              </li>
            )
          })}
          <li>
            <a
              href="https://github.com/ivan-My/ashe-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
