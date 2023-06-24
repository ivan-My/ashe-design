var W = Object.defineProperty
var S = Object.getOwnPropertySymbols
var M = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable
var v = (e, t, s) =>
    t in e
      ? W(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  f = (e, t) => {
    for (var s in t || (t = {})) M.call(t, s) && v(e, s, t[s])
    if (S) for (var s of S(t)) U.call(t, s) && v(e, s, t[s])
    return e
  }
var k = (e, t) => {
  var s = {}
  for (var c in e) M.call(e, c) && t.indexOf(c) < 0 && (s[c] = e[c])
  if (e != null && S)
    for (var c of S(e)) t.indexOf(c) < 0 && U.call(e, c) && (s[c] = e[c])
  return s
}
import { R as r, r as u } from './demo.js'
import { c as Z } from './bem.js'
const E = (e, t = 2) => {
    for (e += ''; e.length < t; ) e = `0${e}`
    return e.toString()
  },
  j = (e) => {
    if (!e) return Date.now()
    let t = e
    return (
      (t = t > 0 ? +t : t.toString().replace(/-/g, '/')), new Date(t).getTime()
    )
  }
function A(e) {
  const l = Math.floor(e / 864e5),
    o = Math.floor((e % 864e5) / 36e5),
    a = Math.floor((e % 36e5) / 6e4),
    d = Math.floor((e % 6e4) / 1e3),
    h = Math.floor(e % 1e3)
  return {
    total: e,
    days: l,
    hours: o,
    minutes: a,
    seconds: d,
    milliseconds: h,
  }
}
function z(e, t) {
  const { days: s } = t
  let { hours: c, minutes: i, seconds: l, milliseconds: o } = t
  if (
    (e.includes('DD') ? (e = e.replace('DD', E(s))) : (c += s * 24),
    e.includes('HH') ? (e = e.replace('HH', E(c))) : (i += c * 60),
    e.includes('mm') ? (e = e.replace('mm', E(i))) : (l += i * 60),
    e.includes('ss') ? (e = e.replace('ss', E(l))) : (o += l * 1e3),
    e.includes('S'))
  ) {
    const a = E(o, 3)
    e.includes('SSS')
      ? (e = e.replace('SSS', a))
      : e.includes('SS')
      ? (e = e.replace('SS', a.slice(0, 2)))
      : (e = e.replace('S', a.charAt(0)))
  }
  return e
}
const b = {
    paused: !1,
    startTime: Date.now(),
    endTime: Date.now(),
    millisecond: !1,
    format: 'HH:mm:ss',
    autoStart: !0,
    time: 0,
  },
  O = Z('countdown'),
  B = (e, t) => {
    const I = f(f({}, b), e),
      {
        paused: s,
        startTime: c,
        endTime: i,
        millisecond: l,
        format: o,
        autoStart: a,
        time: d,
        className: h,
        style: y,
        onFinish: g,
        onPaused: T,
        onRestart: H,
        onChange: R,
        children: F,
      } = I,
      P = k(I, [
        'paused',
        'startTime',
        'endTime',
        'millisecond',
        'format',
        'autoStart',
        'time',
        'className',
        'style',
        'onFinish',
        'onPaused',
        'onRestart',
        'onChange',
        'children',
      ]),
      [Y, w] = u.exports.useState(0),
      n = u.exports.useRef({
        isIninted: !1,
        timer: 0,
        restTime: 0,
        counting: !s && a,
        handleEndTime: Date.now(),
        diffTime: 0,
      }),
      C = () => {
        ;(n.current.handleEndTime = i),
          (n.current.diffTime = Date.now() - j(c)),
          n.current.counting || (n.current.counting = !0),
          N()
      },
      N = () => {
        n.current.timer = requestAnimationFrame(() => {
          if (n.current.counting) {
            const p = Date.now() - n.current.diffTime,
              D = Math.max(n.current.handleEndTime - p, 0)
            ;(n.current.restTime = D),
              w(D),
              D || ((n.current.counting = !1), x(), g && g()),
              D > 0 && N()
          }
        })
      },
      x = () => {
        cancelAnimationFrame(n.current.timer),
          (n.current.counting = !1),
          T && T(n.current.restTime)
      }
    u.exports.useImperativeHandle(t, () => ({
      start: () => {
        !n.current.counting &&
          !a &&
          ((n.current.counting = !0),
          (n.current.handleEndTime = Date.now() + Number(n.current.restTime)),
          N(),
          H && H(n.current.restTime))
      },
      pause: () => {
        cancelAnimationFrame(n.current.timer),
          (n.current.counting = !1),
          T && T(n.current.restTime)
      },
      reset: () => {
        a || (x(), (n.current.restTime = d), w(d))
      },
    })),
      u.exports.useEffect(() => {
        const p = A(n.current.restTime)
        R && R(p)
      }, [Y]),
      u.exports.useEffect(() => {
        n.current.isIninted && C()
      }, [i, c]),
      u.exports.useEffect(
        () => (
          a
            ? C()
            : ((n.current.restTime = d),
              w(d),
              n.current.isIninted || (n.current.isIninted = !0)),
          $
        ),
        []
      )
    const $ = () => {
        clearInterval(n.current.timer)
      },
      q = (() => {
        const p = A(n.current.restTime)
        return z(o, p)
      })()
    return r.createElement(
      'div',
      f({ className: `${O()} ${h || ''}`, style: f({}, y) }, P),
      F || r.createElement('div', { className: O('block') }, q)
    )
  },
  m = r.forwardRef(B)
m.defaultProps = b
m.displayName = 'AsheCountDown'
const L = () => {
  const [e, t] = u.exports.useState({ d: '1', h: '00', m: '00', s: '00' }),
    s = u.exports.useRef(null),
    c = (a) => {
      t(a)
    },
    i = () => {
      s.current && s.current.start()
    },
    l = () => {
      s.current && s.current.pause()
    },
    o = () => {
      s.current && s.current.reset()
    }
  return r.createElement(
    r.Fragment,
    null,
    r.createElement(
      'div',
      { className: 'demo' },
      r.createElement('h2', null, '基础用法'),
      r.createElement(m, {
        endTime: Date.now() + 30 * 60 * 60 * 1e3,
        format: 'DD:HH:mm:ss:SS',
      }),
      r.createElement('div', null, '毫秒级渲染'),
      r.createElement(m, {
        endTime: Date.now() + 60 * 1e3,
        millisecond: !0,
        format: 'HH:mm:ss:SS',
      }),
      r.createElement('div', null, '自定义格式'),
      r.createElement(m, {
        endTime: Date.now() + 60 * 1e3 * 60 * 60,
        format: 'DD 天 HH 时 mm 分 ss 秒',
      }),
      r.createElement('div', null, '自定义样式'),
      r.createElement(
        m,
        { endTime: Date.now() + 60 * 1e3 * 60, onChange: c },
        r.createElement(
          'div',
          {
            className: 'countdown-part-box',
            style: { display: 'flex', alignItems: 'center' },
          },
          r.createElement('span', { className: 'block' }, e.hours),
          r.createElement('span', { className: 'colon' }, ':'),
          r.createElement('span', { className: 'block' }, e.minutes),
          r.createElement('span', { className: 'colon' }, ':'),
          r.createElement('span', { className: 'block' }, e.seconds)
        )
      ),
      r.createElement('div', null, '手动控制'),
      r.createElement(m, { ref: s, time: 8e4, autoStart: !1 }),
      r.createElement('span', { onClick: i }, '开始'),
      r.createElement('span', { onClick: l }, '暂停'),
      r.createElement('span', { onClick: o }, '重置')
    )
  )
}
export { L as default }
