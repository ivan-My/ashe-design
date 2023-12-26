import { create } from 'zustand'

interface StoreState {
    menuCollapse: boolean
    setMenuCollapse: (show: boolean) => void
}
export const useGlobalStore = create<StoreState>()((set) => ({
    menuCollapse: true,
    setMenuCollapse: (show: boolean) => {
        set({ menuCollapse: show })
    },
}))
