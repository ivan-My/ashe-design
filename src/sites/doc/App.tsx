import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page from '@/sites/doc/pages/Components/index'
import Hooks from '@/sites/doc/pages/Hooks'
import Header from '@/sites/doc/components/Header'
import './app.scss'

const App = () => {
  useEffect(() => {})
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/components/readme" replace />}
        />
        <Route path={'/components/*'} element={<Page />} />
        <Route path={'/hook/*'} element={<Hooks />} />
      </Routes>
    </>
  )
}

export default App
