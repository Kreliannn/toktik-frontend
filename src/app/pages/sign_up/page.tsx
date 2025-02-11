"use client"
import { TextField, Button } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import { signUpInterface } from "@/app/interface/account"
import { AxiosError } from "axios"
import { successAlert, errorAlert } from '@/app/hooks/alert';
import { Error } from "@/app/interface/onError"
import NavbarHome from "@/app/components/navbarComponents/navbarHome"


export default function SignUp()
{
    const [form, setForm] = useState({
        fullname : "",
        username : "",
        password : "",
        confirmPassword : ""
    })

    const formSetter = (field: string, value: string) => setForm((prev) => ({...prev, [field] : value}))

    const mutation = useMutation({
        mutationFn : (data: signUpInterface) => axios.post("/sign_up", data),
        onSuccess : (response) => successAlert(response.data),
        onError : (err : Error) => errorAlert(err.response.data),
    })

 
    return(
        <div className="flex justify-center place-items-center w-full h-dvh bg-gradient-to-br from-gray-900 to-black rounded">
            <NavbarHome />
            <div className="w-80 h-auto  border drop-shadow-lg bg-gray-100 p-5">
                <h1 className="text-center text-2xl font-bold mb-3"> sign up </h1>
                <TextField type="text"  label="fullname" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.fullname} onChange={(e) => formSetter("fullname", e.target.value)}/>
                <TextField type="text"  label="username" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.username} onChange={(e) => formSetter("username", e.target.value)}/>
                <TextField type="password"  label="password" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.password} onChange={(e) => formSetter("password", e.target.value)}/>
                <TextField type="password"  label="confirm password" variant="outlined" fullWidth sx={{ marginBottom : "10px" }} value={form.confirmPassword} onChange={(e) => formSetter("confirmPassword", e.target.value)}/>
                <Button variant="contained" fullWidth onClick={() => mutation.mutate(form)}> sign in </Button>
            </div>
        </div>
    )
}