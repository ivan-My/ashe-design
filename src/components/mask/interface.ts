import { BasicComponent } from '@/utils/typeing'

export interface MaskProps extends BasicComponent {
  visible: boolean
  disableBodyScroll: boolean
  closeOnOverlayClick: boolean
  duration: number
  onClick: (event: MouseEvent) => void
  afterShow: () => void
  afterClose: () => void
}
