var he = Object.defineProperty
var B = Object.getOwnPropertySymbols
var ee = Object.prototype.hasOwnProperty,
  te = Object.prototype.propertyIsEnumerable
var G = (n, e, t) =>
    e in n
      ? he(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  S = (n, e) => {
    for (var t in e || (e = {})) ee.call(e, t) && G(n, t, e[t])
    if (B) for (var t of B(e)) te.call(e, t) && G(n, t, e[t])
    return n
  }
var re = (n, e) => {
  var t = {}
  for (var r in n) ee.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r])
  if (n != null && B)
    for (var r of B(n)) e.indexOf(r) < 0 && te.call(n, r) && (t[r] = n[r])
  return t
}
var A = (n, e, t) => (G(n, typeof e != 'symbol' ? e + '' : e, t), t)
import { r as w, R as P } from './demo.js'
import { I as ne } from './input.js'
import './index.js'
import './bem.js'
function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e]
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }),
    C.apply(this, arguments)
  )
}
function me(n, e) {
  ;(n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    U(n, e)
}
function z(n) {
  return (
    (z = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    z(n)
  )
}
function U(n, e) {
  return (
    (U = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    U(n, e)
  )
}
function ge() {
  if (
    typeof Reflect == 'undefined' ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch (n) {
    return !1
  }
}
function Z(n, e, t) {
  return (
    ge()
      ? (Z = Reflect.construct.bind())
      : (Z = function (i, a, s) {
          var f = [null]
          f.push.apply(f, a)
          var u = Function.bind.apply(i, f),
            m = new u()
          return s && U(m, s.prototype), m
        }),
    Z.apply(null, arguments)
  )
}
function ye(n) {
  return Function.toString.call(n).indexOf('[native code]') !== -1
}
function K(n) {
  var e = typeof Map == 'function' ? new Map() : void 0
  return (
    (K = function (r) {
      if (r === null || !ye(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof e != 'undefined') {
        if (e.has(r)) return e.get(r)
        e.set(r, i)
      }
      function i() {
        return Z(r, arguments, z(this).constructor)
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        U(i, r)
      )
    }),
    K(n)
  )
}
var ve = /%[sdj%]/g,
  Fe = function () {}
typeof process != 'undefined' && process.env
function H(n) {
  if (!n || !n.length) return null
  var e = {}
  return (
    n.forEach(function (t) {
      var r = t.field
      ;(e[r] = e[r] || []), e[r].push(t)
    }),
    e
  )
}
function V(n) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    t[r - 1] = arguments[r]
  var i = 0,
    a = t.length
  if (typeof n == 'function') return n.apply(null, t)
  if (typeof n == 'string') {
    var s = n.replace(ve, function (f) {
      if (f === '%%') return '%'
      if (i >= a) return f
      switch (f) {
        case '%s':
          return String(t[i++])
        case '%d':
          return Number(t[i++])
        case '%j':
          try {
            return JSON.stringify(t[i++])
          } catch (u) {
            return '[Circular]'
          }
          break
        default:
          return f
      }
    })
    return s
  }
  return n
}
function be(n) {
  return (
    n === 'string' ||
    n === 'url' ||
    n === 'hex' ||
    n === 'email' ||
    n === 'date' ||
    n === 'pattern'
  )
}
function x(n, e) {
  return !!(
    n == null ||
    (e === 'array' && Array.isArray(n) && !n.length) ||
    (be(e) && typeof n == 'string' && !n)
  )
}
function xe(n, e, t) {
  var r = [],
    i = 0,
    a = n.length
  function s(f) {
    r.push.apply(r, f || []), i++, i === a && t(r)
  }
  n.forEach(function (f) {
    e(f, s)
  })
}
function ie(n, e, t) {
  var r = 0,
    i = n.length
  function a(s) {
    if (s && s.length) {
      t(s)
      return
    }
    var f = r
    ;(r = r + 1), f < i ? e(n[f], a) : t([])
  }
  a([])
}
function we(n) {
  var e = []
  return (
    Object.keys(n).forEach(function (t) {
      e.push.apply(e, n[t] || [])
    }),
    e
  )
}
var ae = (function (n) {
  me(e, n)
  function e(t, r) {
    var i
    return (
      (i = n.call(this, 'Async Validation Error') || this),
      (i.errors = t),
      (i.fields = r),
      i
    )
  }
  return e
})(K(Error))
function Ee(n, e, t, r, i) {
  if (e.first) {
    var a = new Promise(function (v, q) {
      var E = function (o) {
          return r(o), o.length ? q(new ae(o, H(o))) : v(i)
        },
        d = we(n)
      ie(d, t, E)
    })
    return (
      a.catch(function (v) {
        return v
      }),
      a
    )
  }
  var s = e.firstFields === !0 ? Object.keys(n) : e.firstFields || [],
    f = Object.keys(n),
    u = f.length,
    m = 0,
    g = [],
    h = new Promise(function (v, q) {
      var E = function (y) {
        if ((g.push.apply(g, y), m++, m === u))
          return r(g), g.length ? q(new ae(g, H(g))) : v(i)
      }
      f.length || (r(g), v(i)),
        f.forEach(function (d) {
          var y = n[d]
          s.indexOf(d) !== -1 ? ie(y, t, E) : xe(y, t, E)
        })
    })
  return (
    h.catch(function (v) {
      return v
    }),
    h
  )
}
function qe(n) {
  return !!(n && n.message !== void 0)
}
function Oe(n, e) {
  for (var t = n, r = 0; r < e.length; r++) {
    if (t == null) return t
    t = t[e[r]]
  }
  return t
}
function se(n, e) {
  return function (t) {
    var r
    return (
      n.fullFields
        ? (r = Oe(e, n.fullFields))
        : (r = e[t.field || n.fullField]),
      qe(t)
        ? ((t.field = t.field || n.fullField), (t.fieldValue = r), t)
        : {
            message: typeof t == 'function' ? t() : t,
            fieldValue: r,
            field: t.field || n.fullField,
          }
    )
  }
}
function fe(n, e) {
  if (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var r = e[t]
        typeof r == 'object' && typeof n[t] == 'object'
          ? (n[t] = C({}, n[t], r))
          : (n[t] = r)
      }
  }
  return n
}
var ue = function (e, t, r, i, a, s) {
    e.required &&
      (!r.hasOwnProperty(e.field) || x(t, s || e.type)) &&
      i.push(V(a.messages.required, e.fullField))
  },
  Ae = function (e, t, r, i, a) {
    ;(/^\s+$/.test(t) || t === '') &&
      i.push(V(a.messages.whitespace, e.fullField))
  },
  J,
  Pe = function () {
    if (J) return J
    var n = '[a-fA-F\\d:]',
      e = function (p) {
        return p && p.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + n + ')|(?<=' + n + ')(?=\\s|$))'
          : ''
      },
      t =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      r = '[a-fA-F\\d]{1,4}',
      i = (
        `
(?:
(?:` +
        r +
        ':){7}(?:' +
        r +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        r +
        ':){6}(?:' +
        t +
        '|:' +
        r +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        r +
        ':){5}(?::' +
        t +
        '|(?::' +
        r +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        r +
        ':){4}(?:(?::' +
        r +
        '){0,1}:' +
        t +
        '|(?::' +
        r +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        r +
        ':){3}(?:(?::' +
        r +
        '){0,2}:' +
        t +
        '|(?::' +
        r +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        r +
        ':){2}(?:(?::' +
        r +
        '){0,3}:' +
        t +
        '|(?::' +
        r +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        r +
        ':){1}(?:(?::' +
        r +
        '){0,4}:' +
        t +
        '|(?::' +
        r +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        r +
        '){0,5}:' +
        t +
        '|(?::' +
        r +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      a = new RegExp('(?:^' + t + '$)|(?:^' + i + '$)'),
      s = new RegExp('^' + t + '$'),
      f = new RegExp('^' + i + '$'),
      u = function (p) {
        return p && p.exact
          ? a
          : new RegExp(
              '(?:' + e(p) + t + e(p) + ')|(?:' + e(p) + i + e(p) + ')',
              'g'
            )
      }
    ;(u.v4 = function (l) {
      return l && l.exact ? s : new RegExp('' + e(l) + t + e(l), 'g')
    }),
      (u.v6 = function (l) {
        return l && l.exact ? f : new RegExp('' + e(l) + i + e(l), 'g')
      })
    var m = '(?:(?:[a-z]+:)?//)',
      g = '(?:\\S+(?::\\S*)?@)?',
      h = u.v4().source,
      v = u.v6().source,
      q = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      E = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      d = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      y = '(?::\\d{2,5})?',
      o = '(?:[/?#][^\\s"]*)?',
      N =
        '(?:' +
        m +
        '|www\\.)' +
        g +
        '(?:localhost|' +
        h +
        '|' +
        v +
        '|' +
        q +
        E +
        d +
        ')' +
        y +
        o
    return (J = new RegExp('(?:^' + N + '$)', 'i')), J
  },
  oe = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  T = {
    integer: function (e) {
      return T.number(e) && parseInt(e, 10) === e
    },
    float: function (e) {
      return T.number(e) && !T.integer(e)
    },
    array: function (e) {
      return Array.isArray(e)
    },
    regexp: function (e) {
      if (e instanceof RegExp) return !0
      try {
        return !!new RegExp(e)
      } catch (t) {
        return !1
      }
    },
    date: function (e) {
      return (
        typeof e.getTime == 'function' &&
        typeof e.getMonth == 'function' &&
        typeof e.getYear == 'function' &&
        !isNaN(e.getTime())
      )
    },
    number: function (e) {
      return isNaN(e) ? !1 : typeof e == 'number'
    },
    object: function (e) {
      return typeof e == 'object' && !T.array(e)
    },
    method: function (e) {
      return typeof e == 'function'
    },
    email: function (e) {
      return typeof e == 'string' && e.length <= 320 && !!e.match(oe.email)
    },
    url: function (e) {
      return typeof e == 'string' && e.length <= 2048 && !!e.match(Pe())
    },
    hex: function (e) {
      return typeof e == 'string' && !!e.match(oe.hex)
    },
  },
  Ve = function (e, t, r, i, a) {
    if (e.required && t === void 0) {
      ue(e, t, r, i, a)
      return
    }
    var s = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      f = e.type
    s.indexOf(f) > -1
      ? T[f](t) || i.push(V(a.messages.types[f], e.fullField, e.type))
      : f &&
        typeof t !== e.type &&
        i.push(V(a.messages.types[f], e.fullField, e.type))
  },
  _e = function (e, t, r, i, a) {
    var s = typeof e.len == 'number',
      f = typeof e.min == 'number',
      u = typeof e.max == 'number',
      m = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      g = t,
      h = null,
      v = typeof t == 'number',
      q = typeof t == 'string',
      E = Array.isArray(t)
    if ((v ? (h = 'number') : q ? (h = 'string') : E && (h = 'array'), !h))
      return !1
    E && (g = t.length),
      q && (g = t.replace(m, '_').length),
      s
        ? g !== e.len && i.push(V(a.messages[h].len, e.fullField, e.len))
        : f && !u && g < e.min
        ? i.push(V(a.messages[h].min, e.fullField, e.min))
        : u && !f && g > e.max
        ? i.push(V(a.messages[h].max, e.fullField, e.max))
        : f &&
          u &&
          (g < e.min || g > e.max) &&
          i.push(V(a.messages[h].range, e.fullField, e.min, e.max))
  },
  I = 'enum',
  Ne = function (e, t, r, i, a) {
    ;(e[I] = Array.isArray(e[I]) ? e[I] : []),
      e[I].indexOf(t) === -1 &&
        i.push(V(a.messages[I], e.fullField, e[I].join(', ')))
  },
  je = function (e, t, r, i, a) {
    if (e.pattern) {
      if (e.pattern instanceof RegExp)
        (e.pattern.lastIndex = 0),
          e.pattern.test(t) ||
            i.push(V(a.messages.pattern.mismatch, e.fullField, t, e.pattern))
      else if (typeof e.pattern == 'string') {
        var s = new RegExp(e.pattern)
        s.test(t) ||
          i.push(V(a.messages.pattern.mismatch, e.fullField, t, e.pattern))
      }
    }
  },
  c = {
    required: ue,
    whitespace: Ae,
    type: Ve,
    range: _e,
    enum: Ne,
    pattern: je,
  },
  Re = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t, 'string') && !e.required) return r()
      c.required(e, t, i, s, a, 'string'),
        x(t, 'string') ||
          (c.type(e, t, i, s, a),
          c.range(e, t, i, s, a),
          c.pattern(e, t, i, s, a),
          e.whitespace === !0 && c.whitespace(e, t, i, s, a))
    }
    r(s)
  },
  Se = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a), t !== void 0 && c.type(e, t, i, s, a)
    }
    r(s)
  },
  Le = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if ((t === '' && (t = void 0), x(t) && !e.required)) return r()
      c.required(e, t, i, s, a),
        t !== void 0 && (c.type(e, t, i, s, a), c.range(e, t, i, s, a))
    }
    r(s)
  },
  $e = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a), t !== void 0 && c.type(e, t, i, s, a)
    }
    r(s)
  },
  Ce = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a), x(t) || c.type(e, t, i, s, a)
    }
    r(s)
  },
  Ie = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a),
        t !== void 0 && (c.type(e, t, i, s, a), c.range(e, t, i, s, a))
    }
    r(s)
  },
  De = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a),
        t !== void 0 && (c.type(e, t, i, s, a), c.range(e, t, i, s, a))
    }
    r(s)
  },
  Me = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (t == null && !e.required) return r()
      c.required(e, t, i, s, a, 'array'),
        t != null && (c.type(e, t, i, s, a), c.range(e, t, i, s, a))
    }
    r(s)
  },
  Te = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a), t !== void 0 && c.type(e, t, i, s, a)
    }
    r(s)
  },
  ke = 'enum',
  Ue = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a), t !== void 0 && c[ke](e, t, i, s, a)
    }
    r(s)
  },
  We = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t, 'string') && !e.required) return r()
      c.required(e, t, i, s, a), x(t, 'string') || c.pattern(e, t, i, s, a)
    }
    r(s)
  },
  Be = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t, 'date') && !e.required) return r()
      if ((c.required(e, t, i, s, a), !x(t, 'date'))) {
        var u
        t instanceof Date ? (u = t) : (u = new Date(t)),
          c.type(e, u, i, s, a),
          u && c.range(e, u.getTime(), i, s, a)
      }
    }
    r(s)
  },
  Je = function (e, t, r, i, a) {
    var s = [],
      f = Array.isArray(t) ? 'array' : typeof t
    c.required(e, t, i, s, a, f), r(s)
  },
  Y = function (e, t, r, i, a) {
    var s = e.type,
      f = [],
      u = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (u) {
      if (x(t, s) && !e.required) return r()
      c.required(e, t, i, f, a, s), x(t, s) || c.type(e, t, i, f, a)
    }
    r(f)
  },
  Ze = function (e, t, r, i, a) {
    var s = [],
      f = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (f) {
      if (x(t) && !e.required) return r()
      c.required(e, t, i, s, a)
    }
    r(s)
  },
  k = {
    string: Re,
    method: Se,
    number: Le,
    boolean: $e,
    regexp: Ce,
    integer: Ie,
    float: De,
    array: Me,
    object: Te,
    enum: Ue,
    pattern: We,
    date: Be,
    url: Y,
    hex: Y,
    email: Y,
    required: Je,
    any: Ze,
  }
function Q() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this))
      return (e.clone = this.clone), e
    },
  }
}
var X = Q(),
  W = (function () {
    function n(t) {
      ;(this.rules = null), (this._messages = X), this.define(t)
    }
    var e = n.prototype
    return (
      (e.define = function (r) {
        var i = this
        if (!r) throw new Error('Cannot configure a schema with no rules')
        if (typeof r != 'object' || Array.isArray(r))
          throw new Error('Rules must be an object')
        ;(this.rules = {}),
          Object.keys(r).forEach(function (a) {
            var s = r[a]
            i.rules[a] = Array.isArray(s) ? s : [s]
          })
      }),
      (e.messages = function (r) {
        return r && (this._messages = fe(Q(), r)), this._messages
      }),
      (e.validate = function (r, i, a) {
        var s = this
        i === void 0 && (i = {}), a === void 0 && (a = function () {})
        var f = r,
          u = i,
          m = a
        if (
          (typeof u == 'function' && ((m = u), (u = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return m && m(null, f), Promise.resolve(f)
        function g(d) {
          var y = [],
            o = {}
          function N(p) {
            if (Array.isArray(p)) {
              var b
              y = (b = y).concat.apply(b, p)
            } else y.push(p)
          }
          for (var l = 0; l < d.length; l++) N(d[l])
          y.length ? ((o = H(y)), m(y, o)) : m(null, f)
        }
        if (u.messages) {
          var h = this.messages()
          h === X && (h = Q()), fe(h, u.messages), (u.messages = h)
        } else u.messages = this.messages()
        var v = {},
          q = u.keys || Object.keys(this.rules)
        q.forEach(function (d) {
          var y = s.rules[d],
            o = f[d]
          y.forEach(function (N) {
            var l = N
            typeof l.transform == 'function' &&
              (f === r && (f = C({}, f)), (o = f[d] = l.transform(o))),
              typeof l == 'function' ? (l = { validator: l }) : (l = C({}, l)),
              (l.validator = s.getValidationMethod(l)),
              l.validator &&
                ((l.field = d),
                (l.fullField = l.fullField || d),
                (l.type = s.getType(l)),
                (v[d] = v[d] || []),
                v[d].push({ rule: l, value: o, source: f, field: d }))
          })
        })
        var E = {}
        return Ee(
          v,
          u,
          function (d, y) {
            var o = d.rule,
              N =
                (o.type === 'object' || o.type === 'array') &&
                (typeof o.fields == 'object' ||
                  typeof o.defaultField == 'object')
            ;(N = N && (o.required || (!o.required && d.value))),
              (o.field = d.field)
            function l(F, _) {
              return C({}, _, {
                fullField: o.fullField + '.' + F,
                fullFields: o.fullFields ? [].concat(o.fullFields, [F]) : [F],
              })
            }
            function p(F) {
              F === void 0 && (F = [])
              var _ = Array.isArray(F) ? F : [F]
              !u.suppressWarning &&
                _.length &&
                n.warning('async-validator:', _),
                _.length && o.message !== void 0 && (_ = [].concat(o.message))
              var O = _.map(se(o, f))
              if (u.first && O.length) return (E[o.field] = 1), y(O)
              if (!N) y(O)
              else {
                if (o.required && !d.value)
                  return (
                    o.message !== void 0
                      ? (O = [].concat(o.message).map(se(o, f)))
                      : u.error &&
                        (O = [u.error(o, V(u.messages.required, o.field))]),
                    y(O)
                  )
                var j = {}
                o.defaultField &&
                  Object.keys(d.value).map(function (L) {
                    j[L] = o.defaultField
                  }),
                  (j = C({}, j, d.rule.fields))
                var D = {}
                Object.keys(j).forEach(function (L) {
                  var R = j[L],
                    pe = Array.isArray(R) ? R : [R]
                  D[L] = pe.map(l.bind(null, L))
                })
                var M = new n(D)
                M.messages(u.messages),
                  d.rule.options &&
                    ((d.rule.options.messages = u.messages),
                    (d.rule.options.error = u.error)),
                  M.validate(d.value, d.rule.options || u, function (L) {
                    var R = []
                    O && O.length && R.push.apply(R, O),
                      L && L.length && R.push.apply(R, L),
                      y(R.length ? R : null)
                  })
              }
            }
            var b
            if (o.asyncValidator)
              b = o.asyncValidator(o, d.value, p, d.source, u)
            else if (o.validator) {
              try {
                b = o.validator(o, d.value, p, d.source, u)
              } catch (F) {
                console.error == null || console.error(F),
                  u.suppressValidatorError ||
                    setTimeout(function () {
                      throw F
                    }, 0),
                  p(F.message)
              }
              b === !0
                ? p()
                : b === !1
                ? p(
                    typeof o.message == 'function'
                      ? o.message(o.fullField || o.field)
                      : o.message || (o.fullField || o.field) + ' fails'
                  )
                : b instanceof Array
                ? p(b)
                : b instanceof Error && p(b.message)
            }
            b &&
              b.then &&
              b.then(
                function () {
                  return p()
                },
                function (F) {
                  return p(F)
                }
              )
          },
          function (d) {
            g(d)
          },
          f
        )
      }),
      (e.getType = function (r) {
        if (
          (r.type === void 0 &&
            r.pattern instanceof RegExp &&
            (r.type = 'pattern'),
          typeof r.validator != 'function' &&
            r.type &&
            !k.hasOwnProperty(r.type))
        )
          throw new Error(V('Unknown rule type %s', r.type))
        return r.type || 'string'
      }),
      (e.getValidationMethod = function (r) {
        if (typeof r.validator == 'function') return r.validator
        var i = Object.keys(r),
          a = i.indexOf('message')
        return (
          a !== -1 && i.splice(a, 1),
          i.length === 1 && i[0] === 'required'
            ? k.required
            : k[this.getType(r)] || void 0
        )
      }),
      n
    )
  })()
W.register = function (e, t) {
  if (typeof t != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  k[e] = t
}
W.warning = Fe
W.messages = X
W.validators = k
class Ge {
  constructor() {
    A(this, 'store', {})
    A(this, 'fieldEntities', [])
    A(this, 'callbacks', {})
    A(this, 'errList', [])
    A(
      this,
      'registerField',
      (e) => (
        this.fieldEntities.push(e),
        () => {
          ;(this.fieldEntities = this.fieldEntities.filter((t) => t != e)),
            delete this.store[e.props.name]
        }
      )
    )
    A(this, 'getFieldValue', (e) => this.store[e])
    A(this, 'setFieldsValue', (e) => {
      ;(this.store = S(S({}, this.store), e)),
        this.fieldEntities.forEach((t) => {
          const { name: r } = t.props
          Object.keys(e).forEach((i) => {
            i === r && t.onStoreChange.changeValue()
          })
        })
    })
    A(this, 'validate', () => {
      const e = []
      return (
        (this.errList.length = 0),
        this.fieldEntities.forEach((t) => {
          const { name: r, rules: i = [] } = t.props,
            a = {}
          i.length &&
            (i.length > 1
              ? ((a[r] = []),
                i.map((f) => {
                  a[r].push(f)
                }))
              : (a[r] = i[0])),
            new W(a).validate({ [r]: this.store[r] }, (f) => {
              f && (e.push(...f), this.errList.push(...f)),
                t.onStoreChange.changeValue()
            })
        }),
        e
      )
    })
    A(this, 'setCallback', (e) => {
      this.callbacks = S(S({}, this.callbacks), e)
    })
    A(this, 'submit', () => {
      var t, r, i, a
      const e = this.validate()
      e.length === 0
        ? (r = (t = this.callbacks).onFinish) == null || r.call(t, this.store)
        : e.length > 0 &&
          ((a = (i = this.callbacks).onFinishFailed) == null || a.call(i, e))
    })
    A(this, 'resetFields', () => {
      Object.keys(this.store).forEach((e) => {
        this.setFieldsValue({ [e]: '' })
      })
    })
    A(this, 'innerSetInitialValues', (e) => {
      this.store = e
    })
    A(this, 'getForm', () => ({
      setCallback: this.setCallback,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      resetFields: this.resetFields,
      submit: this.submit,
      store: this.store,
      errList: this.errList,
      fieldEntities: this.fieldEntities,
      innerSetInitialValues: this.innerSetInitialValues,
    }))
    this.callbacks = { onFinish: (e) => {}, onFinishFailed: () => {} }
  }
}
const de = (n) => {
    const e = w.exports.useRef()
    if (!e.current)
      if (n) e.current = n
      else {
        const t = new Ge()
        e.current = t.getForm()
      }
    return [e.current]
  },
  le = w.exports.createContext({}),
  Ye = (n) => (Number.isNaN(Number(n)) ? String(n) : `${n}px`),
  ze = {
    name: '',
    label: '',
    className: '',
    rules: [{ required: !1, message: '' }],
    disabled: !1,
    labelWidth: 90,
    errorMessageAlign: 'left',
    showErrorLine: !0,
    showErrorMessage: !0,
    initialValue: '',
  },
  Ke = (n) => {
    const {
      label: e,
      name: t,
      children: r,
      initialValue: i,
      labelWidth: a,
      errorMessageAlign: s,
      rules: f = [{ required: !1, message: '' }],
      className: u = '',
    } = S(S({}, ze), n)
    let m,
      g = !1
    const h = w.exports.useContext(le),
      [, v] = w.exports.useState({}),
      q = w.exports.useMemo(
        () => ({
          changeValue() {
            v({})
          },
        }),
        [h]
      ),
      E = (l) => {
        var O
        const { getFieldValue: p, setFieldsValue: b } = h,
          F = l.type,
          _ = i || ((O = l.props) == null ? void 0 : O.defaultValue)
        return (
          _ && !g && (b({ [t]: _ }), (g = !0)),
          {
            defaultValue: p(t),
            onChange: (j) => {
              const D = l.props.onChange
              D && D(j)
              let M = j
              switch (F) {
                case 'checkbox':
                  M = j.target.value
                  break
              }
              b({ [t]: M })
            },
          }
        )
      },
      d = (l) => {
        var O
        const p =
            h.errList.length > 0 &&
            ((O = h.errList) == null ? void 0 : O.filter((j) => j.field === t)),
          { starPositon: b } = h,
          F =
            f.length > 0 &&
            f[0].required &&
            P.createElement('i', { className: 'required' }),
          _ =
            b === 'Right'
              ? P.createElement(P.Fragment, null, e, F)
              : P.createElement(P.Fragment, null, F, e)
        return P.createElement(
          'div',
          { className: `ashe-form-item ${u}` },
          e
            ? P.createElement(
                'div',
                {
                  className: 'ashe-cell__title ashe-form-item__label',
                  style: { width: Ye(a) },
                },
                _
              )
            : null,
          P.createElement(
            'div',
            { className: 'ashe-cell__value ashe-form-item__body' },
            P.createElement(
              'div',
              { className: 'ashe-form-item__body__slots' },
              l
            ),
            p.length > 0 &&
              P.createElement(
                'div',
                {
                  className: 'ashe-form-item__body__tips',
                  style: { textAlign: s },
                },
                p[0].message
              )
          )
        )
      },
      y = Array.isArray(r) ? r[0] : r
    let o = y
    i && (o = P.cloneElement(y, { defaultValue: i }))
    const N = P.cloneElement(o, E(o))
    return (
      w.exports.useEffect(
        () => (
          (m = h.registerField({ onStoreChange: q, props: S({}, n) })),
          () => {
            m && m()
          }
        ),
        [q]
      ),
      d(N)
    )
  },
  ce = {
    initialValues: {},
    className: '',
    style: void 0,
    form: {},
    labelPosition: 'Right',
    formGroupTitle: '',
    onFinish: (n) => {},
    onFinishFailed: (n) => {},
    onRest: () => {},
    starPositon: 'Left',
  },
  He = {
    Top: 'form-layout-top',
    Left: 'form-layout-left',
    Right: 'form-layout-right',
  },
  $ = (n) => {
    const E = S(S({}, ce), n),
      {
        initialValues: e,
        children: t,
        onFinish: r,
        onFinishFailed: i,
        labelPosition: a,
        starPositon: s,
        form: f,
      } = E,
      u = re(E, [
        'initialValues',
        'children',
        'onFinish',
        'onFinishFailed',
        'labelPosition',
        'starPositon',
        'form',
      ])
    let m = {}
    Object.keys(f).length !== 0 ? (m = f) : ([m] = de(m)), (m.starPositon = s)
    const {
      setCallback: g,
      submit: h,
      resetFields: v,
      innerSetInitialValues: q,
    } = m
    return (
      q(e),
      g({ onFinish: r, onFinishFailed: i }),
      P.createElement(
        'form',
        {
          className: `ashe-form ${He[a]} ${n.className}`,
          style: n.style,
          onSubmit: (d) => {
            d.preventDefault(), h()
          },
          onReset: () => {
            v()
          },
        },
        P.createElement(le.Provider, { value: m }, t)
      )
    )
  }
$.defaultProps = ce
$.displayName = 'AsheForm'
$.Item = Ke
$.useForm = de
const Qe = { username: 'aaa', age: 'bbbb' },
  it = () => {
    const [n] = $.useForm()
    return (
      console.log(n),
      w.exports.createElement(
        w.exports.Fragment,
        null,
        w.exports.createElement(
          'div',
          { className: 'demo' },
          w.exports.createElement('h2', null, '基础用法'),
          w.exports.createElement(
            $,
            { onFinish: (e) => console.log(e), initialValues: Qe, form: n },
            w.exports.createElement(
              $.Item,
              { label: '姓名', name: 'username' },
              w.exports.createElement(ne, {
                className: 'nut-input-text',
                placeholder: '请输入姓名',
                type: 'text',
              })
            ),
            w.exports.createElement(
              $.Item,
              { label: '姓名', name: 'age' },
              w.exports.createElement(ne, {
                className: 'nut-input-text',
                placeholder: '请输入年龄',
                type: 'text',
              })
            ),
            w.exports.createElement('input', { type: 'submit', value: '提交' }),
            w.exports.createElement('input', {
              type: 'reset',
              value: '重置表单数据',
            }),
            w.exports.createElement(
              'div',
              {
                onClick: () => {
                  n.resetFields()
                },
              },
              '清空'
            )
          )
        )
      )
    )
  }
export { it as default }
