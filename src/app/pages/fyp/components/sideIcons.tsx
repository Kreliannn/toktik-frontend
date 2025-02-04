"use client"
import { AccountCircle, Favorite, ChatBubble, Bookmark } from "@mui/icons-material"
import { sideIconsInterface } from "@/app/interface/post"
import { useState } from "react"



export function SideIcons({ user, like, comment, favorite}: sideIconsInterface) {

  const [likeIcon, setlikeIcon] = useState<boolean>(like.includes(user.id))
  const [favoriteIcon, setfavoriteIcon] = useState<boolean>(favorite.includes(user.id))

  const likeSetter = () => setlikeIcon(!likeIcon)
  const favoriteSetter = () => setfavoriteIcon(!favoriteIcon)

  return (
    <div className="absolute right-4 top-1/2 flex flex-col items-center z-99 gap-3 ">
        <button
          className="bg-gray-800 h-14 w-14 flex justify-center items-center text-white rounded-full p-3 ring ring-stone-700 hover:bg-gray-700 transition-colors duration-200 mb-3 md:h-10 md:w-10"
          aria-label="profile"
          style={{ backgroundImage: `url(${user.profile})`, backgroundSize: 'cover' }}
        ></button>

        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            >
            <Favorite className={`${(likeIcon) ? "text-red-500" : ""} transition duration-500 text-2xl`} onClick={likeSetter} />
            <p className={`text-xs`}>
            {like.length} 
            </p>
        </button>

        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            >
            <ChatBubble className={`transition duration-500 text-2xl`}  />
            <p className={`text-xs`}>
            {comment.length} 
            </p>
        </button>


        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            >
            <Bookmark className={`${(favoriteIcon) ? "text-yellow-500" : ""} transition duration-500 text-2xl`} onClick={favoriteSetter} />
            <p className={`text-xs`}>
            {favorite.length} 
            </p>
        </button>

    </div>
  )
}