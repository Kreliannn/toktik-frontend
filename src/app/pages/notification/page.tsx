"use client"
import { Avatar, IconButton } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import AtIcon from "@mui/icons-material/AlternateEmail"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"

const notifications = [
  {
    type: "follow",
    user: "johndoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
  },
  {
    type: "like",
    user: "janedoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4h",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "comment",
    user: "alexsmith",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1d",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "mention",
    user: "sarahbrown",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2d",
  },
  {
    type: "follow",
    user: "johndoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
  },
  {
    type: "like",
    user: "janedoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4h",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "comment",
    user: "alexsmith",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1d",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "mention",
    user: "sarahbrown",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2d",
  },
  {
    type: "follow",
    user: "johndoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
  },
  {
    type: "like",
    user: "janedoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4h",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "comment",
    user: "alexsmith",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1d",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "mention",
    user: "sarahbrown",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2d",
  },
  {
    type: "follow",
    user: "johndoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
  },
  {
    type: "like",
    user: "janedoe",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4h",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "comment",
    user: "alexsmith",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1d",
    videoThumbnail: "/placeholder.svg?height=60&width=40",
  },
  {
    type: "mention",
    user: "sarahbrown",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2d",
  },
]

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "follow":
      return <PersonAddIcon className="text-blue-500" />
    case "like":
      return <FavoriteIcon className="text-red-500" />
    case "comment":
      return <ChatBubbleIcon className="text-green-500" />
    case "mention":
      return <AtIcon className="text-purple-500" />
    default:
      return null
  }
}
const NotificationPage = () => {
  return (
    <div className="h-dvh w-full grid grid-cols-12">
      <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3 md:block">
        <NavbarSide />
      </div>
      <div className="bg-gray-800 col-span-12 md:col-span-9">
        <div className=" mx-auto bg-gray-100 min-h-screen">
          <header className="bg-white p-4 shadow">
            <h1 className="text-xl font-bold">Notifications</h1>
          </header>
          <main className="p-4">
            {notifications.map((notification, index) => (
              <div key={index} className="bg-white rounded-lg shadow mb-4 p-4 flex items-center">
                <Avatar src={notification.avatar} alt={notification.user} className="mr-4" />
                <div className="flex-grow">
                  <p className="font-semibold">{notification.user}</p>
                  <p className="text-sm text-gray-600">
                    {notification.type === "follow" && "started following you"}
                    {notification.type === "like" && "liked your video"}
                    {notification.type === "comment" && "commented on your video"}
                    {notification.type === "mention" && "mentioned you in a comment"}
                  </p>
                  <p className="text-xs text-gray-400">{notification.time}</p>
                </div>
                <div className="flex items-center">
                  <IconButton size="small" className="mr-2">
                    <NotificationIcon type={notification.type} />
                  </IconButton>
                  {notification.videoThumbnail && (
                    <img
                      src={notification.videoThumbnail || "/placeholder.svg"}
                      alt="Video thumbnail"
                      className="w-10 h-15 object-cover rounded"
                    />
                  )}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
}

export default NotificationPage

