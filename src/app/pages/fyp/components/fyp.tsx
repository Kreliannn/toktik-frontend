"use client"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useUserStore from "@/app/store/userStore";
import { SideIcons } from "@/app/components/sideIcons";
import axios from "@/app/hooks/api";
import { useQuery } from "@tanstack/react-query";

export default function FypCarousel()
{
    
    const user = useUserStore((state) => state.user)

    const { data } = useQuery({
      queryKey: ["fyp"],
      queryFn : () => axios.get("/post")
    })

    const allPost: [] = data?.data
    

    return (
    <div>
         <Carousel axis="vertical" infiniteLoop  showIndicators={false} showStatus={false} className="md:w-80 h-dvh"> 
            {
              allPost?.map((post: any, index) => {
                return (
                  <div key={index}> 
                    <SideIcons />
                     <div className="h-dvh w-full bg-black flex place-items-center">
                       <img src={post.imgUrl} alt="not found" />
                     </div>
                  </div>
                )
              })
            }
         </Carousel>
    </div>
    )
}