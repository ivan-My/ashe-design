const modulesPage = import.meta.glob('/src/components/**/demo.tsx')

import Button from '../../components/button/doc.md?raw'
import Input from '../../components/input/doc.md?raw'
const strToCase = (str) => str[0].toUpperCase() + str.substr(1)

export const routes: any = []
for (const path in modulesPage) {
  let name = (/components\/(.*)\/demo.tsx/.exec(path) as any[])[1]
  routes.push(strToCase(name))
}

export const raws = { Button, Input }
