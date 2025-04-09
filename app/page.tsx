import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Search,
  Music,
  Zap,
  BotIcon as Robot,
  Globe,
  PenToolIcon as Tools,
  Server,
  RefreshCw,
  BrainCircuit,
} from "lucide-react"
import CodeBlock from "@/components/CodeBlock"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/audio-bg.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-radial from-background/20 to-background" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <span className="text-sm font-medium">Next-Gen Audio Framework</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-display">
                Opus V2.0 Core
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                Async. Modular. Bot-powered. The essential logic and integrations powering a next-generation music
                player built for speed, media richness, and Telegram bot interaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="#usage"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-primary/30 text-foreground font-medium transition-all hover:bg-primary/10 hover:-translate-y-1"
                >
                  Explore Features <Search className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto md:mx-0">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">30+</div>
                  <div className="text-sm text-muted-foreground">Core Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Async Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">5x</div>
                  <div className="text-sm text-muted-foreground">Performance Boost</div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70 animate-pulse" />
                <Image
                  src="/images/audio-visual.jpg"
                  alt="Opus V2.0 Core"
                  width={600}
                  height={600}
                  className="relative rounded-2xl border border-primary/20 shadow-2xl shadow-primary/20 w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block font-display">
              Loaded Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core contains essential logic and integrations for a complete music experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Music className="h-8 w-8" />}
              title="Audio & Media"
              description="Advanced audio processing with ffmpeg, YouTube integration, text-to-speech, and visual media utilities for a complete multimedia experience."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Async & Scheduling"
              description="Non-blocking I/O operations, async MongoDB support, and timed job automation for maximum performance and efficiency."
            />
            <FeatureCard
              icon={<Robot className="h-8 w-8" />}
              title="Bots & AI"
              description="Telegram streaming bots with LLM/AI integration including OpenAI, Bard, and DeepAI for intelligent music interactions."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Web & APIs"
              description="Scraping tools for lyrics and covers, web API integration with bypass tools, and experimental media sources."
            />
            <FeatureCard
              icon={<Tools className="h-8 w-8" />}
              title="Utility & Support"
              description="Math and image tools, data generation, system monitoring, configuration management, and miscellaneous utilities."
            />
            <FeatureCard
              icon={<Server className="h-8 w-8" />}
              title="Deployment & API"
              description="RESTful interfaces with Flask, Git integration, and cloud deployment support for Heroku and other platforms."
            />
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 md:py-32 relative bg-gradient-to-b from-background/90 to-background">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block font-display">
              Core Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential dependencies powering the Opus V2.0 experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard
              icon={<Music className="h-5 w-5" />}
              title="Audio & Media"
              modules={[
                "ffmpeg-python",
                "pydub",
                "gtts",
                "yt-dlp",
                "youtube-search",
                "SpeechRecognition",
                "opencv-python",
              ]}
            />
            <ModuleCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Async & Scheduling"
              modules={["aiofiles", "aiohttp", "asyncio", "motor", "apscheduler"]}
            />
            <ModuleCard
              icon={<Robot className="h-5 w-5" />}
              title="Bots & AI"
              modules={["pyrogram", "python-telegram-bot", "ntgcalls", "py-tgcalls", "openai", "bard"]}
            />
            <ModuleCard
              icon={<Globe className="h-5 w-5" />}
              title="Web & APIs"
              modules={["beautifulsoup4", "search_engine_parser", "httpx", "requests", "cloudscraper"]}
            />
            <ModuleCard
              icon={<Tools className="h-5 w-5" />}
              title="Utility"
              modules={["numpy", "pillow", "Faker", "emojis", "pyfiglet", "psutil"]}
            />
            <ModuleCard
              icon={<Server className="h-5 w-5" />}
              title="Deployment"
              modules={["flask", "flask_restful", "gunicorn", "GitPython", "heroku3"]}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[url('/images/philosophy-bg.jpg')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block font-display">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our development approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PhilosophyCard
              icon={<Zap className="h-8 w-8" />}
              title="Performance First"
              description="We optimize for speed and efficiency at every level, ensuring your audio applications run smoothly even with complex operations."
            />
            <PhilosophyCard
              icon={<RefreshCw className="h-8 w-8" />}
              title="Async Everything"
              description="Non-blocking operations are at the core of our design, allowing for responsive applications that handle multiple tasks simultaneously."
            />
            <PhilosophyCard
              icon={<BrainCircuit className="h-8 w-8" />}
              title="AI Integration"
              description="We embrace the future with seamless AI capabilities, enhancing the audio experience with intelligent features and interactions."
            />
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-20 md:py-32 relative bg-gradient-to-b from-background/90 to-background">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mt-12 p-6 rounded-xl bg-secondary/5 border border-secondary/20">
            <h4 className="text-lg font-semibold mb-2 text-secondary">Note:</h4>
            <p className="text-muted-foreground">
                  The current <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Opus</code> repository
                  contains the stable core modules only. We're actively working on Opus V2.0 — the full-featured music
                  player experience — which will launch as a separate official repo based on user demand. This future
                  release will include VX AI integration, enhanced playback systems, and Opus V2.0 Prime+ capabilities.
                  Stay tuned for updates — and if you're excited about what's coming, let us know!
            </p>
          </div>          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block font-display">
              Get Started
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use stable modules in your own music bot project
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <UsageStep
                title="Open requirements.txt"
                description="In your bot's root directory, find the requirements.txt file."
                code="# requirements.txt in your project"
              />
              <UsageStep
                title="Replace the contents"
                description="Add this line to automatically include all Opus Core dependencies:"
                code="-r https://raw.githubusercontent.com/KEX001/Opus/main/core/codex.txt"
              />
              <UsageStep
                title="Install dependencies"
                description="Run this command in your terminal to install all required modules:"
                code="pip3 install -U -r requirements.txt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl bg-card/40 backdrop-blur-sm border border-primary/10 relative overflow-hidden">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50" />

              <div className="relative">
                <div className="mb-6 text-4xl text-primary opacity-30">"</div>
                <p className="text-lg md:text-xl mb-6 text-foreground/90 italic">
                  Opus Core has completely transformed how I build music bots. The async architecture and modular design
                  make it incredibly flexible while maintaining top performance.
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-secondary">~ Kunal</div>
                    <div className="text-sm text-muted-foreground">[ K E X ]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative p-6 md:p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
      <div className="absolute h-1 top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>

      <h3 className="text-xl font-semibold mb-3 text-secondary font-display">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function ModuleCard({ icon, title, modules }) {
  return (
    <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
      <div className="flex items-center gap-2 mb-4 text-secondary">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>

      <ul className="space-y-1.5">
        {modules.map((module, index) => (
          <li
            key={index}
            className="text-muted-foreground text-sm pl-4 relative hover:text-foreground hover:translate-x-1 transition-all duration-200"
          >
            <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary/50"></span>
            {module}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PhilosophyCard({ icon, title, description }) {
  return (
    <div className="group relative p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="text-primary mb-5 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-secondary font-display">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function UsageStep({ title, description, code }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold mb-2 text-secondary font-display">{title}</h3>
      <p className="text-muted-foreground max-w-xl mb-4">{description}</p>

      <div className="w-full max-w-xl">
        <CodeBlock code={code} />
      </div>
    </div>
  )
}
