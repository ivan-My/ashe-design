import React from 'react'
import { Tabs } from './tabs'

const TabsDemo = () => {
    return (
        <>
            <div className="demo">
                <h2>基础用法</h2>
                <Tabs active={2}>
                    <Tabs.TabPane title="11">li </Tabs.TabPane>
                    <Tabs.TabPane title="22">ming</Tabs.TabPane>
                    <Tabs.TabPane title="33">yang</Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default TabsDemo
