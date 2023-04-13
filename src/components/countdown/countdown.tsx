import React, {
  useEffect,
  useRef,
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import bem from '@/utils/bem'
import { CountDownProps } from './PropsType'
import { formatRemainTime, getTimeStamp } from './utils'

const defaultProps = {
  paused: false,
  startTime: Date.now(),
  endTime: Date.now(),
  millisecond: false,
  format: 'HH:mm:ss',
  autoStart: true,
  time: 0,
} as CountDownProps

const b = bem('countdown')

const InternalCountDown: ForwardRefRenderFunction<
  unknown,
  Partial<CountDownProps>
> = (props, ref) => {
  const {
    paused,
    startTime,
    endTime,
    millisecond,
    format,
    autoStart,
    time,
    className,
    style,
    onFinish,
    onPaused,
    onRestart,
    onChange,
    children,
    ...rest
  } = { ...defaultProps, ...props }

  const [restTimeStamp, setRestTime] = useState(0)
  const stateRef = useRef({
    pauseTime: 0,
    curr: 0,
    isPaused: paused,
    isIninted: false,
    timer: 0,
    restTime: 0, // 倒计时剩余时间时间
    counting: !paused && autoStart, // 是否处于倒计时中
    handleEndTime: Date.now(), // 最终截止时间
    diffTime: 0, // 设置了 startTime 时，与 date.now() 的差异
  })

  const initTime = () => {
    stateRef.current.handleEndTime = endTime
    stateRef.current.diffTime = Date.now() - getTimeStamp(startTime)
    if (!stateRef.current.counting) stateRef.current.counting = true
    tick()
  }

  const tick = () => {
    stateRef.current.timer = requestAnimationFrame(() => {
      if (stateRef.current.counting) {
        const currentTime = Date.now() - stateRef.current.diffTime
        const remainTime = Math.max(
          stateRef.current.handleEndTime - currentTime,
          0
        )
        stateRef.current.restTime = remainTime
        setRestTime(remainTime)
        // 倒计时结束
        if (!remainTime) {
          stateRef.current.counting = false
          pause()
          onFinish && onFinish()
        }
        if (remainTime > 0) {
          tick()
        }
      }
    })
  }

  // 暂定
  const pause = () => {
    cancelAnimationFrame(stateRef.current.timer)
    stateRef.current.counting = false
    onPaused && onPaused(stateRef.current.restTime)
  }
  useImperativeHandle(ref, () => ({
    start: () => {
      if (!stateRef.current.counting && !autoStart) {
        stateRef.current.counting = true
        stateRef.current.handleEndTime =
          Date.now() + Number(stateRef.current.restTime)
        tick()
        onRestart && onRestart(stateRef.current.restTime)
      }
    },
    pause: () => {
      cancelAnimationFrame(stateRef.current.timer)
      stateRef.current.counting = false
      onPaused && onPaused(stateRef.current.restTime)
    },
    reset: () => {
      if (!autoStart) {
        pause()
        stateRef.current.restTime = time
        setRestTime(time)
      }
    },
  }))

  // 监听值变化
  useEffect(() => {
    const tranTime = formatRemainTime(
      stateRef.current.restTime,
      'custom',
      format
    )
    onChange && onChange(tranTime)
  }, [restTimeStamp])

  // 监听开始结束时间变更
  useEffect(() => {
    if (stateRef.current.isIninted) {
      initTime()
    }
  }, [endTime, startTime])

  // 初始化
  useEffect(() => {
    if (autoStart) {
      initTime()
    } else {
      stateRef.current.restTime = time
      setRestTime(time)
      if (!stateRef.current.isIninted) {
        stateRef.current.isIninted = true
      }
    }
    return componentWillUnmount
  }, [])

  const componentWillUnmount = () => {
    clearInterval(stateRef.current.timer)
  }
  const renderTime = (() => {
    return formatRemainTime(stateRef.current.restTime, '', format)
  })()

  return (
    <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
      {children || (
        <div
          className={b('block')}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `${renderTime}`,
          }}
        />
      )}
    </div>
  )
}
export const CountDown = React.forwardRef<unknown, Partial<CountDownProps>>(
  InternalCountDown
)

CountDown.defaultProps = defaultProps
CountDown.displayName = 'AsheCountDown'
