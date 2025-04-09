"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Github, Headphones, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />

          <Button asChild variant="outline" size="sm" className="ml-2 gap-1 group">
            <Link href="https://github.com/KEX001/Opus" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              <span>Star</span>
            </Link>
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 p-6">
          <nav className="flex flex-col items-center gap-6 pt-8">
            <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <Button asChild variant="outline" size="sm" className="mt-4 gap-1 w-full">
              <Link href="https://github.com/KEX001/Opus" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                <span>Star on GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, setIsMobileMenuOpen = null }) {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#modules", label: "Modules" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#usage", label: "Usage" },
    { href: "https://github.com/KEX001/Opus", label: "GitHub", external: true },
  ]

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`relative text-foreground/80 hover:text-primary transition-colors duration-200 ${
        mobile ? "text-lg py-3" : ""
      }`}
      onClick={() => {
        if (mobile && setIsMobileMenuOpen) {
          setIsMobileMenuOpen(false)
        }
      }}
    >
      <span>{link.label}</span>
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  ))
}
