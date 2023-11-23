import { BasicComponent } from '@/utils/typeing'

type avatarShape = 'round' | 'square'

type GridProps = {
    rows: number
}
export interface SkeletonProps extends BasicComponent {
    visible: boolean
    animated: boolean
    rows: number
    title: boolean
    avatar: boolean
    avatarSize: number | string
    avatarShape: avatarShape
    rowWidth?: number | string | (number | string)[]
    rowHeight?: number | string | (number | string)[]
    grid: boolean | number
}
