"use client"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useUserStore from "@/app/store/userStore";
import { NavbarBottom } from "@/app/components/navbarBottom";

export default function Fyp()
{
    
    const user = useUserStore((state) => state.user)

    console.log(user)

    return (
    <div>
        <Carousel axis="vertical" infiniteLoop  showIndicators={false} showStatus={false}> 
                 <div>
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/profile_picture.webp" alt="" />
                     </div>
                 </div>
                 <div>
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/caraass.jpg" alt="" />
                     </div>
               
                 </div>
                 <div>
                    <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src="/pokemon_landingpage_bg.jpg" alt="" />
                     </div>
                  
                 </div>
         </Carousel>

         <NavbarBottom />
    </div>
    )
}