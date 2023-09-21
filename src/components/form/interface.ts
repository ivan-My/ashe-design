import { BasicComponent } from '@/utils/typeing'

export type FieldItem = Record<string, any>

export interface FormProps extends BasicComponent {
    // 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
    form: any

    // 初始值
    initialValues: FieldItem

    // label的位置,可选值 top/left/right
    labelPosition: string | number

    // 表单分组名称
    formGroupTitle: string

    // 表单校验成功回调
    onFinish: (obj: object) => void

    // 表单校验失败回调
    onFinishFailed: (value: []) => void

    // 监听表单变化
    onValuesChange: Callbacks['onValuesChange']

    // 清空表单数据回调
    onRest: () => void
}

type TextAlign =
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'

export interface FormItemProps extends BasicComponent {
    // 字段名
    name: string

    // 初始值
    initialValue: string

    // label 标签的文本
    label: string

    // 校验规则，设置字段的校验逻辑
    rules: FormItemRule[]

    // 是否禁用表单项
    disabled: boolean

    // 不使用样式，只进行字段管理
    noStyle: boolean

    // 设置依赖字段
    dependencies: string[]

    // 表单项是否刷新
    shouldUpdate:
        | boolean
        | ((preStore: FieldItem, curStore: FieldItem) => boolean)

    // 字段收集时机
    trigger: string

    // 字段校验的时机，默认值onchange
    validateTrigger: string | string[]

    //  组件获取值再进行转换
    normalize: (value: FieldItem) => any

    // 设置如何将 event 的值转换成字段值
    getValueFromEvent: (...args: any) => FieldItem

    labelWidth: string | number
    errorMessageAlign: TextAlign
}

export interface FieldEntity extends FormItemProps {
    onForceUpdate: () => void
}

export interface FormItemRule extends FormItemRuleWithoutValidator {
    validator?: (
        ruleCfg: FormItemRuleWithoutValidator,
        value: any
    ) => boolean | string | Promise<boolean | string>
}

export interface FormItemRuleWithoutValidator {
    [key: string]: any

    regex?: RegExp
    required?: boolean
    message?: string
}

export interface FormInstance<Values = any> {
    registerField: () => void
}

export interface Callbacks<Values = FieldItem> {
    onValuesChange?: (changedValues: Values, values: Values) => void
    onFinish?: (values: Values) => void
    onFinishFailed?: (Values: Values) => void
}

export interface ErrorField {
    field?: string
    fieldValue?: any
    message?: string
}
