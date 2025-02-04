"use client"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useUserStore from "@/app/store/userStore";
import { SideIcons } from "./sideIcons";
import axios from "@/app/hooks/api";
import { useQuery } from "@tanstack/react-query";
import PostImage from "./postImgType";
import PostText from "./postTextType";
import PostVideo from "./postVidType";
import { combine } from "zustand/middleware";


export default function FypCarousel()
{
    
    const user = useUserStore((state) => state.user)

    const { data } = useQuery({
      queryKey: ["fyp"],
      queryFn : () => axios.get("/post")
    })

    const allPost: [] = data?.data

    const arr = [
      {
        user : {
          profile : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
          id : 7
        },
        like : [4,3,5,6,7],
        comment : [{message : "hi", id:3}, {message : "hi", id:4}],
        favorite : [4,3,4,6,7,8,9],
      }
    ]

    return (
    <div>
         <Carousel axis="vertical" infiniteLoop  showIndicators={false} showStatus={false} className="md:w-80 h-dvh"> 
            {
              allPost?.map((post: any, index) => {
                return (
                  <div key={index}> 
                    <SideIcons user={arr[0].user} like={arr[0].like} comment={arr[0].comment} favorite={arr[0].favorite} />
                     <div className="h-dvh w-full bg-black flex place-items-center">
                        {(post.type == "image") ? <PostImage img={post.imgUrl} /> : ""}
                        {(post.type == "video") ? <PostVideo vid={post.vidUrl} /> : ""}
                        {(post.type == "text") ? <PostText postBody={post.postBody} /> : ""}
                     </div>
                  </div>
                )
              })
            }
         </Carousel>
    </div>
    )
}