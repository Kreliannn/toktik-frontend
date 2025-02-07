"use client"
import useUserStore from "@/app/store/userStore"
import { NavbarBottom } from "@/app/components/navbarBottom"
import { NavbarSide } from "@/app/components/navbarSide"
import { useParams } from "next/navigation";

export default function Profile() {

    const params = useParams()

    const { id } = params;

    console.log(id)

    const fullname = useUserStore((state) => state.getUserFullname)
    const profile = useUserStore((state) => state.getUserProfile)


    return(
        <div className="h-dvh w-full grid grid-cols-12  ">

             <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
                <NavbarSide />
             </div>
             <div className="bg-white text-black col-span-12 md:col-span-9 ">
                    <br />
                <div className="w-full max-w-md p-6">
                    <div className="flex flex-col items-center">
                    
                    <div className="w-32 h-32 shadow-lg rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                        <img
                        src={profile()}
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                        />
                    </div>
            
                
                    <h1 className="text-2xl font-bold mb-5"> {fullname()} </h1>
            
                    
                    <div className="flex space-x-10 mb-6">
                        <div className="flex flex-col items-center">
                        <span className="font-bold text-2xl">123</span>
                        <span className="text-gray-500 text-md">Following</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <span className="font-bold text-2xl">10.5K</span>
                        <span className="text-gray-500 text-md">Followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <span className="font-bold text-2xl">1.2M</span>
                        <span className="text-gray-500 text-md">Likes</span>
                        </div>
                    </div>
            
                    
                    
                    </div>
                </div>
             </div>

            <NavbarBottom />
        </div>
    )

}