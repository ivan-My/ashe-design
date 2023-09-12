import { ReactNode } from 'react'

export interface CellProps {
    title: ReactNode
    desc: ReactNode
    extra: ReactNode
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
