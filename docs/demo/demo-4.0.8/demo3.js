var v = Object.defineProperty
var s = Object.getOwnPropertySymbols
var m = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable
var i = (e, t, o) =>
    t in e
      ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  a = (e, t) => {
    for (var o in t || (t = {})) m.call(t, o) && i(e, o, t[o])
    if (s) for (var o of s(t)) u.call(t, o) && i(e, o, t[o])
    return e
  }
var f = (e, t) => {
  var o = {}
  for (var r in e) m.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r])
  if (e != null && s)
    for (var r of s(e)) t.indexOf(r) < 0 && u.call(e, r) && (o[r] = e[r])
  return o
}
import { r as d, R as n } from './demo.js'
import { B as h } from './button.js'
import './index.js'
import './bem.js'
function g(e) {
  return e.replace(/[A-Z]/g, (t) => '-' + t.toLowerCase())
}
const p = {},
  E = d.exports.createContext(null)
function P(e) {
  const t = {}
  return (
    Object.keys(e).forEach((o) => {
      t[`--${g(o)}`] = e[o]
    }),
    t
  )
}
const c = (e) => {
  const l = a(a({}, p), e),
    { children: t } = l,
    o = f(l, ['children']),
    r = o.theme || {},
    C = d.exports.useMemo(() => P(r), [r])
  return n.createElement(
    E.Provider,
    { value: a({}, o) },
    n.createElement('div', { style: C }, ' ', t)
  )
}
c.defaultProps = p
c.displayName = 'AsheConfigProvider'
const A = () => {
  const e = { asheButtonDefaultColor: 'red' }
  return n.createElement(
    'div',
    null,
    n.createElement(c, { theme: e }, n.createElement(h, null, '按钮'))
  )
}
export { A as default }
