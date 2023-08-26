import { BasicComponent } from '@/utils/typeing'

export type EllipsisDirection = 'start' | 'end' | 'middle'

export interface EllipsisProps extends BasicComponent {
  content: string
  direction: EllipsisDirection
  lineHeight: number | string
  rows: number | string
}
