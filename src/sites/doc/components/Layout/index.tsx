import React, { useRef, useState } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import './index.scss'
const Layout = () => {
    const [menuCollapse, setMenuCollapse] = useState(true)
    const onChange = () => {
        const ele: any = document.querySelector('.components-container')
        if (menuCollapse) {
            setMenuCollapse(false)
            // @ts-ignore
            document.querySelector('.doc-menu').style.width = '0'
            ele.classList.add('containerLeft')
            ele.classList.remove('containerRight')
        } else {
            setMenuCollapse(true)
            ele.classList.add('containerRight')
            ele.classList.remove('containerLeft')
            setTimeout(() => {
                // @ts-ignore
                document.querySelector('.doc-menu').style.width = '230px'
            }, 200)
        }
    }
    return (
        <>
            <div
                className={
                    menuCollapse
                        ? 'menu-collapse menu-collapse-btn menuRight '
                        : 'menu-collapse menu-collapse-btn-close menuLeft'
                }
                onClick={onChange}
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
