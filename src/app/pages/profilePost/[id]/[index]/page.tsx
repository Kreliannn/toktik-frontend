"use client"
import Image from "next/image";
import useUserStore from "@/app/store/userStore";
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom";
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide";
import FypCarousel from "@/app/components/postComponents/fyp";
import { useParams } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Fyp()
{
    const params = useParams()
    const {id, index} = params

    const user = useUserStore((state) => state.user)

    

    return (
    <div className="h-dvh w-full grid grid-cols-12  ">

      <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
         <NavbarSide />
      </div>

      <div className="bg-gray-900 col-span-12 md:col-span-9 ">

      
        
        <div className="relative w-full h-dvh bg-stone-900 flex justify-center place-items-center">
          <div className="absolute top-1 left-0 w-full h-12 z-[100] flex justify-between items-center">
            <span className="ml-4 text-white">krelian quimson posts</span>
            <button className="button-white"><ArrowBackIcon /> back to profile </button>
          </div>
          <FypCarousel endPoint={`/post/${id}`} index={Number(index)}/>
        </div>
              
        <NavbarBottom />
      </div>
    
    </div>
  )
}