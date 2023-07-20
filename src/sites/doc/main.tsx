import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '../assets/styles/reset.scss'
import '../assets/styles/md-style.scss'
import { router } from '@/sites/doc/router'

const rootElement = document.querySelector('#doc')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  //root.render(<App />)
  root.render(<RouterProvider router={router} />)
}
