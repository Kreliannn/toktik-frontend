import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"
import { Avatar, Button } from "@mui/material"
import { Person, PersonAdd } from "@mui/icons-material"

// Mock data for followers and following
const followers = [
  { id: 1, name: "Alice Johnson", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", image: "/placeholder.svg?height=40&width=40" },
  { id: 1, name: "Alice Johnson", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", image: "/placeholder.svg?height=40&width=40" },
  { id: 1, name: "Alice Johnson", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", image: "/placeholder.svg?height=40&width=40" },
  { id: 1, name: "Alice Johnson", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", image: "/placeholder.svg?height=40&width=40" },
  { id: 1, name: "Alice Johnson", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", image: "/placeholder.svg?height=40&width=40" },
]

const following = [
  { id: 4, name: "David Lee", image: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Eva Green", image: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Frank White", image: "/placeholder.svg?height=40&width=40" },
]

export default function FollowingPage()
{
    return(
        <div className="h-dvh w-full grid grid-cols-12  ">

             <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3  md:block" >
                <NavbarSide />
             </div>
             <div className=" col-span-12 md:col-span-9 ">
             <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Your Connections</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    <h2 className="text-xl font-semibold mb-4">Followers</h2>
                    <ul className="space-y-4 overflow-auto h-96 ">
                        {followers.map((user) => (
                        <li key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                            <Avatar src={user.image} alt={user.name} />
                            <span className="font-medium">{user.name}</span>
                            </div>
                            <Button variant="outlined" startIcon={<PersonAdd />}>
                            Follow
                            </Button>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <h2 className="text-xl font-semibold mb-4">Following</h2>
                    <ul className="space-y-4  overflow-auto h-96">
                        {following.map((user) => (
                        <li key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center space-x-4">
                            <Avatar src={user.image} alt={user.name} />
                            <span className="font-medium">{user.name}</span>
                            </div>
                            <Button variant="outlined" color="secondary" startIcon={<Person />}>
                            Unfollow
                            </Button>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
             </div>

            <NavbarBottom />
        </div>
    )
}