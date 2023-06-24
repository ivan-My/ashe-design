var w = Object.defineProperty,
  A = Object.defineProperties
var $ = Object.getOwnPropertyDescriptors
var v = Object.getOwnPropertySymbols
var I = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable
var u = (t, o, e) =>
    o in t
      ? w(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[o] = e),
  l = (t, o) => {
    for (var e in o || (o = {})) I.call(o, e) && u(t, e, o[e])
    if (v) for (var e of v(o)) O.call(o, e) && u(t, e, o[e])
    return t
  },
  h = (t, o) => A(t, $(o))
var C = (t, o, e) => (u(t, typeof o != 'symbol' ? o + '' : o, e), e)
import { c as R, R as s } from './demo.js'
import { c as D } from './index.js'
import { c as F } from './bem.js'
import { L } from './loading.js'
function M(t, o) {
  const e = R(o)
  return e.render(t), e
}
class E extends s.PureComponent {
  constructor(e) {
    super(e)
    C(this, 'closeTimer')
    ;(this.close = this.close.bind(this)),
      (this.startCloseTimer = this.startCloseTimer.bind(this)),
      (this.clearCloseTimer = this.clearCloseTimer.bind(this)),
      (this.close = this.close.bind(this)),
      (this.clickCover = this.clickCover.bind(this))
  }
  close() {
    this.clearCloseTimer(), this.props.onClose()
  }
  startCloseTimer() {
    const { duration: e } = this.props
    e &&
      (this.closeTimer = window.setTimeout(() => {
        this.close()
      }, e * 1e3))
  }
  clearCloseTimer() {
    this.closeTimer && (clearTimeout(this.closeTimer), (this.closeTimer = -1))
  }
  clickCover() {
    const { closeOnClickOverlay: e } = this.props
    e && this.close()
  }
  componentDidMount() {
    this.startCloseTimer()
  }
  componentWillUnmount() {
    this.clearCloseTimer()
  }
  render() {
    const {
        id: e,
        style: r,
        title: i,
        msg: a,
        bottom: m,
        center: g,
        bgColor: y,
        coverColor: k,
        textAlignCenter: x,
        cover: p,
        type: f,
        children: W,
      } = this.props,
      d = F('toast'),
      N = D({
        'ashe-toast-center': g,
        'ashe-toast-cover': p,
        'ashe-toast-loading': f === 'loading',
      })
    return s.createElement(
      s.Fragment,
      null,
      f === 'loading'
        ? s.createElement(
            'div',
            { className: 'loading' },
            s.createElement(L, { show: !0 })
          )
        : s.createElement(
            'div',
            {
              className: `${d()} ${N}`,
              id: `toast-${e}`,
              style: l(
                { bottom: g ? 'auto' : `${m}`, backgroundColor: p ? k : '' },
                r
              ),
              onClick: () => {
                this.clickCover()
              },
            },
            s.createElement(
              'div',
              {
                className: d('inner'),
                style: { textAlign: x ? 'center' : 'left', backgroundColor: y },
              },
              i
                ? s.createElement('div', { className: 'ashe-toast-title' }, i)
                : null,
              s.createElement('span', { className: d('text') }, a)
            )
          )
    )
  }
}
C(E, 'newInstance')
const P = (t, o) => {
  const e = document.createElement('div')
  t.id && e.setAttribute('id', `${t.id}`), document.body.appendChild(e)
  let r = !1,
    i
  function a(m) {
    r ||
      ((r = !0),
      o({
        component: m,
        destroy() {
          i.unmount(), e && e.parentNode && e.parentNode.removeChild(e)
        },
      }))
  }
  i = M(s.createElement(E, h(l({}, t), { ref: a })), e)
}
let n = null
const B = {
    msg: '',
    title: '',
    style: {},
    duration: 1.5,
    type: 'text',
    center: !0,
    bottom: '30px',
    cover: !1,
    coverColor: 'rgba(0, 0, 0, 0)',
    textAlignCenter: !0,
    loadingRotate: !0,
    bgColor: 'rgba(0, 0, 0, .8)',
    onClose: () => {},
    closeOnClickOverlay: !1,
  },
  U = (t, o) => {
    n && (n.destroy(), (n = null)), P(t, (e) => o && o(e))
  },
  T = (t) => {
    const o = () => {
        n && (n.destroy(), (n = null))
      },
      e = h(l(l({}, B), t), { onClose: o })
    U(e, (r) => {
      n = r
    })
  },
  b = (t) => {
    t || console.warn('[Ashe Toast]: msg cannot be null')
  },
  c = {
    text(t, o) {
      return b(t), T(l({ msg: t, type: 'text' }, o))
    },
    loading(t, o) {
      return b(t), T(l({ msg: t, icon: 'loading', type: 'loading' }, o))
    },
    hide() {
      n && (n.destroy(), (n = null))
    },
  }
const J = () =>
  s.createElement(
    s.Fragment,
    null,
    s.createElement(
      'div',
      { className: 'content' },
      s.createElement('h2', null, '基础用法'),
      s.createElement('div', { onClick: () => c.text('文字提示') }, '文字提示'),
      s.createElement('div', { onClick: () => c.hide() }, '隐藏toast'),
      s.createElement(
        'div',
        { onClick: () => c.text('文字提示', { center: !1, bottom: '30%' }) },
        '自定义高度'
      ),
      s.createElement(
        'div',
        { onClick: () => c.text('文字提示', { duration: 0 }) },
        'toast不消失'
      ),
      s.createElement(
        'div',
        {
          onClick: () => {
            c.loading('loading...', { duration: 0 }), setTimeout(() => {}, 2e3)
          },
        },
        'loading 2秒后消失'
      )
    )
  )
export { J as default }
