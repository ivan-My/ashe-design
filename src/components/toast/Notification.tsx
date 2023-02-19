import React from 'react'
import classNames from 'classnames'
import { render } from '@/utils/render'
import { ToastProps } from '@/components/toast/toast'
import bem from '@/utils/bem'
import Loading from '@/components/loading'

const RATIO = window.devicePixelRatio
const WIDTH = RATIO * 14
const HEIGHT = RATIO * 14

function Loadings() {
  return (
    <div className="ashe-toast-loading">
      <div className="ashe-toast-loadingText">
        <svg
          className="ashe-toast-loadingIcon"
          viewBox="0 -2 59.75 60.25"
          width="100%"
          height="100%"
        >
          <path
            fill="#ccc"
            d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"
          />
          <path
            fill="none"
            stroke="#108ee9"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"
          />
        </svg>
        <div className="ashe-toast-loadingInfo">loading...</div>
      </div>
    </div>
  )
}
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
              ...style,
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
