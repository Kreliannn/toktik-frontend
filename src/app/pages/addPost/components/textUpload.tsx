"use client"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material"
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { VisuallyHiddenInput } from '@/app/hooks/muiUploadButton';
import axios from '@/app/hooks/api';
import { useMutation } from '@tanstack/react-query';
import { Error } from '@/app/interface/onError';
import { addPostInterface } from '@/app/interface/post';
import { successAlert, errorAlert } from '@/app/hooks/alert';


export default function TextUpload()
{
    const [caption, setCaption] = useState("")
    const [postBody, setPostBody] = useState("")

    const mutation = useMutation({
        mutationFn : (data: addPostInterface) => axios.post("/post/upload", data),
        onSuccess : (response) => {
            setCaption("")
            setPostBody("")
            successAlert(response.data)
        },
        onError : (err: Error) => errorAlert(err.response.data)
    })

    const submit = () => mutation.mutate({caption : caption, type : "text", value : postBody})

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
          
            <TextField variant="outlined" label="caption" className="w-full  drop-shadow-lg m-auto bg-white  rounded" value={caption} onChange={(e) => setCaption(e.target.value)}   />

            <TextField
                className='w-full  drop-shadow-lg m-auto bg-white  rounded"'
                label="Message"
                variant="outlined"
                multiline
                rows={4} 
                fullWidth
                value={postBody} 
                onChange={(e) => setPostBody(e.target.value)} 
            />

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