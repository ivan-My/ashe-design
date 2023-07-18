import React from 'react'
import Routes from './router'
import { HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes />
      </HashRouter>
    </>
  )
}

export default App
