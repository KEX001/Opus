import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Music } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
            <Music className="h-6 w-6 text-indigo-500" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Opus V2.0
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#modules">Modules</NavLink>
            <NavLink href="#philosophy">Philosophy</NavLink>
            <NavLink href="#usage">Get Started</NavLink>
          </nav>

          <a
            href="#usage"
            className="hidden md:flex items-center px-5 py-2 rounded-full bg-indigo-600/80 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
          >
            Get Started
          </a>

          <button className="md:hidden text-white">
            <svg
              xmlns="https://envs.sh/lSU.jpg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
}
