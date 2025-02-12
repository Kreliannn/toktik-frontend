import {Button} from '@mui/material';
import { VisuallyHiddenInput } from '@/app/hooks/muiUploadButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { askAlert, errorAlert } from '@/app/hooks/alert';
import useUserProfileStore from '@/app/store/userProfileStore';
import axios from '@/app/hooks/api';
import useUpload from '@/app/hooks/upload';


const submitToServer = async (fileUrl : string) => {
    await axios.post("/profile/change", { profileUrl : fileUrl})
}

export default function ChangeProfileButton()
{
    const [file, setFile] = useState<File>({ name : "" } as File)

    const changeProfile = useUserProfileStore((state) => state.changeProfile)

    if(file.name != "")
    {
        askAlert("change profile?", async () => {
            const fileUrl = await useUpload(file, "image")
            if(fileUrl == "file type error") errorAlert(fileUrl)
            changeProfile(fileUrl)
            submitToServer(fileUrl)
        })
        setFile({ name : "" }  as File)
    }

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