"use client"
import { Button, Typography } from "@mui/material"
import NavbarHome from "./components/navbarComponents/navbarHome"


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-100">
      
      <NavbarHome />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="text-center">
          <Typography variant="h3" component="h2" className="font-bold mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Share Your Moments
          </Typography>
          <Typography variant="h6" component="p" className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-300">
            Create, discover, and go viral on TokTik
          </Typography>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center">
        <Typography variant="body2" className="text-xs sm:text-sm text-gray-500">
          © 2025 TokTik. All rights reserved.
        </Typography>
      </footer>
    </div>
  )
}

