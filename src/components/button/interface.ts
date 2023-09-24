import { CSSProperties } from 'react'
import { BasicComponent } from '@/utils/typeing'

export type ButtonType =
    | 'default'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'

export interface ButtonProps extends BasicComponent {
    className: string
    color: string
    shape: ButtonShape
    plain: boolean
    loading: boolean
    disabled: boolean
    type: ButtonType
    size: ButtonSize
    block: boolean
    icon: string
    style: CSSProperties
    children: any
    onClick: (e: MouseEvent) => void
}
