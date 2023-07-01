import React, { useEffect, useState } from 'react'
import { docs } from '@/config.json'
import './guide-nav.scss'
import { useCheckLocation } from '@/sites/doc/utils/use-check-location'
import { NavLink, useMatch } from 'react-router-dom'
export const GuideNav = () => {
  if (!useCheckLocation()) {
    return
  }
  return (
    <div className="guide-nav">
      {docs.packages.map((item, key) => {
        return (
          <div className={'guide-nav-item'} key={key}>
            <NavLink
              className={useMatch(`${item.name}`) ? 'selected' : ''}
              to={`/guide/${item.name}`}
            >
              {item.cName}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
