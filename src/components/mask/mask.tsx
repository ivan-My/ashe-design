import React, { FunctionComponent, useState, useEffect } from 'react'

export interface MaskProps {
  opacity?: string
  visible: boolean
}

export const defaultMaskProps = {
  opacity: '0.5',
  visible: true,
} as MaskProps

export const Mask: FunctionComponent<Partial<MaskProps>> = (props) => {
  const { opacity, visible } = {
    ...defaultMaskProps,
    ...props,
  }

  // console.log(props);
  const [show, setShow] = useState(visible)

  useEffect(() => {
    visible && setShow(visible)
  }, [visible])

  return (
    <>
      {show && (
        <div
          className="ashe-mask"
          style={
            {
              //    opacity,
            }
          }
          onClick={() => {
            setShow(!show)
          }}
        >
          maks
        </div>
      )}
    </>
  )
}
