import { ReactElement } from 'react'

import * as ReactDOM from 'react-dom/client'

export function render(node: ReactElement, container: any) {
  const root = ReactDOM.createRoot(container)
  root.render(node)
  return root
}
