import React from 'react'
import Header from '../Header'
import BackTop from '@/sites/doc/components/BackTop'
import { Outlet } from 'react-router-dom'
import { useGlobalStore } from '@/sites/doc/store/store'
import './index.scss'

const MenuHolder = () => {
    const { menuCollapse, setMenuCollapse } = useGlobalStore()
    return (
        <>
            {!menuCollapse && <div className="ashe-menu-holder" />}
            <div
                className={
                    menuCollapse
                        ? 'ashe-menu-collapse ashe-menu-collapse-btn '
                        : 'ashe-menu-collapse ashe-menu-collapse-btn-close'
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
        </>
    )
}

const Layout = () => {
    return (
        <div className={'ashe-layout'}>
            <Header />
            <MenuHolder />
            <Outlet />
            <BackTop />
        </div>
    )
}

export default Layout
