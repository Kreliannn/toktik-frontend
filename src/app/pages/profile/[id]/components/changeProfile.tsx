import {Button} from '@mui/material';
import { VisuallyHiddenInput } from '@/app/hooks/muiUploadButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function ChangeProfileButton()
{
    const [file, setFile] = useState<File>({ name : "" } as File)

    return(
        <div className='flex  '>
            <Button
                className="w-full  drop-shadow-lg  m-auto h-full mt-2 rounded  font-bold "
                component="label"
                variant="contained"
                tabIndex={-1}
                color={(file.name) ? "success" : "primary"}
                startIcon={ (file.name) ? <CheckIcon style={{ fontSize: 20 }} /> : <CloudUploadIcon style={{ fontSize: 20 }}  />}
                >
                Change Profile
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files?.[0]; 
                        console.log(file)
                        if (file) {
                            setFile(file);
                        } else {
                            console.log("No file selected");
                        }
                    }}
                />
            </Button>
        </div>
    )
}