import React from 'react'
import classNames from 'classnames'
import { render } from '@/utils/render'
import { ToastProps } from './interface'
import bem from '@/utils/bem'
import Loading from '@/components/loading'

export default class Notification extends React.PureComponent<ToastProps> {
  static newInstance: (properties: ToastProps, callback: any) => void

  private closeTimer: number | undefined

  constructor(props: ToastProps) {
    super(props)
    this.close = this.close.bind(this)
    this.startCloseTimer = this.startCloseTimer.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
    this.close = this.close.bind(this)
    this.clickCover = this.clickCover.bind(this)
  }

  close() {
    this.clearCloseTimer()
    this.props.onClose()
  }

  startCloseTimer() {
    const { duration } = this.props
    if (duration) {
      this.closeTimer = window.setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = -1
    }
  }

  clickCover() {
    const { closeOnClickOverlay } = this.props
    if (closeOnClickOverlay) {
      this.close()
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  render() {
    const {
      id,
      style,
      title,
      msg,
      bottom,
      center,
      bgColor,
      coverColor,
      textAlignCenter,
      cover,
      type,
      children,
    } = this.props
    const toastBem = bem('toast')

    const classes = classNames({
      'ashe-toast-center': center,
      'ashe-toast-cover': cover,
      'ashe-toast-loading': type === 'loading',
    })

    return (
      <>
        {type === 'loading' ? (
          <div className="loading">
            <Loading show />
          </div>
        ) : (
          <div
            className={`${toastBem()} ${classes}`}
            id={`toast-${id}`}
            style={{
              bottom: center ? 'auto' : `${bottom}`,
              backgroundColor: cover ? coverColor : '',
            }}
            onClick={() => {
              this.clickCover()
            }}
          >
            <div
              className={toastBem('inner')}
              style={{
                textAlign: textAlignCenter ? 'center' : 'left',
                backgroundColor: bgColor,
                ...style,
              }}
            >
              {title ? <div className="ashe-toast-title">{title}</div> : null}
              <span className={toastBem('text')}>{msg}</span>
            </div>
          </div>
        )}
      </>
    )
  }
}
export const newInstance = (properties: any, callback: any) => {
  const element = document.createElement('div')
  if (properties.id) {
    element.setAttribute('id', `${properties.id}`)
  }
  document.body.appendChild(element)
  let called = false
  let root: any
  function refs(instance: any) {
    if (called) {
      return
    }
    called = true
    callback({
      component: instance,
      destroy() {
        root.unmount()
        element && element.parentNode && element.parentNode.removeChild(element)
      },
    })
  }
  root = render(<Notification {...properties} ref={refs} />, element)
}
