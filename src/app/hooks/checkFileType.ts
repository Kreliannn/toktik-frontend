


export default function useCheckFileType(fileType: string, type = "image"): boolean
{
    const validVideo = ["mp4", "avi", "mov", "mkv"];
    const validImage = ["jpg", "png", "jpeg", "gif", "webp"];
    

    const extension = fileType.split("/")[1]

    return (type == "image") ? validImage.includes(extension) : validVideo.includes(extension)
}