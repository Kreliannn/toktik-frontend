


export default function useCheckFileType(fileName: string, type = "image"): boolean
{
    const validVideo = ["mp4", "mp3", "mp5"]
    const validImage = ["jpg", "png", "jpeg"]

    const extension = fileName.split(".")[1]

    return (type == "image") ? validImage.includes(extension) : validVideo.includes(extension)
}