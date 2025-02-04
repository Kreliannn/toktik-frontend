import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { userInterface } from '../interface/user'

const emptyObj = {
    fullname : "",
    profile : "",
    _id : ""
}

interface user {
    user : userInterface,
    setUser : (data: userInterface) => void,
    getUserFullname : () => string,
    getUserProfile : () => string,
    userLogOut : () => void
}

const useUserStore = create<user>()(
  persist(
    (set, get) => ({
        user : emptyObj,
        setUser : (data) => set({ user : data}),
        getUserFullname : () => get().user.fullname,
        getUserProfile : () => get().user.profile,
        userLogOut : () => {
            sessionStorage.removeItem('user-storage')
            set({user : emptyObj})
        }
    }),
    {
      name: 'user-storage', 
      storage: createJSONStorage(() => sessionStorage), 
    },
  ),
)

export default useUserStore