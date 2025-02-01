"use client"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useUserStore from "@/app/store/userStore";
import { NavbarBottom } from "@/app/components/navbarBottom";
import { NavbarSide } from "@/app/components/navbarSide";
import { SideIcons } from "@/app/components/sideIcons";

export default function Fyp()
{
    
    const user = useUserStore((state) => state.user)

    console.log(user)

    return (
    <div>
      <div className="w-full h-100dvh bg-stone-900 flex justify-center place-items-center">
        <Carousel axis="vertical" infiniteLoop  showIndicators={false} showStatus={false} className="md:w-80 h-dvh"> 
                 <div>
                 <SideIcons />
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/profile_picture.webp" alt="" />
                     </div>
                     
  
                 </div>
                 <div>
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/caraass.jpg" alt="" />
                     </div>
                     <SideIcons />
                 </div>
                 <div>
                    <SideIcons />
                    <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/pokemon_landingpage_bg.jpg" alt="" />
                     </div>
                  
                 </div>

            

         </Carousel>


      </div>

      
        
      <NavbarBottom />
      <NavbarSide />
    </div>
    )
}