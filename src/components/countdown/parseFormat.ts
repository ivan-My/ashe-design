export function padZero(num: number | string, targetLength = 2): string {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}
export type CurrentTime = {
  /** 剩余总时间,单位毫秒 */
  total: number
  /** 剩余天数	 */
  days: number
  /** 剩余小时	 */
  hours: number
  /** 剩余分钟	 */
  minutes: number
  /** 剩余秒数	 */
  seconds: number
  /** 剩余毫秒	 */
  milliseconds: number
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export function parseTime(time: number): CurrentTime {
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

export function parseFormat(format: string, currentTime: CurrentTime) {}
