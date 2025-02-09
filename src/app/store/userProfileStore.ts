import { create } from "zustand"
import { userProfileInterface } from "../interface/profile"

const emptyObj = {
    fullname: "",
    profile: "https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
    _id: "",
    followers: [],
    following: [],
    likesCount: 0
}

interface userProfileInterfaceZustand {
    userProfile : userProfileInterface,
    setUserProfile : (data : userProfileInterface) => void,
    removeFollow : (id : string) => void, 
    addFollow : (id : string) => void, 
}

const useUserProfileStore = create<userProfileInterfaceZustand>((set, get) => ({
    userProfile : emptyObj,
    setUserProfile : (data) => set({ userProfile : data}),
    removeFollow : (id) => {
        const follower = get().userProfile.followers
        const removedFollower = follower.filter((follower) => follower != id)
        console.log(removedFollower)
        set((state) => ({ userProfile : {...state.userProfile, followers : removedFollower}}))
    },
    addFollow : (id) => {
        const follower = get().userProfile.followers
        const addFollower = [...follower, id]
        console.log(addFollower)
        set((state) => ({ userProfile : {...state.userProfile, followers : addFollower}}))
    }
}))


export default useUserProfileStore