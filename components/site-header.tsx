"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Github, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
            <Headphones className="h-5 w-5" />
          </div>
          <div>
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-display">
              Opus V2.0
            </div>
            <div className="text-xs text-secondary">The heart of sound</div>
          </div>
        </Link>

        <Button asChild variant="outline" size="sm" className="gap-1 group">
          <Link href="https://github.com/KEX001/Opus" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
            <span>Star</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}
