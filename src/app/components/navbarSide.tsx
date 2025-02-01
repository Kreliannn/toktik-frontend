"use client"
import { Home, Group, AddCircleOutline, Notifications, Person } from "@mui/icons-material"

const navItems = [
  { icon: Home, label: "For You" },
  { icon: Group, label: "Following" },
  { icon: AddCircleOutline, label: "Add" },
  { icon: Notifications, label: "Inbox" },
  { icon: Person, label: "Profile" },
]

export function NavbarSide() {
  return (
    <nav className="fixed top-0 left-0 bottom-0 w-64 bg-black text-white flex flex-col items-start py-8 hidden md:block">
      <ul className="flex flex-col items-start space-y-6 w-full">
        {navItems.map((item, index) => (
          <li key={index} className="w-full">
            <button className="flex items-center w-full px-6 py-3 text-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition-colors duration-200 ease-in-out">
              <item.icon className="text-3xl mr-4" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

