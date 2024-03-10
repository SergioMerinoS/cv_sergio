import {create} from 'zustand'

export const useNavigateStore = create((set,get)=>({
    page: '',
    setPage: (page)=>set({page})
}))