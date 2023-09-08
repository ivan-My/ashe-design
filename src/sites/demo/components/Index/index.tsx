import React, { useEffect, useState } from 'react'
import { nav } from '@/config.json'
import './index.scss'
import { NavLink } from 'react-router-dom'

const components = nav.reduce(
  (acc, item) => [...acc, ...item.packages],
  [] as any[]
)

const Index = () => {
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
                  <NavLink key={Math.random()} to={`/${cp.name}`}>
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

export default Index
