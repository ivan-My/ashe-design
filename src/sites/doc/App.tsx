import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './routers/index'

const App = () => {
    return (
        <>
            <HashRouter>
                <Router />
            </HashRouter>
        </>
    )
}

export default App
