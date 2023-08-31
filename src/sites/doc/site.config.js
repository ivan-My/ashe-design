export default {
  components: [
    {
      key: 'button',
      name: '按钮',
      module: () => import('@/components/button/doc.md'),
    },
    {
      key: 'input',
      name: '输入框',
      module: () => import('@/components/input/doc.md'),
    },
  ],
}
