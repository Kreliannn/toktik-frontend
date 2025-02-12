"use client"

import { TextField, Button, Card, CardContent, Typography, InputAdornment, Divider } from "@mui/material"
import { useState } from "react"
import axios from "@/app/hooks/api"
import { useMutation } from "@tanstack/react-query"
import type { signUpInterface } from "@/app/interface/account"
import { successAlert, errorAlert } from "@/app/hooks/alert"
import type { Error } from "@/app/interface/onError"
import NavbarHome from "@/app/components/navbarComponents/navbarHome"
import Link from "next/link"
import { PersonOutline, LockOutlined, EmailOutlined, VerifiedUserOutlined } from "@mui/icons-material"

export default function SignUp() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const formSetter = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const mutation = useMutation({
    mutationFn: (data: signUpInterface) => axios.post("/sign_up", data),
    onSuccess: (response) => successAlert(response.data),
    onError: (err: Error) => errorAlert(err.response.data),
  })

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <NavbarHome />
      <Card className="w-full max-w-md mx-4 shadow-2xl ">
        <CardContent className="p-8">
          <Typography variant="h4" component="h1" className="text-center font-bold mb-6 text-gray-800">
            Sign Up
          </Typography>
          <form className="space-y-4">
            <TextField
              type="text"
              label="Full Name"
              variant="outlined"
              fullWidth
              value={form.fullname}
              onChange={(e) => formSetter("fullname", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
            />
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
                    <EmailOutlined />
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
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              value={form.confirmPassword}
              onChange={(e) => formSetter("confirmPassword", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VerifiedUserOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => mutation.mutate(form)}
              className="bg-gradient-to-br from-gray-900 to-black text-gray-100 hover:bg-gradient-to-br hover:from-gray-700 hover:to-black transition-colors duration-300 py-3 text-lg font-semibold"
            >
              Sign Up
            </Button>
          </form>
          <Divider className="my-6" />
          <Typography variant="body2" className="text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/pages/sign_in" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Sign In
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

