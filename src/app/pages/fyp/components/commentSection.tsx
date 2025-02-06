import { Button } from "@mui/material"



export default function CommentSection({ hide }: { hide : React.Dispatch<React.SetStateAction<boolean>>})
{

    return(
        <div className=" w-full bg-stone-200 rounded absolute " style={{zIndex : "99", height : "70dvh", bottom : "10px", left: "50%", transform: "translateX(-50%)" }}>
           
            <div className="w-11/12 m-auto h-10 border mb-2 mt-2  grid grid-cols-2">
                <div className="  flex justify-center place-items-center">
                    <h1 className="text-lg md:text-sm font-bold text-start"> Comment Section</h1>
                </div>

                <div className="flex justify-end">
                    <button className="button" onClick={() => hide(false)}> X </button>
                </div>
            </div>
            
            <div className="w-11/12 m-auto h-4/6 rounded bg-stone-100 border mb-2 overflow-auto p-2">

                <div className=" roudned drop-shadow-lg  p-2  text-xs flex justify-start mb-3 ">
                    <div className="w-1/6 flex justify-center">
                        <button
                            className="bg-gray-800 h-10 w-10 flex justify-center items-center text-white rounded-full p-3 ring ring-stone-700 hover:bg-gray-700 transition-colors duration-200 mb-3 md:h-9 md:w-9"
                            aria-label="profile"
                            style={{ backgroundImage: `url(${""})`, backgroundSize: 'cover' }}
                        ></button>
                    </div>
                    <div className="w-5/6 p-2 text-start">
                        <h1 className="text-lg font-bold"> fullname <span className="text-xs text-stone-800"> 01/05/25 </span></h1>
                        <p> 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, voluptatem!
                        </p>
                    </div>  
                </div>

            </div>

            <div className="w-11/12 m-auto h-14 border flex gap-2">
                <input type="text"  className="input drop-shadow-lg w-5/6"/>
                <Button variant="contained" className="drop-shadow-lg"> send </Button>
            </div>
        </div>
    )
}