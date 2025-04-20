"use client"

import { useState } from "react"
import { CopyBlock as OriginalCopyBlock, dracula } from "react-code-blocks"
import { Copy, Check } from "lucide-react"

interface CustomCodeBlockProps {
  text: string
  language: string
  showLineNumbers?: boolean
  codeBlock?: boolean
}

export default function CustomCodeBlock({
  text,
  language,
  showLineNumbers = false,
  codeBlock = true,
}: CustomCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <OriginalCopyBlock
        text={text}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock={codeBlock}
      />
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-300" />}
      </button>
    </div>
  )
}
