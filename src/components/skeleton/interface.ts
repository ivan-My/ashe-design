import { BasicComponent } from '@/utils/typeing'

type avatarShape = 'round' | 'square'
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
}
