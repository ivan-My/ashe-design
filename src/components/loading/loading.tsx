import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { BasicComponent } from '@/utils/typeing'

export interface LoadingProps extends BasicComponent {
  show: boolean
  type: 'flash' | 'flip' | 'change' | 'rotate' | 'circle'
  size: 'mini' | 'medium' | 'large'
  color: string
  zIndex: number
  custom: boolean
  fullScreen: boolean
  fullScreenBgColor: string
  bgColor: string
  opacity: string
}

const defaultProps = {
  show: false,
  type: 'rotate',
  size: 'medium',
  color: '',
  zIndex: 999,
  custom: false,
  fullScreen: false,
  bgColor: '',
  opacity: '1',
  fullScreenBgColor: ' #fff',
} as LoadingProps

export const Loading: FunctionComponent<
  Partial<LoadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    show,
    type,
    size,
    color,
    bgColor,
    opacity,
    zIndex,
    fullScreen,
    fullScreenBgColor,
    custom,
    children,
    className,
  } = {
    ...defaultProps,
    ...props,
  }

  const flashChangeBound1Element = (
    <div
      style={{ background: color }}
      className={`${type}-bounce1 spinner-${type}-${size}`}
    />
  )
  const flashChangeBound2Element = (
    <div
      style={{ background: color }}
      className={`${type}-bounce2 spinner-${type}-${size}`}
    />
  )
  const changeBound3Element = (
    <div
      style={{ backgroundColor: color }}
      className={`${type}-bounce3 spinner-${type}-${size} `}
    />
  )
  const circleELement = (
    <div className={`spinner-circle spinner-circle-${size}`}>
      <div className="spinner-container container1">
        <div
          className={`circle1 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle2 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle3 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle4 container-view ${type}-${size}`}
          style={{ background: color }}
        />
      </div>
      <div className="spinner-container container2">
        <div
          className={`circle1 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle2 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle3 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle4 container-view ${type}-${size}`}
          style={{ background: color }}
        />
      </div>
      <div className="spinner-container container3">
        <div
          className={`circle1 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle2 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle3 container-view ${type}-${size}`}
          style={{ background: color }}
        />
        <div
          className={`circle4 container-view ${type}-${size}`}
          style={{ background: color }}
        />
      </div>
    </div>
  )

  const rotateElement = (
    <div className={`rotate rotate-${size}`} style={{ borderColor: color }} />
  )
  const cn = bem('loading')
  const cls = classNames(
    cn(),
    className,
    fullScreen ? 'ashe-loading-fullScreen' : ''
  )
  return (
    <div
      className={cls}
      style={{
        background: fullScreen ? fullScreenBgColor : '',
      }}
    >
      {show && (
        <div
          className={`${type}-spinner ${
            type === 'change' ? '' : `spinner-${type}-${size}`
          } `}
        >
          {(type === 'flash' || type === 'change') && flashChangeBound1Element}
          {(type === 'flash' || type === 'change') && flashChangeBound2Element}
          {type === 'change' && changeBound3Element}
          {type === 'circle' && circleELement}
          {type === 'rotate' && rotateElement}
        </div>
      )}
      {children}
    </div>
  )
}

Loading.defaultProps = defaultProps
Loading.displayName = 'AsheLoading'
