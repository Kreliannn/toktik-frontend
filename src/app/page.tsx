"use client"
import Image from "next/image";
import {useState} from "react"
import axios from "axios";

export default function Home() {

  const [file, setFile] = useState<File | null>(null)
  const [IMG, setIMG] = useState(null)

  console.log(file)

  const upload = async () => {
    let formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "example")
    formData.append("api_key", "994682957379785")
    formData.append('timestamp', Date.now() / 1000); // Required for security purposes
    try {
      let result = await axios.post("https://api.cloudinary.com/v1_1/dljxtf9dg/video/upload", formData)
      console.log(result)
      setIMG(result.data.secure_url)
    } catch(err)
    {
      console.log(err)
    }
 

   

  }

  return (
   <div>
      <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
      <button className="input"
      onClick={upload}
      > upload </button>
      <video src={IMG} controls alt="" />
   </div>
  );
}
