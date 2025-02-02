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


export default function TextUpload()
{
    const [file, setFile] = useState<File |  null>(null)

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
          
            <TextField variant="outlined" label="caption" className="w-full  drop-shadow-lg m-auto bg-white  rounded"/>

            <TextField
                className='w-full  drop-shadow-lg m-auto bg-white  rounded"'
                label="Message"
                variant="outlined"
                multiline
                rows={4} // Controls height
                fullWidth
            />

            <Button
                className='w-full  drop-shadow-lg m-auto mt-2  rounded text-2xl font-bold'
                variant="contained"
            >
                Submit
            </Button>
        </div>
    )
}