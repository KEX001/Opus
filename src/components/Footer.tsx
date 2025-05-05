import { Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Music className="h-6 w-6 text-indigo-500" />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Opus V2.0
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The essential logic and integrations powering a next-generation music player built for speed, media
              richness, and Telegram bot interaction.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-10">
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-white transition-colors hover:underline"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#modules"
                    className="text-muted-foreground hover:text-white transition-colors hover:underline"
                  >
                    Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    className="text-muted-foreground hover:text-white transition-colors hover:underline"
                  >
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="#usage" className="text-muted-foreground hover:text-white transition-colors hover:underline">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KEX001/Opus" className="text-muted-foreground hover:text-white transition-colors hover:underline">
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com/kxunall" className="text-muted-foreground hover:text-white transition-colors hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://t.me/ll_KEX_ll" className="text-muted-foreground hover:text-white transition-colors hover:underline">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Opus V2.0 Core. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
