"use client"

import { motion } from "framer-motion"
import CustomCodeBlock from "./custom-code-block"

const envExample = `# PoGoPass Configuration

# Security settings
PEPPER=PoGoPassPepper!
SALT=PoGoPassSalt1234
HASH_FILE=masterkey.hash`

export default function Configuration() {
  return (
    <section id="configuration" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Configuration</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Configure PoGoPass with these essential environment variables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <p className="text-gray-400 mb-4">
              Create a <code className="bg-gray-800 px-2 py-1 rounded text-emerald-400">.env</code> file in the same
              directory as the executable with these required settings:
            </p>
          </div>

          <div className="terminal">
            <CustomCodeBlock text={envExample} language="bash" showLineNumbers={false} />
          </div>

          <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Configuration Explanation</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <div>
                  <code className="bg-gray-700 px-1 rounded">PEPPER</code>
                  <p className="mt-1">
                    A secret value added to passwords before hashing for additional security. Keep this value consistent
                    and secure.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <div>
                  <code className="bg-gray-700 px-1 rounded">SALT</code>
                  <p className="mt-1">
                    Another security element used in the encryption process. Like the pepper, this should remain
                    consistent.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <div>
                  <code className="bg-gray-700 px-1 rounded">HASH_FILE</code>
                  <p className="mt-1">
                    The filename where the master password hash will be stored. This file is used to verify your master
                    password on login.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-yellow-900/30 p-6 rounded-lg border border-yellow-700/50">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Security Note</h3>
            <p className="text-gray-300">
              For maximum security, you should change the default PEPPER and SALT values to your own unique values. Keep
              these values private and never share them. If you lose these values, you will not be able to decrypt your
              passwords.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
