import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import { BasicComponent } from '@/utils/typeing'
import { BaseFormField } from './types'
import { FormItemContext } from './formitemcontext'

const pxCheck = (value: string | number): string => {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent'
export interface FormItemProps extends BasicComponent, BaseFormField {
  labelWidth: string | number
  errorMessageAlign: TextAlign
  showErrorLine: boolean
  showErrorMessage: boolean
  initialValue: string
}
const defaultProps = {
  name: '',
  label: '',
  className: '',
  rules: [{ required: false, message: '' }],
  disabled: false,
  labelWidth: 90,
  errorMessageAlign: 'left',
  showErrorLine: true,
  showErrorMessage: true,
  initialValue: '',
} as FormItemProps

export type FieldProps = FormItemProps & BaseFormField

export const FormItem: FunctionComponent<Partial<FieldProps>> = (props) => {
  const {
    label,
    name,
    children,
    initialValue,
    labelWidth,
    errorMessageAlign,
    rules = [{ required: false, message: '' }],
    className = '',
  } = {
    ...defaultProps,
    ...props,
  }
  let cancelRegister: any
  let isInitialValue = false
  const context = useContext(FormItemContext)
  const [, forceUpdate] = useState({})

  const onStoreChange = useMemo(() => {
    /* 管理层改变 => 通知表单项 */
    const onStoreChange = {
      changeValue() {
        forceUpdate({})
      },
    }
    return onStoreChange
  }, [context])

  const getControlled = (children: React.ReactElement) => {
    const { getFieldValue, setFieldsValue } = context
    const type = (children as any).type
    const defaultvalue = initialValue || (children as any).props?.defaultValue
    if (defaultvalue && !isInitialValue) {
      setFieldsValue({ [name]: defaultvalue })
      isInitialValue = true
    }
    return {
      defaultValue: getFieldValue(name),
      onChange: (
        event: React.ChangeEvent<HTMLInputElement> | number | string | string[]
      ) => {
        const originOnChange = (children as any).props.onChange
        if (originOnChange) {
          originOnChange(event)
        }
        let newValue = event
        switch (type) {
          case 'checkbox':
            newValue = (event as React.ChangeEvent<HTMLInputElement>).target
              .value
            break
          default:
        }

        setFieldsValue({ [name]: newValue })
      },
    }
  }
  const renderLayout = (childNode: React.ReactNode) => {
    const item =
      context.errList.length > 0 &&
      context.errList?.filter((item: any) => {
        return item.field === name
      })
    const { starPositon } = context
    const renderStar = rules.length > 0 && rules[0].required && (
      <i className="required" />
    )
    const renderLabel =
      starPositon === 'Right' ? (
        <>
          {label}
          {renderStar}
        </>
      ) : (
        <>
          {renderStar}
          {label}
        </>
      )
    return (
      <div className={`ashe-form-item ${className}`}>
        {label ? (
          <div
            className="ashe-cell__title ashe-form-item__label"
            style={{
              width: pxCheck(labelWidth),
            }}
          >
            {renderLabel}
          </div>
        ) : null}
        <div className="ashe-cell__value ashe-form-item__body">
          <div className="ashe-form-item__body__slots">{childNode}</div>
          {item.length > 0 && (
            <div
              className="ashe-form-item__body__tips"
              style={{ textAlign: errorMessageAlign }}
            >
              {item[0].message}
            </div>
          )}
        </div>
      </div>
    )
  }

  const c = Array.isArray(children) ? children[0] : children
  let restCNode = c as React.ReactElement
  if (initialValue) {
    restCNode = React.cloneElement(c as React.ReactElement, {
      defaultValue: initialValue,
    })
  }
  const returnChildNode = React.cloneElement(
    restCNode,
    getControlled(restCNode as React.ReactElement)
  )

  useEffect(() => {
    // 注册组件实例到FormStore
    cancelRegister = context.registerField({
      onStoreChange,
      props: { ...props },
    })
    return () => {
      cancelRegister && cancelRegister()
    }
  }, [onStoreChange])

  return renderLayout(returnChildNode)
}

export default FormItem
