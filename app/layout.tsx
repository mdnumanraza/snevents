import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import { StickyMenu } from "./components/StickyMenu"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SNevenets - Premium Event Management Services",
  description: "Professional event planning and management services for all your special occasions.",
  keywords: "event management, wedding planning, corporate events, birthday parties, event decoration, Bangalore",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <StickyMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}

