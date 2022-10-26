import React, { FunctionComponent, useState, useEffect } from 'react'


export interface MaskProps {
  opacity?: string
  visible: boolean
}

export const defaultMaskProps = {
  opacity: '0.5',
  visible: false
} as MaskProps


export const Mask: FunctionComponent<Partial<MaskProps>> = (props) => {
  const { opacity, visible } = {
    ...defaultMaskProps,
    ...props}

  // console.log(props);
  const [show, setShow] = useState(visible)

  useEffect(() => {
    visible && setShow(visible)
  }, [visible])

  return (<>
    {
      show && <div
        className='mask'
        style={{
          opacity
        }}
        onClick={() => {
          //console.log(show);

          setShow(!show)
        }}
      >
        maks
      </div>
    }
  </>)

}
