import { CurrentTime } from '@/components/countdown/types'

const padZero = (num: number | string, length = 2) => {
  num += ''
  while ((num as string).length < length) {
    num = `0${num}`
  }
  return num.toString()
}

export const getTimeStamp = (timeStr?: string | number) => {
  if (!timeStr) return Date.now()
  let t = timeStr
  t = t > 0 ? +t : t.toString().replace(/-/g, '/')
  return new Date(t).getTime()
}

export function parseTime(time: number): CurrentTime {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR

  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}

export function parseFormat(format: string, currentTime: CurrentTime): string {
  const { days } = currentTime
  let { hours, minutes, seconds, milliseconds } = currentTime

  if (format.includes('DD')) {
    format = format.replace('DD', padZero(days))
  } else {
    hours += days * 24
  }

  if (format.includes('HH')) {
    format = format.replace('HH', padZero(hours))
  } else {
    minutes += hours * 60
  }

  if (format.includes('mm')) {
    format = format.replace('mm', padZero(minutes))
  } else {
    seconds += minutes * 60
  }

  if (format.includes('ss')) {
    format = format.replace('ss', padZero(seconds))
  } else {
    milliseconds += seconds * 1000
  }

  if (format.includes('S')) {
    const ms = padZero(milliseconds, 3)

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms)
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2))
    } else {
      format = format.replace('S', ms.charAt(0))
    }
  }

  return format
}
