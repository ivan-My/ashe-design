import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Router from './routers/index'

const App = () => {
    return (
        <HashRouter>
            <Router />
        </HashRouter>
    )
}

export default App
