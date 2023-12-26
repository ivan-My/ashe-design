import { create } from 'zustand'

interface StoreState {
    hashName: string
    menuCollapse: boolean
    setHashName: (name: string) => void
}
export const useGlobalStore = create<StoreState>()((set) => ({
    hashName: 'ashe',
    menuCollapse: true,
    setMenuCollapse: (show: boolean) => {
        set({ menuCollapse: show })
    },
    setHashName: (name: string) => {
        set({ hashName: name })
    },
}))
