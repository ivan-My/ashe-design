import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import { BasicComponent } from '@/utils/typeing'
import { FormItemContext } from './formitemcontext'
import { FromItemProps } from '@/components/form/interface'

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

export interface FormItemProps extends BasicComponent, FromItemProps {
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
  shouldUpdate: false,
} as FormItemProps

export type FieldProps = FormItemProps & FromItemProps

export const FormItem: FunctionComponent<Partial<FieldProps>> = (props) => {
  const {
    label,
    name,
    children,
    initialValue,
    labelWidth,
    errorMessageAlign,
    shouldUpdate,
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
    const onStoreChange = () => forceUpdate({})
    return onStoreChange
  }, [context])

  const onValueChange = (preStore: any, curStore: any) => {
    if (typeof shouldUpdate === 'function') {
      shouldUpdate(preStore, curStore) && forceUpdate({})
    }
    forceUpdate({})
  }

  const getControlled = (children: React.ReactElement) => {
    const { getFieldValue, setFieldsValue } = context
    const type = children.type
    const defaultValue = initialValue || children.props?.defaultValue
    if (defaultValue && !isInitialValue) {
      setFieldsValue({ [name]: defaultValue })
      isInitialValue = true
    }
    return {
      defaultValue: getFieldValue(name),
      onChange: (
        event:
          | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          | number
          | string
          | string[]
      ) => {
        const originOnChange = children.props.onChange
        originOnChange && originOnChange(event)
        let newValue = event
        switch (type) {
          case 'checkbox':
            newValue = (event as React.ChangeEvent<HTMLInputElement>).target
              .value
            break
          case 'select':
            newValue = (event as React.ChangeEvent<HTMLSelectElement>)
              .currentTarget.value
            break
          default:
        }
        setFieldsValue({ [name]: newValue })
      },
    }
  }

  useEffect(() => {
    cancelRegister = context.registerField({
      onStoreChange,
      onValueChange,
      ...props,
    })
    return () => {
      cancelRegister && cancelRegister()
    }
  }, [onStoreChange])

  const renderLayout = (childNode: React.ReactElement) => {
    const item =
      context.errList.length > 0 &&
      context.errList?.filter((item: any) => {
        return item.field === name
      })
    const { starPosition } = context
    const renderStar = rules.length > 0 && rules[0].required && (
      <i className="required" />
    )

    const renderLabel =
      starPosition === 'right' ? (
        <>
          <span> {label}</span>
          {renderStar}
        </>
      ) : (
        <>
          {renderStar}
          <span> {label}</span>
        </>
      )
    return (
      <div className={`ashe-form-item ${className}`}>
        {label ? (
          <div
            className="ashe-form-item__label"
            style={{ width: pxCheck(labelWidth) }}
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

  let child = Array.isArray(children) ? children[0] : children
  if (typeof child === 'function') {
    child = child(context.getFieldsValue())
  }

  if (initialValue) {
    child = React.cloneElement(child as React.ReactElement, {
      defaultValue: initialValue,
    })
  }
  const returnChildNode = React.cloneElement(
    child,
    getControlled(child as React.ReactElement)
  )
  return renderLayout(returnChildNode)
}

export default FormItem
