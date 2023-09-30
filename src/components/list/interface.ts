import React from 'react'
import { BasicComponent } from '@/utils/typeing'

export interface ListProps extends BasicComponent {
    hasMore: boolean
    threshold: number

    target: string

    useCapture: boolean
    isOpenRefresh: boolean
    pullTxt: string | React.ReactNode
    loadTxt: string | React.ReactNode
    loadMoreTxt: string
    className: string
    style: React.CSSProperties
    onRefresh: (param: () => void) => void
    onLoadMore: (param: () => void) => void
    onScrollChange: (param: number) => void
}
