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
import CommentSection from "./commentSection";
import { useState } from "react";
import LoadingPage from "../loading/loading";


export default function FypCarousel({ endPoint, index }: { endPoint : string, index : number})
{
    const [ showcomment, setShowcomment ] = useState(false)
    const [indexState, setIndexState] = useState(0)
    const user = useUserStore((state) => state.user)


    const { data, isLoading } = useQuery({
      queryKey: ["fyp"],
      queryFn : () => axios.get(endPoint)
    })

    const allPost: [] = data?.data

    if(isLoading) return <LoadingPage />

    return (
    <div>
         <Carousel axis="vertical" emulateTouch={true} showArrows={false} infiniteLoop showThumbs={false} showIndicators={false} selectedItem={index} showStatus={false} className="md:w-80 h-dvh w-full "
          onChange={(index :number) => {
            setIndexState(index)
          }}
         > 
            {
              allPost?.map((post: postInterface, index) => {
                return (
                  <div key={index} className="w-screen md:w-full relative"> 
                    <SideIcons postId={post._id} like={post.like} favorite={post.favorite} comment={post.comment} user={post.user} show={setShowcomment} />
                     <div className="h-dvh w-full bg-black flex place-items-center">
                        {(post.type == "image") ? <PostImage img={post.imgUrl} /> : ""}
                        {(post.type == "video") ? <PostVideo vid={post.vidUrl} index={index} indexState={indexState} /> : ""}
                        {(post.type == "text") ? <PostText postBody={post.postBody} /> : ""}
                     </div>
                    {(showcomment) ? <CommentSection postId={post._id} comments={post.comment} hide={setShowcomment} /> : ""}
                    
                    <div className="absolute bottom-14 md:bottom-0 left-0 w-full h-24 overflow-hidden text-white text-start leading-8 ">
                      <b className="bg-gray-900 opacity-[.5] p-2 rounded text-sm ms-1"> {post.user.fullname} </b> <br />
                      {(post.caption)? <span className="bg-gray-900 opacity-[.5] p-2 rounded text-xs ms-1 mt-5"> {post.caption} </span> : ""}
                    </div>

                  </div>
                )
              })
            }
         </Carousel>
    </div>
    )
}