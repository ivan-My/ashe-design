var V = Object.defineProperty
var i = Object.getOwnPropertySymbols
var g = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable
var b = (e, a, t) =>
    a in e
      ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  s = (e, a) => {
    for (var t in a || (a = {})) g.call(a, t) && b(e, t, a[t])
    if (i) for (var t of i(a)) y.call(a, t) && b(e, t, a[t])
    return e
  }
import { R as o, r as n } from './demo.js'
import { c as B } from './index.js'
import { c as C } from './bem.js'
const x = {
    name: '',
    type: 'text',
    placeholder: '',
    defaultValue: '',
    disabled: !1,
    border: !0,
    center: !1,
  },
  f = C('input'),
  v = o.forwardRef((e, a) => {
    const {
        defaultValue: t,
        disabled: d,
        border: R,
        center: h,
        placeholder: E,
      } = s(s({}, x), e),
      c = n.exports.useRef(null),
      [I, r] = n.exports.useState(t),
      N = B(f(), d && `${f()}-disabled`, R && `${f()}-border`, h && 'center')
    return (
      n.exports.useEffect(() => {
        r(t)
      }, [t]),
      n.exports.useImperativeHandle(a, () => ({
        focus: () => {
          var u
          ;(u = c.current) == null || u.focus()
        },
        blur: () => {
          var u
          ;(u = c.current) == null || u.blur()
        },
        clear: () => {
          r('')
        },
      })),
      n.exports.useEffect(() => {}, [e.defaultValue]),
      o.createElement(
        'div',
        { className: N },
        o.createElement('input', {
          type: 'text',
          value: I,
          ref: c,
          disabled: d,
          placeholder: E,
          onChange: (u) => {
            var m
            const l = u.target.value
            r(l), (m = e.onChange) == null || m.call(e, l)
          },
          onBlur: (u) => {
            var l
            ;(l = e.onBlur) == null || l.call(e, u)
          },
          onFocus: (u) => {
            var l
            ;(l = e.onFocus) == null || l.call(e, u)
          },
        })
      )
    )
  })
v.defaultProps = x
v.displayName = 'NutInput'
export { v as I }
