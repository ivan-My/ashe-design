import React, { FunctionComponent } from 'react'

import { useForm } from '@/components/form/useForm'
import { FormItemContext } from '@/components/form/formitemcontext'
import FormItem from '@/components/form/formitem'
import { BaseForm } from '@/components/form/types'
import { BasicComponent } from '@/utils/typeing'

type FormProps = BaseForm & BasicComponent //

const defaultProps = {
  className: '',
  style: undefined,
  form: {},
  labelPosition: 'Right',
  formGroupTitle: '',
  onFinish: (obj) => {},
  onFinishFailed: (value) => {},
  onRest: () => {},
  starPositon: 'Left',
} as FormProps

const PositionInfo: any = {
  Top: 'form-layout-top',
  Left: 'form-layout-left',
  Right: 'form-layout-right',
}

export const Form: FunctionComponent<
  Partial<FormProps> & React.HTMLAttributes<HTMLFormElement>
> & { Item: typeof FormItem } & { useForm: typeof useForm } = (props) => {
  const {
    children,
    onFinish,
    onFinishFailed,
    labelPosition,
    starPositon,
    form,
    ...rest
  } = { ...defaultProps, ...props }

  let formInstance: any = {}
  if (Object.keys(form).length !== 0) {
    formInstance = form
  } else {
    /* eslint-disable react-hooks/rules-of-hooks */
    ;[formInstance] = useForm()
  }

  formInstance.starPositon = starPositon
  const { setCallback, submit, resetFields } = formInstance
  setCallback({
    onFinish,
    onFinishFailed,
  })

  return (
    <form
      className={`ashe-form ${PositionInfo[labelPosition]} ${props.className}`}
      style={props.style}
      onSubmit={(e) => {
        e.preventDefault()
        submit()
      }}
      onReset={() => {
        resetFields()
      }}
    >
      <FormItemContext.Provider value={formInstance}>
        {children}
      </FormItemContext.Provider>
    </form>
  )
}

Form.defaultProps = defaultProps
Form.displayName = 'AsheForm'
Form.Item = FormItem
Form.useForm = useForm
