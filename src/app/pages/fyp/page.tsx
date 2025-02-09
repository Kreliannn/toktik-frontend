"use client"
import Image from "next/image";
import useUserStore from "@/app/store/userStore";
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom";
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide";
import FypCarousel from "../../components/postComponents/fyp";

export default function Fyp()
{
    
    const user = useUserStore((state) => state.user)

    

    return (
    <div className="h-dvh w-full grid grid-cols-12  ">

      <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
         <NavbarSide />
      </div>

      <div className="bg-gray-900 col-span-12 md:col-span-9 ">
        
        <div className="w-full h-dvh bg-stone-900 flex justify-center place-items-center">
          <FypCarousel endPoint="/post" index={0}/>
        </div>
              
        <NavbarBottom />
      </div>
    
    </div>
  )
}