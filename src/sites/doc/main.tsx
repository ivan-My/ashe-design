import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './theme/theme-dark.scss'
import '../assets/styles/reset.scss'
import '@/components/ashe.react.scss'

import App from './App'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<App />)
}
