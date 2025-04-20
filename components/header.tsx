"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PoGoPass Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-emerald-400">PoGoPass</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({
  mobile = false,
  setIsMenuOpen = () => {},
}: { mobile?: boolean; setIsMenuOpen?: (value: boolean) => void }) {
  const handleClick = () => {
    if (mobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <Link href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors" onClick={handleClick}>
        Features
      </Link>
      <Link
        href="#installation"
        className="text-gray-300 hover:text-emerald-400 transition-colors"
        onClick={handleClick}
      >
        Installation
      </Link>
      <Link href="#commands" className="text-gray-300 hover:text-emerald-400 transition-colors" onClick={handleClick}>
        Commands
      </Link>
      <Link href="#usage" className="text-gray-300 hover:text-emerald-400 transition-colors" onClick={handleClick}>
        Usage
      </Link>
      <Link href="#releases" className="text-gray-300 hover:text-emerald-400 transition-colors" onClick={handleClick}>
        Releases
      </Link>
    </>
  )
}
