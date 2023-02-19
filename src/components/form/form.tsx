import React, { FunctionComponent } from 'react'
import { FormProps } from './types'

const defaultProps = {
  className: '',
  style: undefined,
  form: {},
  labelPosition: 'Right',
  formGroupTitle: '',
  onFinish: () => {},
  onFinishFailed: () => {},
  starPositon: 'Left',
} as unknown as FormProps
export const Form: FunctionComponent<
  Partial<FormProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="ashe-form">Form</div>
}

Form.defaultProps = defaultProps
Form.displayName = 'AsheForm'
