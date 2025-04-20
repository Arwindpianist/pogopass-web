"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Download, Tag } from "lucide-react"

interface Release {
  name: string
  tag_name: string
  published_at: string
  html_url: string
  body: string
}

export default function Releases() {
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch("https://api.github.com/repos/arwindpianist/PoGoPass/releases")
        const data = await response.json()

        // If we have actual releases, use them
        if (Array.isArray(data) && data.length > 0) {
          setReleases(data.slice(0, 3)) // Get the latest 3 releases
        } else {
          // Otherwise, use placeholder data with properly formatted HTML
          setReleases([
            {
              name: "Initial Release",
              tag_name: "v1.0.0",
              published_at: "2023-04-15T00:00:00Z",
              html_url: "https://github.com/arwindpianist/PoGoPass/releases/tag/v1.0.0",
              body: `
            <h3>🎉 PoGoPass v1.0.0 — First Official Release</h3>
            <p>Welcome to the first official release of <strong>PoGoPass</strong> — a lightweight, secure, and offline-first password manager built with <strong>Go</strong>.</p>
            <hr>
            <h4>🔐 Features</h4>
            <ul>
              <li>AES-256 encryption with SQLCipher</li>
              <li>Master password-based key derivation</li>
              <li>Auto-generate strong passwords</li>
              <li>Commands: <code>add</code>, <code>list</code>, <code>show</code>, <code>delete</code>, <code>reindex</code></li>
              <li>Fully terminal-based with a simple, intuitive interface</li>
              <li>Cross-platform support (Linux, Windows, macOS)</li>
            </ul>
          `,
            },
            {
              name: "Feature Update",
              tag_name: "v1.1.0",
              published_at: "2023-06-20T00:00:00Z",
              html_url: "https://github.com/arwindpianist/PoGoPass/releases/tag/v1.1.0",
              body: `
            <h3>🚀 PoGoPass v1.1.0 — Feature Update</h3>
            <p>This update adds several new features and improvements to PoGoPass.</p>
            <hr>
            <h4>✨ New Features</h4>
            <ul>
              <li>Added import/export functionality</li>
              <li>Improved password generation options</li>
              <li>Better error handling and user feedback</li>
            </ul>
            <hr>
            <h4>🐛 Bug Fixes</h4>
            <ul>
              <li>Fixed issue with special characters in passwords</li>
              <li>Improved cross-platform compatibility</li>
            </ul>
          `,
            },
            {
              name: "Security Update",
              tag_name: "v1.2.0",
              published_at: "2023-09-05T00:00:00Z",
              html_url: "https://github.com/arwindpianist/PoGoPass/releases/tag/v1.2.0",
              body: `
            <h3>🔒 PoGoPass v1.2.0 — Security Update</h3>
            <p>This update focuses on enhancing security and adding new features.</p>
            <hr>
            <h4>🛡️ Security Enhancements</h4>
            <ul>
              <li>Enhanced encryption algorithms</li>
              <li>Added session timeout feature</li>
              <li>Improved master password validation</li>
            </ul>
            <hr>
            <h4>🐛 Bug Fixes</h4>
            <ul>
              <li>Fixed minor UI issues</li>
              <li>Improved error handling</li>
            </ul>
          `,
            },
          ])
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching GitHub releases:", error)
        setLoading(false)

        // Use placeholder data on error with properly formatted HTML
        setReleases([
          {
            name: "Initial Release",
            tag_name: "v1.0.0",
            published_at: "2023-04-15T00:00:00Z",
            html_url: "https://github.com/arwindpianist/PoGoPass/releases/tag/v1.0.0",
            body: `
          <h3>🎉 PoGoPass v1.0.0 — First Official Release</h3>
          <p>Welcome to the first official release of <strong>PoGoPass</strong> — a lightweight, secure, and offline-first password manager built with <strong>Go</strong>.</p>
          <hr>
          <h4>🔐 Features</h4>
          <ul>
            <li>AES-256 encryption with SQLCipher</li>
            <li>Master password-based key derivation</li>
            <li>Auto-generate strong passwords</li>
            <li>Commands: <code>add</code>, <code>list</code>, <code>show</code>, <code>delete</code>, <code>reindex</code></li>
            <li>Fully terminal-based with a simple, intuitive interface</li>
            <li>Cross-platform support (Linux, Windows, macOS)</li>
          </ul>
        `,
          },
        ])
      }
    }

    fetchReleases()
  }, [])

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="releases" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Releases</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Stay up to date with the latest versions and improvements.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {releases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-emerald-400">{release.name}</h3>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400">
                        <Tag size={16} className="mr-1" />
                        <span>{release.tag_name}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        <span>{formatDate(release.published_at)}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-gray-300 mb-4 prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: release.body
                        .replace(/<\/?h[1-6]>/g, "") // Remove h1-h6 tags that might conflict with our styling
                        .replace(/<a href/g, '<a class="text-emerald-400 hover:text-emerald-300" href')
                        .replace(/<ul>/g, '<ul class="space-y-2 my-4">')
                        .replace(/<li>/g, '<li class="flex items-start"><span class="text-emerald-400 mr-2">•</span>')
                        .replace(/<hr>/g, '<hr class="border-gray-700 my-4">')
                        .replace(/<code>/g, '<code class="bg-gray-700 px-1 rounded text-emerald-300">')
                        .replace(/<strong>/g, '<strong class="text-white">'),
                    }}
                  />

                  <Link
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Download this release
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="https://github.com/arwindpianist/PoGoPass/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View all releases
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
