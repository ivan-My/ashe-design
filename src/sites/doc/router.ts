const modulesPage = import.meta.globEager('./guide/*.md', { as: 'raw' })
export const guideRoutes: any[] = []
for (const path in modulesPage) {
  const regex = /\/(\w+)\.md$/
  // @ts-ignore
  const name = path.match(regex)[1]
  const module: any = modulesPage[path]
  guideRoutes.push({
    path: '/guide/' + name,
    component: modulesPage[path],
    name,
  })
}
