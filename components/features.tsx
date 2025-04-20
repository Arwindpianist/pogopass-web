"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Globe, Zap, Terminal } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-8 w-8 text-emerald-400" />,
    title: "AES-256 Encryption",
    description: "Military-grade encryption to keep your passwords secure and protected.",
  },
  {
    icon: <Lock className="h-8 w-8 text-emerald-400" />,
    title: "Offline Storage",
    description: "Your passwords never leave your device, ensuring maximum privacy and security.",
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-400" />,
    title: "Cross-Platform",
    description: "Works seamlessly across Linux, macOS, and Windows operating systems.",
  },
  {
    icon: <Zap className="h-8 w-8 text-emerald-400" />,
    title: "Lightweight",
    description: "Minimal resource usage with fast performance, even on older hardware.",
  },
  {
    icon: <Terminal className="h-8 w-8 text-emerald-400" />,
    title: "CLI Interface",
    description: "Simple command-line interface for power users and easy scripting.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            PoGoPass combines security, simplicity, and performance in a lightweight CLI tool.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
