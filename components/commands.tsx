"use client"

import { motion } from "framer-motion"

const commands = [
  {
    command: "add",
    description: "Add a new password entry",
    usage: "add -name <service_name> -username <username> -password <password>",
  },
  {
    command: "list",
    description: "List all saved passwords",
    usage: "list",
  },
  {
    command: "delete",
    description: "Delete a password entry by ID",
    usage: "delete -id <entry_id>",
  },
  {
    command: "show",
    description: "Show the decrypted password entry by ID",
    usage: "show -id <entry_id>",
  },
  {
    command: "reindex",
    description: "Rebuild ID order of the database",
    usage: "reindex",
  },
  {
    command: "help",
    description: "Show the help message",
    usage: "help",
  },
  {
    command: "quit",
    description: "Exit the application",
    usage: "quit",
  },
]

export default function Commands() {
  return (
    <section id="commands" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Commands</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            PoGoPass offers a simple and intuitive command-line interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-400/30 hover:scrollbar-thumb-emerald-400/50"
        >
          <div className="min-w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Command
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Usage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {commands.map((cmd, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-emerald-400">{cmd.command}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{cmd.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400">{cmd.usage}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
