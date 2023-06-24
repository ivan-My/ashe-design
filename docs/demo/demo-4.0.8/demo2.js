import { R as e } from './demo.js'
import { B as t } from './button.js'
import './index.js'
import './bem.js'
const c = () =>
  e.createElement(
    'div',
    null,
    e.createElement(
      t,
      {
        onClick: (l) => {
          console.log(l), console.log(2222)
        },
      },
      '按钮'
    ),
    e.createElement('h3', null, '禁用状态'),
    e.createElement(
      t,
      { disabled: !0, color: 'cyan', className: 'test' },
      '按钮'
    ),
    e.createElement('h3', null, '自定义颜色'),
    e.createElement(t, { color: 'green' }, '按钮')
  )
export { c as default }
