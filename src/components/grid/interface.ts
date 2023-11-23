import React from 'react'
import { BasicComponent } from '@/utils/typeing'

export interface GridProps extends BasicComponent {
    columns: number | string
    gap: number | string
    center: boolean
    square: boolean
    onClick?: (event: React.MouseEvent) => void
}
