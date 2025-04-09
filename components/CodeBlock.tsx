"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative group cursor-pointer" onClick={copyToClipboard}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative p-4 bg-black rounded-lg overflow-hidden">
        {/* Tooltip */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            copied ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2 text-primary">
            <Check className="h-5 w-5" />
            <span>Copied!</span>
          </div>
        </div>

        {/* Hint text */}
        <div className="absolute top-2 right-3 text-xs text-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to copy
        </div>

        <pre className="text-sm text-muted-foreground overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
