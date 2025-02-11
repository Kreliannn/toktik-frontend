"use client"
import { Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function NavbarHome()
{
    const router = useRouter()

    return(
    <header className="p-4 absolute top-1 w-full">
        <div className="container mx-auto flex justify-between items-center  ">
          <Typography variant="h5" component="h1" className="font-bold italic text-white" onClick={()=>router.push("/")}>
            TokTik
          </Typography>
          <nav>
            <Button color="inherit" size="small" className="text-sm mr-2 text-gray-300 hover:text-white" onClick={()=>router.push("/pages/sign_in")} >
              Sign In
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="text-sm border-gray-400 text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white"
              onClick={()=>router.push("/pages/sign_up")}
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </header>
    )
}