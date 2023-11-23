import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page from '@/sites/doc/pages/components/index'
import Hooks from './pages/hooks'
import Header from '@/sites/doc/components/Header'
import Index from './pages/index'

const App = () => {
    const [searchValue, setSearchValue] = useState<any>('')
    return (
        <div onClick={() => setSearchValue(undefined)}>
            {/*<Header searchValue={searchValue} setSearchValue={setSearchValue} />*/}
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/components/readme" replace />}
                />

                <Route path="/" element={<Index />} />
                <Route path={'/components/*'} element={<Page />} />
                {/*<Route path={'/hooks/*'} element={<Hooks />}  />*/}
                <Route path={'/hooks/*'} element={<Hooks />} />
            </Routes>
        </div>
    )
}

export default App
