"use client"
import { AccountCircle, Favorite, ChatBubble, Bookmark } from "@mui/icons-material"

const sideIcons = [
  { icon: Favorite, label: "Like" },
  { icon: ChatBubble, label: "Comment" },
  { icon: Bookmark, label: "Favorite" },
]

export function SideIcons() {

    




  return (
    <div className="absolute right-4 top-1/2 flex flex-col items-center z-99 gap-3">
        <button
          className="bg-gray-800 h-14 w-14 flex justify-center items-center text-white rounded-full p-3 ring ring-stone-700 hover:bg-gray-700 transition-colors duration-200 mb-3 md:h-10 md:w-10"
          aria-label="profile"
          style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg)', backgroundSize: 'cover' }}
        ></button>

      {
      sideIcons.map((item, index) => (
        <button
          key={index}
          className="bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10"
          aria-label={item.label}
        >
          <item.icon className="text-2xl " />
          <p className="text-xs">15</p>
        </button>
      ))
      }
    </div>
  )
}