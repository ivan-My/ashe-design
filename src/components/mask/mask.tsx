import React, { FunctionComponent, useEffect, useRef } from 'react'
import className from 'classnames'
import { MaskProps } from './interface'
import { withNativeProps } from '@/utils/native-props'

export const defaultMaskProps = {
  opacity: '0.5',
  duration: 0.3,
  visible: false,
  disableBodyScroll: true,
  closeOnOverlayClick: true,
  onClick: (event: any) => {},
  afterClose: () => {},
  afterShow: () => {},
} as MaskProps

const classPrefix = 'ashe-mask'
export const Mask: FunctionComponent<Partial<MaskProps>> = (props) => {
  const {
    visible,
    duration,
    disableBodyScroll,
    closeOnOverlayClick,
    onClick,
    afterShow,
    afterClose,
    children,
  } = {
    ...defaultMaskProps,
    ...props,
  }

  const renderRef = useRef(true)
  const intervalCloseRef = useRef(0)
  const intervalShowRef = useRef(0)

  const cls = className(
    visible && `${classPrefix}-fade-enter-active`,
    !renderRef.current && !visible && `${classPrefix}-fade-leave-active`,
    !visible && `${classPrefix}--hidden`,
    classPrefix
  )

  const lock = () => {
    if (disableBodyScroll && visible) {
      document.body.classList.add('ashe-overflow-hidden')
    } else {
      document.body.classList.remove('ashe-overflow-hidden')
    }
  }

  useEffect(() => {
    if (visible) {
      intervalShowRef.current = window.setTimeout(() => {
        afterShow && afterShow()
      }, duration * 1000 * 0.8)
    }
    lock()
  }, [visible])

  useEffect(() => {
    return () => {
      clearTimeout(intervalShowRef.current)
      clearTimeout(intervalCloseRef.current)
      document.body.classList.remove('ashe-overflow-hidden')
    }
  }, [])
  const handleClick = (e: any) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
      renderRef.current = false
      intervalCloseRef.current = window.setTimeout(() => {
        afterClose && afterClose()
      }, duration * 1000 * 0.8)
    }
  }

  const styles = {
    animationDuration: `${duration}s`,
  }
  return withNativeProps(
    props,
    <div className={cls} style={styles} onClick={handleClick}>
      {children}
    </div>
  )
}
