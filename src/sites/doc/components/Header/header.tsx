import React from 'react'
import './header.scss'
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom'

const navList = [
  {
    name: '首页',
    path: '/guide/installation',
  },
  {
    name: '组件',
    path: '/components/readme',
  },
  {
    name: 'hooks',
    path: '/hooks/hook1',
  },
]

const Header = () => {
  const match = useMatch('/components/*')
  return (
    <div className={'doc-header'}>
      <div className="header-logo">
        <Link to={'/'}>Ashe design</Link>
      </div>
      <div className="header-nav">
        <ul>
          {navList.map((item, key) => {
            let status = false
            if (item.name === '组件' && match) {
              status = true
            }
            return (
              <li key={key}>
                <NavLink to={item.path} className={status ? 'active' : ''}>
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
