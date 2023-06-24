var h = Object.defineProperty
var o = Object.getOwnPropertySymbols
var r = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable
var i = (s, e, t) =>
    e in s
      ? h(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  l = (s, e) => {
    for (var t in e || (e = {})) r.call(e, t) && i(s, t, e[t])
    if (o) for (var t of o(e)) d.call(e, t) && i(s, t, e[t])
    return s
  }
var m = (s, e) => {
  var t = {}
  for (var c in s) r.call(s, c) && e.indexOf(c) < 0 && (t[c] = s[c])
  if (s != null && o)
    for (var c of o(s)) e.indexOf(c) < 0 && d.call(s, c) && (t[c] = s[c])
  return t
}
import { R as v } from './demo.js'
import { c as B } from './index.js'
import { c as R } from './bem.js'
const x = {
    className: '',
    disabled: !1,
    children: void 0,
    style: {},
    onClick: (s) => {},
  },
  b = R('button'),
  g = (s) => {
    const n = l(l({}, x), s),
      {
        children: e,
        onClick: t,
        disabled: c,
        style: f,
        color: p,
        className: k,
      } = n,
      u = m(n, [
        'children',
        'onClick',
        'disabled',
        'style',
        'color',
        'className',
      ]),
      y = B(b(), k, c && `${b()}--disabled`),
      C = { color: p },
      N = (a) => {
        !c && t && t(a)
      }
    return v.createElement(
      'div',
      l({ className: y, style: l(l({}, C), f), onClick: (a) => N(a) }, u),
      e
    )
  }
export { g as B }
