import { BasicComponent } from '@/utils/typeing'

export interface ToastProps extends BasicComponent {
  id?: string
  msg: string
  title: string
  style?: React.CSSProperties
  center: boolean
  bottom: string
  duration: number
  type: string
  cover: boolean
  coverColor: string
  textAlignCenter: boolean
  loadingRotate: boolean
  bgColor: string
  onClose: () => void
  closeOnClickOverlay: boolean
}
