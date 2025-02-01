"use client"
import { Home, Group, AddCircleOutline, Notifications, Person } from "@mui/icons-material"

const navItems = [
  { icon: Home, label: "For You" },
  { icon: Group, label: "Following" },
  { icon: AddCircleOutline, label: "Add" },
  { icon: Notifications, label: "Inbox" },
  { icon: Person, label: "Profile" },
]

export function NavbarBottom() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <button className="flex flex-col items-center focus:outline-none focus:text-primary transition-colors duration-200 ease-in-out">
              <item.icon className="text-3xl mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}