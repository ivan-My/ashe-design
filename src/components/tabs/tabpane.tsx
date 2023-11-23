import React, { FC } from 'react'
import { TabPaneProps } from './interface'

const classPrefix = 'ashe-Tabpane'
const defaultProps = {
    title: '',
} as TabPaneProps
export const TabPane: FC<Partial<TabPaneProps>> = (props) => {
    const { title, children } = { ...defaultProps, ...props }
    return <div className={classPrefix}>{children}</div>
}

TabPane.defaultProps = defaultProps
TabPane.displayName = 'AsheTabPane'
