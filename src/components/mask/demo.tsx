import React, { useState } from 'react'
import { Mask } from './mask'
import Button from '../button'

const MaskMemo = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button />
      <div onClick={() => setVisible(true)}>点击</div>
      <Mask />
    </div>
  )
}

export default MaskMemo
