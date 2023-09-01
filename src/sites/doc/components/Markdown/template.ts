import type { Project } from '@stackblitz/sdk'

const INDEX_HTML = `
<!DOCTYPE html>
  <html>
    <head>
      <title>基础用法</title>
    </head>
    <body>
      <div id='root'></div>
    </body>
  </html>
`
const INDEX_JS = `
import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App';
import "ashe-design/dist/style.css";


const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)`

const packageJson = `
{

  "version": "0.0.0",
  "private": true,
  "dependencies": {
   "ashe-design": "4.1.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@babel/runtime": "7.22.11"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-scripts": "latest"
  }
}
`

export function getProject(code: string): Project {
  return {
    title: 'Dynamically Generated Project',
    description: 'Simple example using the EngineBlock "javascript" template.',
    template: 'create-react-app',
    files: {
      'public/index.html': INDEX_HTML,
      'src/index.js': INDEX_JS,
      'src/App.jsx': code,
      'package.json': packageJson,
    },
    dependencies: {
      'ashe-design': '4.1.2',
      react: '18.2.0',
      'react-dom': '18.2.0',
      '@babel/runtime': '7.22.11',
    },
  }
}
