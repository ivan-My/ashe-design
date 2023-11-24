const r = Object.prototype.toString
function h(t) {
    return r.call(t) === '[object Array]'
}
function l(t) {
    return r.call(t) === '[object Object]'
}
function a(t) {
    return r.call(t) === '[object String]'
}
function g(t, n) {
    return n.indexOf(t) !== -1
}
function d(t) {
    return t == null || t === ''
}
function o(t) {
    return (
        Object.prototype.toString.call(t).toLowerCase() === '[object function]'
    )
}
function y(t) {
    return Object.prototype.toString.call(t).toLowerCase() === '[object null]'
}
function p(t) {
    return (
        Object.prototype.toString.call(t).toLowerCase() === '[object undefined]'
    )
}
function P(t) {
    return h(t) && !(t != null && t.length)
}
function u(t, n) {
    if (
        typeof t != 'object' ||
        typeof n != 'object' ||
        t === null ||
        n === null
    )
        return t === n
    if (o(t) && o(n)) return t === n || t.toString() === n.toString()
    if (Object.keys(t).length !== Object.keys(n).length) return !1
    for (const e in t) if (!u(t[e], n[e])) return !1
    return !0
}
function O() {
    try {
        const t = navigator.userAgent,
            n = t.indexOf('Android') > -1 || t.indexOf('Linux') > -1,
            e = t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        return !n && !e ? 'pc' : n ? 'android' : 'ios'
    } catch {
        return ''
    }
}
const c = {
    'iPhoneXR iPhone11 iPhoneXsMax iPhone11ProMax': {
        width: 414,
        height: 896,
    },
    iPhone11Pro: {
        width: 375,
        height: 812,
    },
    iPhone12mini: {
        width: 360,
        height: 780,
    },
    'iPhone12 iPhone12Pro': {
        width: 390,
        height: 844,
    },
    iPhone12ProMax: {
        width: 428,
        height: 926,
    },
}
function s(t, n) {
    return (
        Object.keys(c).filter((e) => {
            const i = c[e]
            return (
                (i.height === n && i.width === t) ||
                (i.height === t && i.width === n)
            )
        }).length > 0
    )
}
function w() {
    try {
        const t = navigator.userAgent,
            { width: n, height: e } = window.screen
        return t.indexOf('iPhone') > -1 && s(n, e)
    } catch {
        return !1
    }
}
export {
    s as checkIPhoneX,
    O as getSystem,
    c as iPhoneScreenMap,
    h as isArray,
    u as isDeepEqual,
    P as isEmptyArray,
    d as isEmptyValue,
    o as isFunction,
    w as isIPhoneX,
    y as isNull,
    l as isObject,
    g as isOneOf,
    a as isString,
    p as isUndefined,
}
