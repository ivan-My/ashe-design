import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/index'

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

export default App
