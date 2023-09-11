import { HTMLInputTypeAttribute } from 'react'
import { BasicComponent } from '@/utils/typeing'

export type InputType = HTMLInputTypeAttribute

export interface InputProps extends BasicComponent {
    // 名字
    name: string

    // 输入框类型
    type: InputType

    // 输入框为空时占位符
    placeholder: string

    // 输入框实体
    ref: any

    // 默认值
    defaultValue?: string

    // 是否禁用
    disabled?: boolean

    onChange?: (value: string) => void
    onBlur?: (value: any) => void
    onFocus?: (value: any) => void
}

export type InputInstance = {
    focus: () => void
    blur: () => void
    clear: () => void
}
