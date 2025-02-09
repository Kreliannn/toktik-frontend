"use client"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import useUserStore from "@/app/store/userStore"
import { userProfileInterface } from "@/app/interface/profile"
import useUserProfileStore from "@/app/store/userProfileStore"

export default function FollowButton()
{
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const removeFollow = useUserProfileStore((state) => state.removeFollow)
    const addFollow = useUserProfileStore((state) => state.addFollow)

    const userId = useUserStore((state) => state.getUserId)

    const [isFollowing, setIsFollowing] = useState(userProfile.followers.includes(userId()))

    const mutation = useMutation({
        mutationFn : (id: string) => axios.patch(`/profile/follow/${id}`),
        onSuccess : () => {
            if(isFollowing) removeFollow(userId())
            else addFollow(userId())
            setIsFollowing(!isFollowing)
        }
    })

    return(
        <div>
            <button 
              className={`${(isFollowing) ? " bg-red-700 hover:bg-red-600" : " bg-[#FE2C55] hover:bg-[#FF4D6D] "} drop-shadow-lg w-full h-full  text-white py-2 px-4 rounded-md font-semibold  transition-colors`}
              onClick={() => mutation.mutate(userProfile._id)}
            >
                {(isFollowing) ? "unFollow" : "follow"}
            </button>
        </div>
    )
}