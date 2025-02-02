"use client"
import { NavbarSide } from "@/app/components/navbarSide"
import { NavbarBottom } from "@/app/components/navbarBottom"
import { Description } from "@mui/icons-material"
import { useState } from "react"


const choices = [
    { type : "image", Description : "bla bla lba", title : "Image upload"},
    { type : "video", Description : "bla bla lba", title : "Video upload"},
    { type : "text", Description : "bla bla lba", title : "Text upload"},
]

export default function AddPost()
{
    


    return(
        <div className="h-dvh w-full grid grid-cols-12  ">

             <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
                <NavbarSide />
             </div>
             <div className="bg-stone-900 col-span-12 md:col-span-9 ">
                <br />
                <div className="w-full h-80 gap-5  flex flex-col justify-center  place-items-center  md:flex-row     md:h-48">
                    
                    {
                        choices.map((item) => {
                            return(
                                <button key={item.type} className="h-32 w-80  rounded drop-shadow-lg bg-black text-white hover:bg-gray-900 ">
                                    <h1 className="text-center text-2xl text-white font-bold"> {item.title} </h1>
                                    <p className="text-center text-gray-400 text-xs mt-2"> {item.Description} </p>
                                </button>
                            )
                        })
                    }


                </div>

                <h1> {type}</h1>

             </div>

            <NavbarBottom />
        </div>
    )
}