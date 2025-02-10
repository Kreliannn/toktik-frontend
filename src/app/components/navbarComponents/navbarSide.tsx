"use client"
import { Home, Group, AddCircleOutline, Notifications, Person } from "@mui/icons-material"
import { useRouter } from "next/navigation"
import useUserStore from "../../store/userStore"





export function NavbarSide() {
  const id = useUserStore((state) => state.getUserId)
  const router = useRouter()

  const navItems = [
    { icon: Home, label: "For You", page : "/pages/fyp" },
    { icon: Group, label: "Following", page : "/pages/" },
    { icon: AddCircleOutline, label: "Add", page : "/pages/addPost" },
    { icon: Notifications, label: "Inbox", page : "/pages/notification" },
    { icon: Person, label: "Profile", page : `/pages/profile/${id()}` },
  ]

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-3/12 bg-black text-white flex flex-col items-start py-8 hidden md:block">
      <ul className="flex flex-col items-start space-y-6 w-full">
        {navItems.map((item, index) => (
          <li key={index} className="w-full">
            <button className="flex items-center w-full px-6 py-3 text-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition-colors duration-200 ease-in-out"  onClick={()=> router.push(item.page)}>
              <item.icon className="text-3xl mr-4" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

