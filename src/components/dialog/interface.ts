import { ForwardRefExoticComponent, PropsWithChildren } from 'react'
import { BasicComponent } from '@/utils/typeing'

export interface DialogProps extends BasicComponent {
    text: string
}

export interface DialogComponent
    extends ForwardRefExoticComponent<PropsWithChildren<DialogProps>> {
    show: () => void
}
