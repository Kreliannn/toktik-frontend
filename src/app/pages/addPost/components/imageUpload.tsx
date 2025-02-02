"use client"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material"
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


export default function ImageUpload()
{
    const [file, setFile] = useState<File |  null>(null)

    return(
        <div className="w-full  drop-shadow-lg h-full flex flex-col items-center justify-center">
       
            <TextField variant="outlined" label="caption" className="w-full m-auto bg-white  rounded"/>

            <Button
                className="w-full  drop-shadow-lg m-auto h-40 mt-2 rounded text-xl md:text-4xl font-bold"
                component="label"
                variant="contained"
                tabIndex={-1}
                color={(file) ? "success" : "primary"}
                startIcon={ (file) ? <CheckIcon style={{ fontSize: 40 }} /> : <CloudUploadIcon style={{ fontSize: 40 }}  />}
                >
                Upload Image
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files?.[0]; // Use optional chaining
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
            >
                Submit
            </Button>
        </div>
    )
}