import Link from "next/link"
import { Github, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">PoGoPass</h3>
            <p className="text-gray-400">Secure, offline, CLI-based password manager built in Go.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/arwindpianist/PoGoPass"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/arwindpianist/PoGoPass/issues"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Report Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/arwindpianist/PoGoPass/releases"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Releases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">License</h3>
            <p className="text-gray-400">PoGoPass is open source software licensed under the MIT license.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} PoGoPass. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by contributors
            </span>
            <Link
              href="https://github.com/arwindpianist/PoGoPass"
              className="ml-4 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
