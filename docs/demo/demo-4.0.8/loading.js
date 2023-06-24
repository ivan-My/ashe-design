var f = Object.defineProperty
var i = Object.getOwnPropertySymbols
var h = Object.prototype.hasOwnProperty,
  k = Object.prototype.propertyIsEnumerable
var o = (l, t, e) =>
    t in l
      ? f(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (l[t] = e),
  r = (l, t) => {
    for (var e in t || (t = {})) h.call(t, e) && o(l, e, t[e])
    if (i) for (var e of i(t)) k.call(t, e) && o(l, e, t[e])
    return l
  }
import { R as c } from './demo.js'
import { c as w } from './index.js'
import { c as C } from './bem.js'
const m = {
    show: !1,
    type: 'rotate',
    size: 'medium',
    color: '',
    zIndex: 999,
    custom: !1,
    fullScreen: !1,
    bgColor: '',
    opacity: '1',
    fullScreenBgColor: ' #fff',
  },
  d = (l) => {
    const {
        show: t,
        type: e,
        size: a,
        color: n,
        bgColor: B,
        opacity: S,
        zIndex: z,
        fullScreen: s,
        fullScreenBgColor: $,
        custom: L,
        children: v,
      } = r(r({}, m), l),
      u = c.createElement('div', {
        style: { background: n },
        className: `${e}-bounce1 spinner-${e}-${a}`,
      }),
      g = c.createElement('div', {
        style: { background: n },
        className: `${e}-bounce2 spinner-${e}-${a}`,
      }),
      E = c.createElement('div', {
        style: { backgroundColor: n },
        className: `${e}-bounce3 spinner-${e}-${a} `,
      }),
      N = c.createElement(
        'div',
        { className: `spinner-circle spinner-circle-${a}` },
        c.createElement(
          'div',
          { className: 'spinner-container container1' },
          c.createElement('div', {
            className: `circle1 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle2 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle3 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle4 container-view ${e}-${a}`,
            style: { background: n },
          })
        ),
        c.createElement(
          'div',
          { className: 'spinner-container container2' },
          c.createElement('div', {
            className: `circle1 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle2 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle3 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle4 container-view ${e}-${a}`,
            style: { background: n },
          })
        ),
        c.createElement(
          'div',
          { className: 'spinner-container container3' },
          c.createElement('div', {
            className: `circle1 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle2 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle3 container-view ${e}-${a}`,
            style: { background: n },
          }),
          c.createElement('div', {
            className: `circle4 container-view ${e}-${a}`,
            style: { background: n },
          })
        )
      ),
      b = c.createElement('div', {
        className: `rotate rotate-${a}`,
        style: { borderColor: n },
      }),
      y = C('loading'),
      p = w(y(), s ? 'ashe-loading-fullScreen' : '')
    return c.createElement(
      'div',
      { className: p, style: { background: s ? $ : '' } },
      t &&
        c.createElement(
          'div',
          {
            className: `${e}-spinner ${
              e === 'change' ? '' : `spinner-${e}-${a}`
            } `,
          },
          (e === 'flash' || e === 'change') && u,
          (e === 'flash' || e === 'change') && g,
          e === 'change' && E,
          e === 'circle' && N,
          e === 'rotate' && b
        ),
      v
    )
  }
d.defaultProps = m
d.displayName = 'AsheLoading'
export { d as L }
