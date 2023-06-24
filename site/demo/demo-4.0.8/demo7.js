var ce = Object.defineProperty
var T = Object.getOwnPropertySymbols
var j = Object.prototype.hasOwnProperty,
  z = Object.prototype.propertyIsEnumerable
var k = (e, s, t) =>
    s in e
      ? ce(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[s] = t),
  b = (e, s) => {
    for (var t in s || (s = {})) j.call(s, t) && k(e, t, s[t])
    if (T) for (var t of T(s)) z.call(s, t) && k(e, t, s[t])
    return e
  }
var U = (e, s) => {
  var t = {}
  for (var i in e) j.call(e, i) && s.indexOf(i) < 0 && (t[i] = e[i])
  if (e != null && T)
    for (var i of T(e)) s.indexOf(i) < 0 && z.call(e, i) && (t[i] = e[i])
  return t
}
import { r as c, R as n } from './demo.js'
import { c as le } from './index.js'
import { c as ie } from './bem.js'
const B = {
    hasMore: !0,
    threshold: 200,
    containerId: '',
    useWindow: !0,
    useCapture: !1,
    isOpenRefresh: !1,
    pullIcon:
      'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
    pullTxt: '松开刷新',
    loadIcon:
      'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
    loadTxt: '加载中···',
    loadMoreTxt: '哎呀，这里是底部了啦',
  },
  v = (e) => {
    const A = b(b({}, B), e),
      {
        children: s,
        hasMore: t,
        threshold: i,
        containerId: u,
        useWindow: g,
        useCapture: x,
        isOpenRefresh: S,
        pullIcon: D,
        pullTxt: N,
        loadIcon: P,
        loadTxt: L,
        loadMoreTxt: M,
        className: R,
        onRefresh: o,
        onLoadMore: a,
        onScrollChange: f,
      } = A,
      J = U(A, [
        'children',
        'hasMore',
        'threshold',
        'containerId',
        'useWindow',
        'useCapture',
        'isOpenRefresh',
        'pullIcon',
        'pullTxt',
        'loadIcon',
        'loadTxt',
        'loadMoreTxt',
        'className',
        'onRefresh',
        'onLoadMore',
        'onScrollChange',
      ]),
      [y, C] = c.exports.useState(!1),
      h = c.exports.useRef(null),
      d = c.exports.useRef(null),
      E = c.exports.useRef(window),
      p = c.exports.useRef(!1),
      I = c.exports.useRef(0),
      w = c.exports.useRef(0),
      O = c.exports.useRef(0),
      l = c.exports.useRef(0),
      G = ie('infiniteloading'),
      K = le(R, G())
    c.exports.useEffect(() => {
      const r = V(h.current)
      return (
        (E.current = g ? window : r),
        E.current.addEventListener('scroll', W, x),
        () => {
          E.current.removeEventListener('scroll', W, x)
        }
      )
    }, [t, y]),
      c.exports.useEffect(() => {
        const r = h.current
        return (
          r.addEventListener('touchmove', $, { passive: !1 }),
          () => {
            r.removeEventListener('touchmove', $, { passive: !1 })
          }
        )
      }, [])
    const Q = () => ({
        height: l.current < 0 ? '0px' : `${l.current}px`,
        transition: p.current
          ? 'height 0s cubic-bezier(0.25,0.1,0.25,1)'
          : 'height 0.2s cubic-bezier(0.25,0.1,0.25,1)',
      }),
      V = (r) => (u ? document.querySelector(`#${u}`) : r && r.parentNode),
      W = () => {
        te()(() => (!ne() || !t || y ? !1 : (C(!0), a && a(X), !0)))
      },
      X = () => {
        C(!1)
      },
      Z = () => {
        ;(l.current = 0),
          (d.current.style.height = `${l.current}px`),
          (p.current = !1)
      },
      _ = (r) => {
        if (I.current === 0 && !p.current && S) {
          ;(O.current = r.touches[0].pageY), (p.current = !0)
          const m = d.current.firstElementChild.offsetHeight
          w.current = Math.floor(m * 1 + 10)
        }
      },
      $ = (r) => {
        ;(l.current = r.touches[0].pageY - O.current),
          l.current > 0 && p.current
            ? (r.preventDefault(),
              l.current >= w.current
                ? ((l.current = w.current),
                  (d.current.style.height = `${l.current}px`))
                : (d.current.style.height = `${l.current}px`))
            : ((l.current = 0),
              (d.current.style.height = `${l.current}px`),
              (p.current = !1))
      },
      ee = () => {
        l.current < w.current
          ? ((l.current = 0), (d.current.style.height = `${l.current}px`))
          : o && o(Z)
      },
      te = () =>
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (m) {
          window.setTimeout(m, 1e3 / 60)
        },
      re = () =>
        window.pageYOffset !== void 0
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop,
      q = (r) => (r ? r.offsetTop + q(r.offsetParent) : 0),
      ne = () => {
        let r = 0,
          m = 0,
          H = 'down'
        const F = re()
        if (g)
          h.current &&
            (r =
              q(h.current) + h.current.offsetHeight - F - window.innerHeight),
            (m = F)
        else {
          const { scrollHeight: se, clientHeight: oe, scrollTop: Y } = E.current
          ;(r = se - oe - Y), (m = Y)
        }
        return (
          I.current > m ? (H = 'up') : (H = 'down'),
          (I.current = m),
          f && f(m),
          r <= i && H === 'down'
        )
      }
    return n.createElement(
      'div',
      b(
        {
          className: K,
          ref: h,
          onTouchStart: _,
          onTouchMove: $,
          onTouchEnd: ee,
        },
        J
      ),
      n.createElement(
        'div',
        { className: 'ashe-infiniteloading-top', ref: d, style: Q() },
        n.createElement(
          'div',
          { className: 'top-box' },
          n.createElement('span', { className: 'top-text' }, N)
        )
      ),
      n.createElement('div', { className: 'ashe-infinite-container' }, s),
      n.createElement(
        'div',
        { className: 'ashe-infiniteloading-bottom' },
        y
          ? n.createElement(
              'div',
              { className: 'bottom-box' },
              n.createElement('div', { className: 'bottom-text' }, L)
            )
          : !t && n.createElement('div', { className: 'tips' }, M)
      )
    )
  }
v.defaultProps = B
v.displayName = 'asheInfiniteloading'
const de = () => {
  const [e, s] = c.exports.useState([]),
    [t, i] = c.exports.useState([]),
    [u, g] = c.exports.useState([]),
    [x, S] = c.exports.useState(!0)
  c.exports.useState(!0)
  const [D, N] = c.exports.useState(!0)
  c.exports.useEffect(() => {
    R()
  }, [])
  const P = (o) => {
      setTimeout(() => {
        const a = e.length
        for (let f = a; f < a + 10; f++) e.push(`${f}`)
        e.length >= 50 ? S(!1) : s([...e]), o()
      }, 500)
    },
    L = (o) => {
      setTimeout(() => {
        const a = u.length
        for (let f = a; f < a + 10; f++) u.push(`${f}`)
        u.length >= 30 ? N(!1) : g([...u]), o()
      }, 500)
    },
    M = (o) => {
      setTimeout(() => {
        console.log('刷新成功'), o()
      }, 1e3)
    },
    R = () => {
      for (let o = 0; o < 10; o++)
        e.push(`${o}`), t.push(`${o}`), u.push(`${o}`)
      s([...e]), i([...t]), g([...u])
    }
  return n.createElement(
    n.Fragment,
    null,
    n.createElement(
      'div',
      { className: 'demo' },
      n.createElement('h4', null, '上拉加载更多'),
      n.createElement(
        'ul',
        { className: 'infiniteUl', id: 'scroll' },
        n.createElement(
          v,
          {
            containerId: 'scroll',
            useWindow: !1,
            hasMore: x,
            onLoadMore: P,
            loadTxt: '正在加载更多的数据...',
          },
          e.map((o, a) =>
            n.createElement('li', { className: 'infiniteLi', key: a }, o)
          )
        )
      ),
      n.createElement('h4', null, '上拉加载更多'),
      n.createElement(
        'ul',
        { className: 'infiniteUl', id: 'refreshScroll' },
        n.createElement(
          v,
          {
            pullIcon: 'JD',
            containerId: 'refreshScroll',
            useWindow: !1,
            isOpenRefresh: !0,
            hasMore: D,
            onLoadMore: L,
            onRefresh: M,
          },
          u.map((o, a) =>
            n.createElement('li', { className: 'infiniteLi', key: a }, o)
          )
        )
      )
    )
  )
}
export { de as default }
