"use client"
import { TextField, Button } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import { signInInterface } from "@/app/interface/account"


export default function SignIn()
{
    const [form, setForm] = useState({
        username : "",
        password : ""
    }) 

    const formSetter = (field: string, value: string) => setForm({...form, [field] : value})

    let mutation = useMutation({
        mutationFn : (data: signInInterface) => axios.post("/sign_in", data),
        onSuccess : (response) => alert(response.data),
        onError : (err) => alert("user not found")
    })
    
    return(
        <div className="flex justify-center  place-items-center w-full h-dvh">
            <div className="w-80  border drop-shadow-lg bg-gray-100 p-5">
                <h1 className="text-center text-2xl font-bold mb-3"> sign in </h1>
                <TextField type="text"  label="username" variant="outlined" fullWidth className="mb-3" value={form.username} onChange={(e) => formSetter("username", e.target.value)} />
                <TextField type="text"  label="password" variant="outlined" fullWidth className="mb-3" value={form.password} onChange={(e) => formSetter("password", e.target.value)} />
                <Button variant="contained" fullWidth onClick={()=> mutation.mutate(form)}> sign in </Button>
            </div>
        </div>
    )
}