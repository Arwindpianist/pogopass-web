"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomCodeBlock from "./custom-code-block"

export default function Installation() {
  return (
    <section id="installation" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Installation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get up and running with PoGoPass in minutes.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="linux" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="linux">Linux</TabsTrigger>
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>

            <TabsContent value="linux" className="mt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Clone the repository</h3>
                  <div className="terminal">
                    <CustomCodeBlock
                      text="git clone https://github.com/arwindpianist/PoGoPass.git"
                      language="bash"
                      showLineNumbers={false}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Navigate to the directory</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="cd PoGoPass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Build the application</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="go build -o pogopass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Make it executable</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="chmod +x pogopass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Move to a directory in your PATH (optional)</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="sudo mv pogopass /usr/local/bin/" language="bash" showLineNumbers={false} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="macos" className="mt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Clone the repository</h3>
                  <div className="terminal">
                    <CustomCodeBlock
                      text="git clone https://github.com/arwindpianist/PoGoPass.git"
                      language="bash"
                      showLineNumbers={false}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Navigate to the directory</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="cd PoGoPass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Build the application</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="go build -o pogopass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Make it executable</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="chmod +x pogopass" language="bash" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Move to a directory in your PATH (optional)</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="sudo mv pogopass /usr/local/bin/" language="bash" showLineNumbers={false} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="windows" className="mt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Clone the repository</h3>
                  <div className="terminal">
                    <CustomCodeBlock
                      text="git clone https://github.com/arwindpianist/PoGoPass.git"
                      language="powershell"
                      showLineNumbers={false}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Navigate to the directory</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="cd PoGoPass" language="powershell" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Build the application</h3>
                  <div className="terminal">
                    <CustomCodeBlock text="go build -o pogopass.exe" language="powershell" showLineNumbers={false} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Add to PATH (optional)</h3>
                  <p className="text-gray-400 mb-2">
                    Move the executable to a directory in your PATH or add the current directory to your PATH
                    environment variable.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
