import { postProfileInterface } from "@/app/interface/profile"

export default function ProfilePost({ post }: { post : postProfileInterface} )
{



    switch(post.type)
    {
        case "image":
            return(
                <div className="border border-black h-[200px] md:h-[400px]  flex justify-center place-items-center">
                    <img src={post.imgUrl} alt="" />
                </div>
            )
        break;

        case "video":
            return(
                <div className="border border-black h-[200px] md:h-[400px] border border-black   flex justify-center place-items-center">
                    <video src={post.vidUrl} autoPlay muted loop></video>
                </div>
            )
        break;


        case "text":
            return(
                <div className="border border-black h-[200px] md:h-[400px] flex jusitfy-center place-items-center">
                    <div className={`w-full h-24 overflow-hidden bg-white flex justify-center place-items-center`}>
                        <h1 className={` font-bold text-black text-xs text-center` }>  {post.postBody} </h1>
                    </div>
                </div>
            )
        break;
    }

}