import React, { FunctionComponent } from 'react'
import { useForm } from '@/components/form/useForm'
import { FormItemContext } from '@/components/form/formitemcontext'
import FormItem from '@/components/form/formitem'
import { FormProps } from '@/components/form/interface'

const defaultProps = {
    initialValues: {},
    form: {},
    labelPosition: 'Right',
    formGroupTitle: '',
    onFinish: (obj) => {},
    onFinishFailed: (value) => {},
    onRest: () => {},
} as FormProps

const PositionInfo: Record<string, string> = {
    Top: 'form-layout-top',
    Left: 'form-layout-left',
    Right: 'form-layout-right',
}

export const Form: FunctionComponent<
    Partial<FormProps> & React.HTMLAttributes<HTMLFormElement>
> & { Item: typeof FormItem } & { useForm: typeof useForm } = (props) => {
    const {
        initialValues,
        children,
        onFinish,
        onFinishFailed,
        onValuesChange,
        labelPosition,
        form,
    } = { ...defaultProps, ...props }
    let formInstance: any
    if (Object.keys(form).length !== 0) {
        formInstance = form
    } else {
        /* eslint-disable react-hooks/rules-of-hooks */
        ;[formInstance] = useForm(formInstance)
    }
    const { setCallback, submit, resetFields, setFieldValue } = formInstance
    setFieldValue(initialValues)
    setCallback({
        onFinish,
        onFinishFailed,
        onValuesChange,
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
