


export default function PostText({postBody}: { postBody : string })
{

    return(
        <div className={`w-full h-80 overflow-auto bg-white ${(postBody.length <= 100 ) ? "flex justify-center place-items-center" : "" }`}>
            <h1 className={` font-bold text-black ${(postBody.length <= 100 ) ? "text-2xl text-center" : "text-xs  text-start m-2"}` }> {postBody} </h1>
        </div>
    )
}