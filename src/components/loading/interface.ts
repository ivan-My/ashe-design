import { ReactNode } from 'react'
import { BasicComponent } from '@/utils/typeing'

export interface LoadingProps extends BasicComponent {
    // 类型
    type: 'change' | 'rotate' | 'spin'

    // 大小
    size: number | string

    // 颜色
    color: string

    // 自定义渲染图标
    icon: ReactNode

    // 是否垂直排列
    vertical: boolean
}
