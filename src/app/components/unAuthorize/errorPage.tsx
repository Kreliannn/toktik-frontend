"use client"

import Link from "next/link"
import { LockOutlined, Home } from "@mui/icons-material"

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="animate-bounce">
          <LockOutlined className="mx-auto h-24 w-24 text-red-500" />
        </div>
        <h2 className="mt-6 text-4xl font-extrabold text-white">Unauthorized Access</h2>
        <p className="mt-2 text-lg text-gray-300">Oops! You don't have permission to access this page.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-400">If you believe this is an error, please contact support.</p>
      </div>
    </div>
  )
}

