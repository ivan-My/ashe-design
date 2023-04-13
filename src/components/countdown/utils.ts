export const getTimeStamp = (timeStr?: string | number) => {
  if (!timeStr) return Date.now()
  let t = timeStr
  t = t > 0 ? +t : t.toString().replace(/-/g, '/')
  return new Date(t).getTime()
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// 将倒计时剩余时间格式化   参数： t  时间戳  type custom 自定义类型
export const formatRemainTime = (t: number, type?: string, format: any) => {
  const ts = t
  const rest = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
  }

  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  if (ts > 0) {
    rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0
    rest.h = Math.floor((ts % DAY) / HOUR)
    rest.m = Math.floor((ts % HOUR) / MINUTE)
    rest.s = Math.floor((ts % MINUTE) / SECOND)
    rest.ms = Math.floor(ts % SECOND)
  }
  return type === 'custom' ? rest : parseFormat({ ...rest }, format)
}

const parseFormat = (
  time: {
    d: number
    h: number
    m: number
    s: number
    ms: number
  },
  format: any
) => {
  const { d } = time
  let { h, m, s, ms } = time
  let formatCache = format

  if (formatCache.includes('DD')) {
    formatCache = formatCache.replace('DD', padZero(d))
  } else {
    h += Number(d) * 24
  }

  if (formatCache.includes('HH')) {
    formatCache = formatCache.replace('HH', padZero(h))
  } else {
    m += Number(h) * 60
  }

  if (formatCache.includes('mm')) {
    formatCache = formatCache.replace('mm', padZero(m))
  } else {
    s += Number(m) * 60
  }

  if (formatCache.includes('ss')) {
    formatCache = formatCache.replace('ss', padZero(s))
  } else {
    ms += Number(s) * 1000
  }

  if (formatCache.includes('S')) {
    const msC = padZero(ms, 3).toString()

    if (formatCache.includes('SSS')) {
      formatCache = formatCache.replace('SSS', msC)
    } else if (formatCache.includes('SS')) {
      formatCache = formatCache.replace('SS', msC.slice(0, 2))
    } else if (formatCache.includes('S')) {
      formatCache = formatCache.replace('SS', msC.slice(0, 1))
    }
  }
  return formatCache
}

const padZero = (num: number | string, length = 2) => {
  num += ''
  while ((num as string).length < length) {
    num = `0${num}`
  }
  return num.toString()
}
