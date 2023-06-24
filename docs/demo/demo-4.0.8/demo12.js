var u = Object.defineProperty
var i = Object.getOwnPropertySymbols
var c = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable
var n = (a, e, t) =>
    e in a
      ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[e] = t),
  r = (a, e) => {
    for (var t in e || (e = {})) c.call(e, t) && n(a, t, e[t])
    if (i) for (var t of i(e)) o.call(e, t) && n(a, t, e[t])
    return a
  }
import { R as l } from './demo.js'
const m = {},
  s = (a) => (
    r(r({}, m), a),
    l.createElement('div', { className: 'ashe-virtuallist' }, 'VirtualList')
  )
s.defaultProps = m
s.displayName = 'AsheVirtualList'
const E = () =>
  l.createElement(
    l.Fragment,
    null,
    l.createElement(
      'div',
      { className: 'demo' },
      l.createElement('h2', null, '基础用法'),
      l.createElement(s, null)
    )
  )
export { E as default }
