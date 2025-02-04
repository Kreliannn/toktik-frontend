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
import { postInterface } from "@/app/interface/post";

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
              allPost?.map((post: postInterface, index) => {
                return (
                  <div key={index}> 
                    <SideIcons postId={post._id} like={post.like} favorite={post.favorite} comment={post.comment} />
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