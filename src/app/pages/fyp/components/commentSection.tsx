"use client"
import { Button } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import { Error } from "@/app/interface/onError"
import { commentInterface } from "@/app/interface/post"
import { AxiosResponse } from "axios"
import useUserStore from "@/app/store/userStore"

export default function CommentSection({ postId , comments, hide }: {postId : string, comments : commentInterface[] , hide : React.Dispatch<React.SetStateAction<boolean>>})
{
    const [comment, setComment] = useState("")
    
    const [allComments, setAllComments] = useState(comments)

    const user = useUserStore((state) => state.user)

    const mutation = useMutation({
        mutationFn : (data : { postId : string, comment : string}) => axios.post("/post/comment", data),
        onSuccess : (response: AxiosResponse<{ message : string, date : string}>) => {
            const { message, date } = response.data
            const newComment = {
                message : message,
                sender : {
                    fullname : user.fullname,
                    profile : user.profile
                },
                date : date
            }
            setAllComments([...allComments, newComment])
        },
        onError : (err: Error) => {
            alert(err.response.data)
        }
    })


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

            {
                allComments?.map((comment, index) => {
                    {console.log("rpintin g")}
                    return (
                        <div key={index} className=" roudned drop-shadow-lg  p-2  text-xs flex justify-start mb-3 ">
                            <div className="w-1/6 flex justify-center">
                                <button
                                    className="bg-gray-800 h-10 w-10 flex justify-center items-center text-white rounded-full p-3 ring ring-stone-700 hover:bg-gray-700 transition-colors duration-200 mb-3 md:h-9 md:w-9"
                                    aria-label="profile"
                                    style={{ backgroundImage: `url(${comment.sender.profile})`, backgroundSize: 'cover' }}
                                ></button>
                            </div>
                            <div className="w-5/6 p-2 text-start">
                                <h1 className="text-lg font-bold"> {comment.sender.fullname} <span className="text-xs text-stone-800"> {comment.date} </span></h1>
                                <p> 
                                    {comment.message}
                                </p>
                            </div>  
                        </div>
                    )
                })
            }

            </div>

            <div className="w-11/12 m-auto h-14 border flex gap-2">
                <input type="text"  className="input drop-shadow-lg w-5/6" onChange={(e) => setComment(e.target.value)}/>
                <Button variant="contained" className="drop-shadow-lg" onClick={() => mutation.mutate({ comment : comment, postId : postId})}> send </Button>
            </div>
        </div>
    )
}