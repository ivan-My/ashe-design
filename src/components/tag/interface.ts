import { BasicComponent } from '@/utils/typeing'

export interface TagProps extends BasicComponent {
    color: string
    background: string
    round: boolean
    plain: boolean
    onClick: () => void
}
