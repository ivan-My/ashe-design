import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../assets/styles/reset.scss'
import App from './App'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  )
}
