"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Star } from "lucide-react"
import TerminalLogo from "./terminal-logo"

export default function Hero() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch("https://api.github.com/repos/arwindpianist/PoGoPass")
        const data = await response.json()
        setStars(data.stargazers_count)
      } catch (error) {
        console.error("Error fetching GitHub stars:", error)
      }
    }

    fetchStars()
  }, [])

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            PoGoPass
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Secure, offline, CLI-based password manager built in Go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#installation" className="btn-primary">
              Get Started
            </Link>
            <Link
              href="https://github.com/arwindpianist/PoGoPass"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Github size={20} />
              View on GitHub
            </Link>
          </div>

          {stars !== null && (
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full mb-12">
              <Star className="text-yellow-400 mr-2" size={18} />
              <span>{stars} stars on GitHub</span>
            </div>
          )}

          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TerminalLogo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
