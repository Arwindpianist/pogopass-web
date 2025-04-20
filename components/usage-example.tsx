"use client"

import { motion } from "framer-motion"
import CustomCodeBlock from "./custom-code-block"

const usageExample = `✅ Credits: arwindpianist
💡 Get started by entering your master password.
🔑 Enter your master password: Abcd1234!
✅ Master key verified successfully
ℹ️ Enter command (add, list, delete, show, reindex, help, quit):
help
PoGoPass Help:
Usage:
  add     - Add a new password entry
           Usage: add -name <service_name> -username <username> -password <password>
           Example: add -name Tiktok -username arwin -password yourpassword
           If no password is provided, a random password will be generated.

  list    - List all saved passwords
           Usage: list

  delete  - Delete a password entry by ID
           Usage: delete -id <entry_id>
           Example: delete -id 1

  show    - Show the decrypted password entry by ID
           Usage: show -id <entry_id>
           Example: show -id 1

  reindex - Rebuild ID order of the database
           Usage: reindex

  help    - Show this help message
           Usage: help

  quit    - Exit the application
           Usage: quit
ℹ️ Enter command (add, list, delete, show, reindex, help, quit):`

export default function UsageExample() {
  return (
    <section id="usage" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Usage Example</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See PoGoPass in action with this sample session.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="terminal">
            <div className="flex items-center mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400">terminal</div>
            </div>
            <CustomCodeBlock text={usageExample} language="bash" showLineNumbers={false} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
