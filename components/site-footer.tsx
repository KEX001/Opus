import Link from "next/link"
import { Github, Headphones, Send } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative py-16 md:py-20 border-t border-primary/10 bg-gradient-to-b from-background to-background/90">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <Headphones className="h-5 w-5" />
            </div>
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-display">
              Opus V2.0
            </div>
          </div>

          <p className="text-muted-foreground text-center max-w-md mb-8">
            Async. Modular. Bot-powered. The heart of the sound.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              Features
            </Link>
            <Link href="#modules" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              Modules
            </Link>
            <Link href="#philosophy" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              Philosophy
            </Link>
            <Link href="#usage" className="text-foreground/80 hover:text-primary transition-colors duration-200">
              Usage
            </Link>
            <Link
              href="https://github.com/KEX001/Opus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              GitHub
            </Link>
          </div>

          <div className="flex gap-4 mb-10">
            <Link
              href="https://github.com/KEX001"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary/10 text-foreground/80 hover:text-primary transition-all duration-200 hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/STORM_TECHH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary/10 text-foreground/80 hover:text-primary transition-all duration-200 hover:-translate-y-1"
            >
              <Send className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">© 2025 Opus. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
