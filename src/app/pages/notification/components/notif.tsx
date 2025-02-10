import { Avatar, IconButton } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import { notificationInterface } from "@/app/interface/notification"

const NotificationIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "follow":
        return <PersonAddIcon className="text-blue-500" />
      case "liked":
        return <FavoriteIcon className="text-red-500" />
      case "commented":
        return <ChatBubbleIcon className="text-green-500" />
      case "addToFavorite":
        return <BookmarkIcon className="text-yellow-500" />
      default:
        return null
    }
  }


export default function Notif({notification} : { notification : notificationInterface })
{


    return(
           <div className="bg-white rounded-lg shadow mb-4 p-4 flex items-center">
                <Avatar src={notification.from.profile} alt={notification.from.profile} className="mr-4" />
                <div className="flex-grow">
                  <p className="font-semibold">{notification.from.fullname}</p>
                  <p className="text-sm text-gray-600">
                    {notification.type === "follow" && "started following you"}
                    {notification.type === "liked" && "liked your post"}
                    {notification.type === "commented" && "commented on your post"}
                    {notification.type === "addToFavorite" && "mentioned you in a comment"}
                  </p>
                  <p className="text-xs text-gray-400">{notification.date}</p>
                </div>
                <div className="flex items-center">
                  <IconButton size="small" className="mr-2">
                    <NotificationIcon type={notification.type} />
                  </IconButton>
                </div>
              </div>
    )

}