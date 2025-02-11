"use client"
import { TextField, Button } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import { signInInterface } from "@/app/interface/account"
import useUserStore from "@/app/store/userStore"
import { useRouter } from "next/navigation"
import { errorAlert } from "@/app/hooks/alert"
import NavbarHome from "@/app/components/navbarComponents/navbarHome"

export default function SignIn()
{
    const [form, setForm] = useState({
        username : "",
        password : ""
    }) 

    const setUser = useUserStore((state) => state.setUser)

    const router = useRouter()

    const formSetter = (field: string, value: string) => setForm({...form, [field] : value})

    let mutation = useMutation({
        mutationFn : (data: signInInterface) => axios.post("/sign_in", data),
        onSuccess : (response) => {
            setUser(response.data)
            router.push("/pages/fyp")
        },
        onError : (err) => errorAlert("user not found")
    })


    
    return(
        <div className="flex justify-center  place-items-center w-full h-dvh bg-gradient-to-br from-gray-900 to-black rounded">
            <NavbarHome />
            <div className="w-80  border drop-shadow-lg bg-gray-200 p-5 rounded">
                <h1 className="text-center text-2xl font-bold mb-3"> sign in </h1>
                <TextField type="text"  label="username" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.username} onChange={(e) => formSetter("username", e.target.value)} />
                <TextField type="text"  label="password" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.password} onChange={(e) => formSetter("password", e.target.value)} />
                <Button variant="contained" fullWidth onClick={()=> mutation.mutate(form)}> sign in </Button>
            </div>
        </div>
    )
}