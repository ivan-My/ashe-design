import React, { FunctionComponent } from 'react'

export interface ToastProps {}
const defaultProps = {} as ToastProps
export const Toast: FunctionComponent<
  Partial<ToastProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="ashe-toast">Toast</div>
}

Toast.defaultProps = defaultProps
Toast.displayName = 'AsheToast'
