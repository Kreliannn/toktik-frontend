"use client"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material"
import {Button} from '@mui/material';
import { VisuallyHiddenInput } from '@/app/hooks/muiUploadButton';
import { useState } from 'react';
import useUpload from '@/app/hooks/upload';
import axios from '@/app/hooks/api';
import { useMutation } from '@tanstack/react-query';
import { addPostInterface } from '@/app/interface/post';
import { Error } from '@/app/interface/onError';


export default function ImageUpload()
{
    const [file, setFile] = useState<File>({name: ""} as File)
    const [caption, setCaption] = useState("")

    const mutation = useMutation({
        mutationFn : (data: addPostInterface) => axios.post("/post/upload", data),
        onSuccess : (response) =>{
            setCaption("")
            setFile({name: ""} as File)
            alert(response.data)
        },
        onError : (err: Error) => alert(err.response.data)
    })

    const submit = async () => {

       if(file.name == "") return alert("select image first")
        
       const value = await useUpload(file, "image")

       if(value == "file type error") return alert("file type is not valid")
       
        mutation.mutate({
            value : value,
            caption : caption,
            type: "image"
        })

    }

    return(
        <div className="w-full  drop-shadow-lg h-full flex flex-col items-center justify-center">
       
            <TextField variant="outlined" label="caption" className="w-full m-auto bg-white  rounded" value={caption} onChange={(e) => setCaption(e.target.value)} />

            <Button
                className="w-full  drop-shadow-lg m-auto h-40 mt-2 rounded text-xl md:text-4xl font-bold"
                component="label"
                variant="contained"
                tabIndex={-1}
                color={(file.name) ? "success" : "primary"}
                startIcon={ (file.name) ? <CheckIcon style={{ fontSize: 40 }} /> : <CloudUploadIcon style={{ fontSize: 40 }}  />}
                >
                Upload Image
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                        setFile(file);
                        } else {
                        console.log("No file selected");
                        }
                    }}
                />
            </Button>

            <Button
                className='w-full  drop-shadow-lg m-auto mt-2  rounded text-2xl font-bold'
                variant="contained"
                onClick={submit}
            >
                Submit
            </Button>
        </div>
    )
}