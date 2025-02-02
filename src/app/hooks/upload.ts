import axios from "axios"
import useCheckFileType from "./checkFileType";

const useUpload = async (file: File, type: string): Promise<string> => {

    if(!useCheckFileType(file.name, type)) return "file type is not valid";

    let formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "example")
    formData.append("api_key", "994682957379785")
    
    let result = await axios.post(`https://api.cloudinary.com/v1_1/dljxtf9dg/${type}/upload`, formData)

    return result.data.secure_url;

}

