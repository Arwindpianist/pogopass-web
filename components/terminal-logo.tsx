"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TerminalLogo() {
  const [text, setText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const logo = `
 _______             ______             _______                              
/       \\           /      \\           /       \\                             
$$$$$$$  | ______  /$$$$$$  |  ______  $$$$$$$  | ______    _______  _______ 
$$ |__$$ |/      \\ $$ | _$$/  /      \\ $$ |__$$ |/      \\  /       |/       |
$$    $$//$$$$$$  |$$ |/    |/$$$$$$  |$$    $$/ $$$$$$  |/$$$$$$$//$$$$$$$/ 
$$$$$$/ $$ |  $$ |$$ |$$$$ |$$ |  $$ |$$$$$$$/  /    $$ |$$      \\$$      \\ 
$$ |     $$ \\__$$ |$$ \\__$$ |$$ \\__$$ |$$ |     /$$$$$$$ | $$$$$$  |$$$$$$  |
$$ |     $$    $$/ $$    $$/ $$    $$/ $$ |     $$    $$ |/     $$//     $$/ 
$$/       $$$$$$/   $$$$$$/   $$$$$$/  $$/       $$$$$$$/ $$$$$$$/ $$$$$$$/  `

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= logo.length) {
        setText(logo.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsComplete(true)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal overflow-hidden max-w-full">
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400">terminal</div>
      </div>
      <pre className="whitespace-pre font-mono text-sm md:text-base">
        <code>{text}</code>
      </pre>
      {isComplete && (
        <motion.div
          className="mt-2 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-emerald-400">$</span> _
        </motion.div>
      )}
    </div>
  )
}