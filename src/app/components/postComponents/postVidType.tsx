"use client"
import { useRef } from "react"

export default function PostVideo({ vid, index, indexState }: { vid : string, index : number, indexState: number})
{
    const imgRef = useRef<HTMLVideoElement | null>(null);

    if(indexState == index && imgRef.current)
    {
        imgRef.current.play()
    }
    else
    {
        imgRef.current?.pause() 
    }

    return(<video ref={imgRef} src={vid} autoPlay loop  />)
}