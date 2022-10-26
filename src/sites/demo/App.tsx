import React from 'react'
import Routes from './router'
import {HashRouter } from 'react-router-dom'


const App = () =>{
    return <div>
        <HashRouter>
            <Routes />
        </HashRouter>
    </div>
}

export default App