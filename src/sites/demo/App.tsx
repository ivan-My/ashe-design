import React from 'react'
import Routes from './router'
import {HashRouter } from 'react-router-dom'
import {Button}from '../../../dist/ashe.es'

const App = () =>{
    return <div>  
        <Button>点击 </Button>
        <HashRouter>
            <Routes />
        </HashRouter>
    </div>
}

export default App