import React, { createContext, useContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page from '@/sites/doc/pages/Components/index'
import Hooks from '@/sites/doc/pages/Hooks'
import Header from '@/sites/doc/components/Header'

const App = () => {
    const [searchValue, setSearchValue] = useState<any>()
    return (
        <div onClick={() => setSearchValue(undefined)}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/components/readme" replace />}
                />
                <Route path={'/components/*'} element={<Page />} />
                <Route path={'/hook/*'} element={<Hooks />} />
            </Routes>
        </div>
    )
}

export default App
