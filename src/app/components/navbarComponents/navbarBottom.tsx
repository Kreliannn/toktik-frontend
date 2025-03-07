"use client"
import { Home, Group, AddCircleOutline, Notifications, Person } from "@mui/icons-material"
import { useRouter } from "next/navigation"
import useUserStore from "../../store/userStore"


export function NavbarBottom() {
  const router = useRouter()
  const id = useUserStore((state) => state.getUserId)

  const navItems = [
    { icon: Home, label: "For You", page : "/pages/fyp" },
    { icon: Group, label: "Following", page : "/pages/following" },
    { icon: AddCircleOutline, label: "Add", page : "/pages/addPost" },
    { icon: Notifications, label: "Inbox", page : "/pages/notification" },
    { icon: Person, label: "Profile", page : `/pages/profile/${id()}` },
  ]


  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white block md:hidden z-98 border-t border-white">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <button className="flex flex-col items-center focus:outline-none focus:text-primary transition-colors duration-200 ease-in-out" onClick={()=> router.push(item.page)}>
              <item.icon className="text-3xl mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}