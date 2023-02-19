import React, { FunctionComponent } from 'react'

export interface DialogProps {}
const defaultProps = {} as DialogProps
const DialogWapper: FunctionComponent<
  Partial<DialogProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="ashe-dialog">Dialog</div>
}

export const Dialog = {
  show() {},
  hide() {},
}
DialogWapper.defaultProps = defaultProps
DialogWapper.displayName = 'AsheDialog'
