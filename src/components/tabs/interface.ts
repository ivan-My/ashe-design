import { BasicComponent } from '@/utils/typeing'

export interface TabsProps extends BasicComponent {
    active: number
}

export interface TabPaneProps extends BasicComponent {
    title: string | number
}
