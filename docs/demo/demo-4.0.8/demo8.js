import { r, R as e } from './demo.js'
import { I as n } from './input.js'
import './index.js'
import './bem.js'
const u = () => {
  r.exports.useState('111')
  const t = r.exports.useRef(null)
  return (
    r.exports.useEffect(() => {}),
    e.createElement(
      e.Fragment,
      null,
      e.createElement(
        e.Fragment,
        null,
        e.createElement(
          'div',
          { className: 'demo' },
          e.createElement('h2', null, '基础用法'),
          e.createElement(n, null),
          e.createElement(
            'div',
            { onClick: () => t.current.focus() },
            '获取焦点'
          ),
          e.createElement(
            'div',
            { onClick: () => t.current.blur() },
            '失去焦点'
          ),
          e.createElement(
            'div',
            { onClick: () => t.current.clear() },
            ' 清空value'
          )
        )
      )
    )
  )
}
export { u as default }
