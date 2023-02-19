import React, { FunctionComponent } from 'react'
import className from 'classnames'
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
    custom,
    children,
  } = {
    ...defaultProps,
    ...props,
  }
  const cn = bem('loading')
  const cls = className(cn())

  const distance = '64'
  return (
    <div className={cls}>
      {/* 全屏模式 */}
      {/* {show && fullScreen && ( */}
      {/*  <div */}
      {/*    className={`container-loading l-container-class ${ */}
      {/*      fullScreen ? 'contents' : '' */}
      {/*    }`} */}
      {/*  > */}
      {/*    {children} */}
      {/*    {show && ( */}
      {/*      <div */}
      {/*        className={`l-class ${type}-spinner ${type} ==='change'||custom?'':'spinner-${type}-${size}`} */}
      {/*        style={{ marginBottom: `${distance}px` }} */}
      {/*      /> */}
      {/*    )} */}
      {/*  </div> */}
      {/* )} */}
      {show && !fullScreen && (
        <div className="l-container-class" style={{ position: 'relative' }}>
          {show && (
            <div
              className="inner-loading-container"
              style={{
                background: bgColor,
                opacity,
                zIndex,
              }}
            />
          )}
          {show && (
            <div
              className="l-class loading-icon-container"
              style={{ zIndex: zIndex + 1 }}
            >
              <div
                className={`${type}-spinner ${
                  type === 'change' ? '' : `spinner-${type}-${size}`
                } `}
              >
                {(type === 'flash' || type === 'change') && (
                  <div
                    style={{ background: color }}
                    className={`${type}-bounce1 spinner-${type}-${size}`}
                  />
                )}

                {(type === 'flash' || type === 'change') && (
                  <div
                    style={{ background: color }}
                    className={`${type}-bounce2 spinner-${type}-${size}`}
                  />
                )}
                {type === 'change' && (
                  <div
                    style={{ backgroundColor: color }}
                    className={`${type}-bounce3 spinner-${type}-${size} `}
                  />
                )}

                {type === 'circle' && (
                  // <view wx:if="{{ type === 'circle'}}" className="spinner-circle {{'spinner-circle-' + size}}">
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
                )}
                {type === 'rotate' && (
                  <div
                    className={`rotate rotate-${size}`}
                    style={{ borderColor: color }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

Loading.defaultProps = defaultProps
Loading.displayName = 'AsheLoading'
