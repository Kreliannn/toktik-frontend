import { postProfileInterface } from "@/app/interface/profile"
import Link from "next/link";

export default function ProfilePost({ post , index}: { post : postProfileInterface, index : number} )
{



    switch(post.type)
    {
        case "image":
            return(
                <Link href={`/pages/profilePost/${post.user}/${index}`} className="border border-black h-[200px] md:h-[400px]  flex justify-center place-items-center">
                    <img src={post.imgUrl} alt="" />
                </Link>
            )
        break;

        case "video":
            return(
                <Link href={`/pages/profilePost/${post.user}/${index}`} className="border border-black h-[200px] md:h-[400px] border border-black   flex justify-center place-items-center">
                    <video src={post.vidUrl} autoPlay muted loop></video>
                </Link>
            )
        break;


        case "text":
            return(
                <Link href={`/pages/profilePost/${post.user}/${index}`} className="border border-black h-[200px] md:h-[400px] flex jusitfy-center place-items-center">
                    <div className={`w-full h-24 overflow-hidden bg-white flex justify-center place-items-center`}>
                        <h1 className={` font-bold text-black text-xs text-center` }>  {post.postBody} </h1>
                    </div>
                </Link>
            )
        break;
    }

}