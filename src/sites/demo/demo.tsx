import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '../../components/ashe.react.scss'


const rootElement = document.querySelector('#demo')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
