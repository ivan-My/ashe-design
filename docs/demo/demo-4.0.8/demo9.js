import { r as e } from './demo.js'
import { L as t } from './loading.js'
import './index.js'
import './bem.js'
const c = () => {
  const [r, l] = e.exports.useState(!1)
  return e.exports.createElement(
    e.exports.Fragment,
    null,
    !r &&
      e.exports.createElement(
        'div',
        { className: 'content' },
        e.exports.createElement('h2', null, '基础用法'),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, { show: !0, type: 'flash' }),
          e.exports.createElement('div', null, ' flash')
        ),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, {
            show: !0,
            type: 'circle',
            bgColor: 'yellow',
          }),
          e.exports.createElement('div', null, ' circle')
        ),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, { show: !0, type: 'rotate' }),
          e.exports.createElement('div', null, ' rotate')
        ),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, { show: !0, type: 'change' }),
          e.exports.createElement('div', null, ' change')
        ),
        e.exports.createElement('h2', null, '加载动画大小'),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, {
            show: !0,
            type: 'rotate',
            size: 'mini',
          }),
          e.exports.createElement('div', null, ' mini')
        ),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, {
            show: !0,
            type: 'rotate',
            size: 'medium',
          }),
          e.exports.createElement('div', null, ' medium')
        ),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement(t, {
            show: !0,
            type: 'rotate',
            size: 'large',
          }),
          e.exports.createElement('div', null, ' large')
        ),
        e.exports.createElement('h2', null, '自定义颜色'),
        e.exports.createElement(t, { show: !0, type: 'flash', color: 'blue' }),
        e.exports.createElement(
          'div',
          null,
          e.exports.createElement('div', { onClick: () => l(!0) }, '全屏显示')
        )
      ),
    r &&
      e.exports.createElement(
        'div',
        { onClick: () => l(!1) },
        e.exports.createElement(
          t,
          { show: !0, type: 'circle', fullScreen: !0, size: 'large' },
          e.exports.createElement('h5', null, ' 加载中...')
        )
      )
  )
}
export { c as default }
