"use client"
import useUserStore from "@/app/store/userStore"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"
import { useParams } from "next/navigation";
import axios from "@/app/hooks/api";
import { useQuery } from "@tanstack/react-query";
import FollowButton from "./components/follow";
import ChangeProfileButton from "./components/changeProfile";
import { userProfileInterface, postProfileInterface } from "@/app/interface/profile";
import ProfilePost from "./components/profilePost";
import FypCarousel from "@/app/components/postComponents/fyp";
import { useState, useEffect, useRef } from "react";
import useUserProfileStore from "@/app/store/userProfileStore";

export default function Profile() {

    const myId = useUserStore((state) => state.getUserId)
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile)

    const profilePic = useRef(null)
   
    const params = useParams()

    const { id } = params;

    const { data, isLoading } = useQuery({
        queryKey : ["profile", id],
        queryFn : () => axios.get(`/profile/${id}`),
        staleTime: 0,
    })

    let post: postProfileInterface[] = []
    post = data?.data.post


    
     
    useEffect(() => {
        if (data?.data) {
            setUserProfile(data?.data.user);
        }
    }, [data, setUserProfile]);

    if(isLoading) return <h1> loading....................... </h1>


    return(
        <div className="h-dvh w-full grid grid-cols-12  ">

             <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
                <NavbarSide />
             </div>
             <div className="bg-white text-black col-span-12 md:col-span-9 ">
                    <br />
                <div className="w-full  p-6">
                    <div className="flex flex-col items-center  ">
                    
                        <div className="w-32 h-32 shadow-lg rounded-full overflow-hidden mb-4 border-2 border-gray-200 m-auto">
                            <img
                            ref={profilePic}
                            src={userProfile.profile}
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                            />
                        </div>
                
                    
                        <h1 className="text-2xl font-bold mb-5  m-auto text-center"> {userProfile.fullname} </h1>
                
                        
                        <div className="flex space-x-10 mb-6 ">
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {userProfile.following.length} </span>
                            <span className="text-gray-500 text-md">Following</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {userProfile.followers.length} </span>
                            <span className="text-gray-500 text-md">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {userProfile.likesCount} </span>
                            <span className="text-gray-500 text-md">Likes</span>
                            </div>
                        </div>

                        <div className=" w-80 h-10">
                            {(userProfile._id == myId()) ? <ChangeProfileButton/> : <FollowButton />}
                        </div>

                        <br />

                        <div className="bg-stone-200  w-full h-auto grid grid-cols-3 md:w-4/6">
                        {
                            post?.map((post, index) => {
                                return <ProfilePost post={post} key={index} index={index}/>
                            })
                        }
                        </div>

                        <br /><br /><br />
                    
                    </div>
                </div>
             </div>
            

            
            <NavbarBottom />
        </div>
    )

}