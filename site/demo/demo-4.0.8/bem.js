var x = { exports: {} },
  f = {}
function y(e) {
  function s(t, o, r, n) {
    var v = o ? p + t + e.e + o : p + t,
      a = v
    if (r) {
      var _ = ' ' + a + e.m
      for (var i in r)
        if (r.hasOwnProperty(i)) {
          var u = r[i]
          u === !0 ? (a += _ + i) : u && (a += _ + i + O + u)
        }
    }
    if (n !== void 0)
      for (var c = 0, d = n.length; c < d; c++) {
        var l = n[c]
        if (l && typeof l.valueOf() == 'string')
          for (var g = l.valueOf().split(' '), m = 0; m < g.length; m++) {
            var h = g[m]
            h !== v && (a += ' ' + h)
          }
      }
    return a
  }
  var p = e.n || '',
    O = e.v || e.m
  return function (t, o) {
    return function (r, n, v) {
      return typeof r == 'string'
        ? Array.isArray(n)
          ? s(t, r, void 0, n)
          : s(t, r, n, v)
        : s(t, o, r, n)
    }
  }
}
Object.defineProperty(f, '__esModule', { value: !0 })
var w = y({ e: '-', m: '_' })
;(f.cn = w), (f.withNaming = y)
;(function (e) {
  e.exports = f
})(x)
const A = x.exports.withNaming({ n: 'ashe-', e: '__', m: '--', v: '-' })
export { A as c }
