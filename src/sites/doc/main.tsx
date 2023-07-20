import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import '../assets/styles/reset.scss'
import '../assets/styles/md-style.scss'
import App from './App'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  )
}
