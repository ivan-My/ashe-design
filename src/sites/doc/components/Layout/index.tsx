import React, { useRef, useState } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import './index.scss'
import { useGlobalStore } from '@/sites/doc/store/store'
const Layout = () => {
    const { menuCollapse, setMenuCollapse } = useGlobalStore()
    return (
        <>
            <div
                className={
                    menuCollapse
                        ? 'menu-collapse menu-collapse-btn menuRight '
                        : 'menu-collapse menu-collapse-btn-close menuLeft'
                }
                onClick={() => setMenuCollapse(!menuCollapse)}
            >
                <svg width="13" height="12">
                    <g fill="none" fillRule="evenodd">
                        <path d="M.19 0h12v12h-12z" />
                        <path
                            d="M7.797 2.243l.536.536L5.11 6l3.222 3.222-.536.536-3.75-3.75.007-.008-.007-.006 3.75-3.75z"
                            fill="#1d2129"
                        />
                    </g>
                </svg>
            </div>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
