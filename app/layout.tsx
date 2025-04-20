import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "PoGoPass - Secure CLI Password Manager",
  description: "Secure, offline, CLI-based password manager built in Go.",
  openGraph: {
    title: "PoGoPass - Secure CLI Password Manager",
    description: "Secure, offline, CLI-based password manager built in Go.",
    url: "https://pogopass.vercel.app",
    siteName: "PoGoPass",
    locale: "en_US",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-gray-950 text-gray-100`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}