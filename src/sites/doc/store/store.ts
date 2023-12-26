import { create } from 'zustand'

interface StoreState {
    hashName: string
    setHashName: (name: string) => void
}
export const useGlobalStore = create<StoreState>()((set) => ({
    hashName: 'ashe',
    setHashName: (name: string) => {
        set({ hashName: name })
    },
}))
