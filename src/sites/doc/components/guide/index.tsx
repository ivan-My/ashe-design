import React from 'react'
import { Outlet } from 'react-router-dom'
import GuideNav from '@/sites/doc/components/guide-nav'

const Guide = () => {
  return (
    <div>
      <GuideNav />
      <Outlet />
    </div>
  )
}

export default Guide
