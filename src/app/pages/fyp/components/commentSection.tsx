



export default function CommentSection({ hide }: { hide : React.Dispatch<React.SetStateAction<boolean>>})
{

    return(
        <div className=" w-full bg-stone-200 rounded absolute " style={{zIndex : "99", height : "70dvh", bottom : "10px", left: "50%", transform: "translateX(-50%)" }}>
            <div className="w-11/12 m-auto h-10 bg-red-500 border mb-2 mt-2 flex justify-end">
                <button className="button" onClick={() => hide(false)}> X </button>
            </div>
            
            <div className="w-11/12 m-auto h-4/6 bg-red-500 border mb-2">

            </div>

            <div className="w-11/12 m-auto h-14 bg-red-500 border ">

            </div>
        </div>
    )
}