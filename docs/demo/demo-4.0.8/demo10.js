var m = Object.defineProperty
var c = Object.getOwnPropertySymbols
var u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable
var i = (s, t, e) =>
    t in s
      ? m(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (s[t] = e),
  r = (s, t) => {
    for (var e in t || (t = {})) u.call(t, e) && i(s, e, t[e])
    if (c) for (var e of c(t)) p.call(t, e) && i(s, e, t[e])
    return s
  }
import { r as l, R as a } from './demo.js'
import { B as f } from './button.js'
import './index.js'
import './bem.js'
const k = { opacity: '0.5', visible: !0 },
  E = (s) => {
    const { opacity: t, visible: e } = r(r({}, k), s),
      [o, n] = l.exports.useState(e)
    return (
      l.exports.useEffect(() => {
        e && n(e)
      }, [e]),
      a.createElement(
        a.Fragment,
        null,
        o &&
          a.createElement(
            'div',
            {
              className: 'ashe-mask',
              style: {},
              onClick: () => {
                n(!o)
              },
            },
            'maks'
          )
      )
    )
  },
  h = () => {
    const [s, t] = l.exports.useState(!1)
    return a.createElement(
      'div',
      null,
      a.createElement(f, null),
      a.createElement('div', { onClick: () => t(!0) }, '点击'),
      a.createElement(E, null)
    )
  }
export { h as default }
