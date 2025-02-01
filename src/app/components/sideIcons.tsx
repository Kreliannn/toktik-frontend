"use client"
import { AccountCircle, Favorite, ChatBubble, BookmarkBorder } from "@mui/icons-material"

const sideIcons = [
  { icon: AccountCircle, label: "Profile" },
  { icon: Favorite, label: "Like" },
  { icon: ChatBubble, label: "Comment" },
  { icon: BookmarkBorder, label: "Favorite" },
]

export function SideIcons() {
  return (
    <div className="absolute right-4 top-1/2 flex flex-col items-center z-99 gap-3">
      {sideIcons.map((item, index) => (
        <button
          key={index}
          className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200"
          aria-label={item.label}
        >
          <item.icon className="text-xl" />
        </button>
      ))}
    </div>
  )
}

