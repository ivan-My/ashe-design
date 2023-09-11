import React, {
    FunctionComponent,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import { FormItemContext } from './formitemcontext'
import { FormItemProps } from '@/components/form/interface'
import { pxCheck } from '@/utils/px-check'

const defaultProps = {
    name: '',
    label: '',
    className: '',
    rules: [{ required: false, message: '' }],
    disabled: false,
    labelWidth: 90,
    errorMessageAlign: 'left',
    initialValue: '',
    shouldUpdate: false,
    noStyle: false,
    trigger: 'onChange',
    validateTrigger: 'onChange',
} as FormItemProps

export const FormItem: FunctionComponent<Partial<FormItemProps>> = (props) => {
    const {
        label,
        name,
        children,
        labelWidth,
        errorMessageAlign,
        rules = [{ required: false, message: '' }],
        className = '',
        noStyle,
    } = {
        ...defaultProps,
        ...props,
    }
    const context = useContext(FormItemContext)
    const cancelRegister = useRef<any>(null)
    const [, forceUpdate] = useState({})

    useEffect(() => {
        cancelRegister.current = context.registerField({
            onStoreChange: () => forceUpdate({}),
            ...props,
        })
        return () => {
            cancelRegister.current && cancelRegister.current()
        }
    }, [context])

    const renderChildren = (): React.ReactElement => {
        const {
            setFieldsValue,
            getFieldsValue,
            getFieldValue,
            setFieldValue,
            dispatch,
        } = context
        const child =
            typeof children === 'function'
                ? children(getFieldsValue())
                : children

        const { initialValue, validateTrigger, trigger, normalize } = props
        initialValue && setFieldValue({ [name]: initialValue })

        const childProps = {
            ...child.props,
            defaultValue: initialValue || getFieldValue(name),
            [trigger || 'onChange']: (...args: any) => {
                const originOnChange = child.props[trigger || 'onChange']
                if (originOnChange) {
                    originOnChange(...args)
                }
                let [next] = args
                switch (child.type) {
                    case 'select':
                        next = next.currentTarget.value
                        break
                    default:
                }
                if (normalize) {
                    next = normalize(next)
                }
                setFieldsValue({ [name]: next })
            },
        }

        let validateTriggers: string[] = [props.trigger || 'onChange']
        if (validateTrigger) {
            validateTriggers =
                typeof validateTrigger === 'string'
                    ? [...validateTriggers, validateTrigger]
                    : [...validateTriggers, ...validateTrigger]
            validateTriggers.forEach((trigger) => {
                const originTrigger = childProps[trigger]
                childProps[trigger] = (...args: any) => {
                    if (originTrigger) {
                        originTrigger(...args)
                    }
                    if (rules && rules.length) {
                        dispatch({ name })
                    }
                }
            })
        }
        return React.cloneElement(child, childProps)
    }

    const renderLayout = (childNode: React.ReactElement) => {
        if (noStyle) return childNode
        const item =
            context.errList.length > 0 &&
            context.errList?.filter((item: any) => item.field === name)

        return (
            <div className={`ashe-form-item ${className}`}>
                {label ? (
                    <div
                        className="ashe-form-item__label"
                        style={{ width: pxCheck(labelWidth) }}
                    >
                        {rules.length > 0 && rules[0].required && (
                            <i className="required" />
                        )}
                        <span> {label}</span>
                    </div>
                ) : null}

                <div className=" ashe-form-item__body">
                    <div className="ashe-form-item__body__slots">
                        {childNode}
                    </div>
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
    return renderLayout(renderChildren())
}

export default FormItem
