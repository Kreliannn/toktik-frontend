"use client"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";

const client = new QueryClient();

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black as the primary color
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000000", // Label color set to black
          
        },
      },
    },
  },
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={client}> 
          <ThemeProvider theme={customTheme}>
           {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
