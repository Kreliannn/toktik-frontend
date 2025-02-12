"use client"

import { TextField, Button, Card, CardContent, Typography, InputAdornment, Divider } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import type { signInInterface } from "@/app/interface/account"
import useUserStore from "@/app/store/userStore"
import { useRouter } from "next/navigation"
import { errorAlert } from "@/app/hooks/alert"
import NavbarHome from "@/app/components/navbarComponents/navbarHome"
import Link from "next/link"
import { PersonOutline, LockOutlined } from "@mui/icons-material"

export default function SignIn() {
  const [form, setForm] = useState({
    username: "",   
    password: "",
  })

  const setUser = useUserStore((state) => state.setUser)
  const router = useRouter()

  const formSetter = (field: string, value: string) => setForm({ ...form, [field]: value })

  const mutation = useMutation({
    mutationFn: (data: signInInterface) => axios.post("/sign_in", data),
    onSuccess: (response) => {
      setUser(response.data)
      router.push("/pages/fyp")
    },
    onError: (err) => errorAlert("User not found"),
  })

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <NavbarHome />
      <Card className="w-full max-w-md mx-4 shadow-2xl">
        <CardContent className="p-8">
          <Typography variant="h4" component="h1" className="text-center font-bold mb-6">
            Sign In
          </Typography>
          <form className="space-y-4">
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              value={form.username}
              onChange={(e) => formSetter("username", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={form.password}
              onChange={(e) => formSetter("password", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => mutation.mutate(form)}
              className="bg-gradient-to-br from-gray-900 to-black text-gray-100 hover:bg-gradient-to-br hover:from-gray-700 hover:to-black transition-all duration-300 py-3 text-lg font-semibold"
            >
              Sign In
            </Button>
          </form>
          <Divider className="my-6" />
          <Typography variant="body2" className="text-center">
            Don't have an account?{" "}
            <Link href="/pages/sign_up" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
              Sign Up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

