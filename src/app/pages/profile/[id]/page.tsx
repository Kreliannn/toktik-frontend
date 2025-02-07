"use client"
import useUserStore from "@/app/store/userStore"
import { NavbarBottom } from "@/app/components/navbarBottom"
import { NavbarSide } from "@/app/components/navbarSide"
import { useParams } from "next/navigation";
import axios from "@/app/hooks/api";
import { useQuery } from "@tanstack/react-query";
import FollowButton from "./components/follow";
import ChangeProfileButton from "./components/changeProfile";
import { userProfileInterface, postProfileInterface } from "@/app/interface/profile";
import ProfilePost from "./components/profilePost";


export default function Profile() {

    const myId = useUserStore((state) => state.getUserId)

    const params = useParams()

    const { id } = params;

    const { data } = useQuery({
        queryKey : ["profile"],
        queryFn : () => axios.get(`/profile/${id}`)
    })

    const user: userProfileInterface = data?.data.user
    const post: postProfileInterface[] = data?.data.post

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
                            src={user?.profile}
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                            />
                        </div>
                
                    
                        <h1 className="text-2xl font-bold mb-5  m-auto text-center"> {user?.fullname} </h1>
                
                        
                        <div className="flex space-x-10 mb-6 ">
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {user?.following.length} </span>
                            <span className="text-gray-500 text-md">Following</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {user?.followers.length} </span>
                            <span className="text-gray-500 text-md">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                            <span className="font-bold text-2xl "> {user?.likesCount} </span>
                            <span className="text-gray-500 text-md">Likes</span>
                            </div>
                        </div>

                        <div className=" w-80 h-10">
                            {(user?._id == myId()) ? <ChangeProfileButton/> : <FollowButton />}
                        </div>

                        <br />

                        <div className="bg-stone-900  w-full h-auto grid grid-cols-3 md:w-4/6">
                        {
                            post?.map((post, index) => {
                                return <ProfilePost post={post} key={index} />
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