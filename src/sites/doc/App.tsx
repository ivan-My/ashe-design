import React from 'react'
import '@/components/ashe.react.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page from '@/sites/doc/pages/Components/index'
import Hooks from '@/sites/doc/pages/Hooks'
import './app.scss'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/guide/installation" replace />}
        />
        <Route path={'/guide/*'} element={<Page />} />
        <Route path={'/components/*'} element={<Page />} />
        <Route path={'/hook/*'} element={<Hooks />} />
      </Routes>
    </>
  )
}

export default App
