"use client"
import { AccountCircle, Favorite, ChatBubble, Bookmark } from "@mui/icons-material"
import { postInterface, commentInterface } from "@/app/interface/post"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import useUserStore from "@/app/store/userStore"
import { useRouter } from "next/navigation"

export function SideIcons({postId ,like, favorite, comment, user, show }: {postId : string, like: string[], favorite: string[], comment: commentInterface[], user : {_id : string, profile : string}, show: React.Dispatch<React.SetStateAction<boolean>>}) {

  const userId = useUserStore((state) => state.getUserId)

  const router = useRouter()

  const [likeIcon, setlikeIcon] = useState<boolean>(like.includes(userId()))
  const [likeCount, setLikeCount] = useState<number>(like.length)
  const [favoriteIcon, setfavoriteIcon] = useState<boolean>(favorite.includes(userId()))
  const [favoriteCount, setFavoriteCount] = useState<number>(favorite.length)

  const mutationLike = useMutation({
    mutationFn : (data: { postId : string}) => axios.post("/post/like", data)
  })

  const mutationFavorite = useMutation({
    mutationFn : (data: { postId : string}) => axios.post("/post/favorite", data)
  })

  const likeSetter = () => {
    setlikeIcon(!likeIcon)
    const likeState = likeIcon
    setLikeCount((state) => (likeState)? state -= 1 : state += 1)
    mutationLike.mutate({ postId : postId})
  }

  const favoriteSetter = () => {
    setfavoriteIcon(!favoriteIcon)
    const favoriteState = favoriteIcon
    setFavoriteCount((state) => (favoriteState)? state -= 1 : state += 1)
    mutationFavorite.mutate({ postId : postId})
  }

  return (
    <div className="absolute right-4 top-1/2 flex flex-col items-center z-[99] gap-3 ">
        <button
          className="bg-gray-800 h-14 w-14 flex justify-center items-center text-white rounded-full p-3 ring ring-stone-700 hover:bg-gray-700 transition-colors duration-200 mb-3 md:h-10 md:w-10"
          aria-label="profile"
          style={{ backgroundImage: `url(${user.profile})`, backgroundSize: 'cover' }}
          onClick={() => router.push(`/pages/profile/${user._id}`)}
        ></button>

        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            onClick={likeSetter}
            >
            <Favorite className={`${(likeIcon) ? "text-red-500" : ""} transition duration-500 text-2xl`}  />
            <p className={`text-xs`}>
            {likeCount } 
            </p>
        </button>

        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            onClick={() => show(true)}
            >
            <ChatBubble className={`transition duration-500 text-2xl`}  />
            <p className={`text-xs`}>
            {comment.length} 
            </p>
        </button>


        <button
            className={`bg-gray-800 h-12  w-12 flex flex-col justify-center items-center text-white rounded-full p-3 hover:bg-gray-700 transition-colors duration-200 bg-opacity-60 md:h-10 md:w-10`}
            onClick={favoriteSetter}
            >
            <Bookmark className={`${(favoriteIcon) ? "text-yellow-500" : ""} transition duration-500 text-2xl`}  />
            <p className={`text-xs`}>
            {favoriteCount} 
            </p>
        </button>

    </div>
  )
}