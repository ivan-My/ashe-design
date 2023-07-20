import React from 'react'

import './app.scss'
import { Route, Routes } from 'react-router-dom'

import Page from '@/sites/doc/pages/Components/index'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/components/*'} element={<Page />} />
      </Routes>
    </>
  )
}

export default App
