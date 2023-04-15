import { BasicComponent } from '@/utils/typeing'

export interface CountDownProps extends BasicComponent {
  /**
   * 是否暂停
   * @default false
   */
  paused: boolean

  startTime: number

  /** 结束时间 */
  endTime: number

  /**
   * 	时间格式
   * @default HH:mm:ss
   */
  format: string

  /**
   * 是否开启毫秒级渲染
   * @default false
   */
  millisecond: boolean

  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart: boolean

  time: number
  /**
   * 倒计时结束
   */
  onFinish: () => void

  onPaused: (restTime: number) => void

  onRestart: (restTime: number) => void
  /**
   * 倒计时变化时触发
   */
  onChange: (restTime: any) => void
}
