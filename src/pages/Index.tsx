import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { ModuleCard } from "@/components/ui/module-card";
import { PhilosophyCard } from "@/components/ui/philosophy-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StatsCounter } from "@/components/ui/stats-counter";
import { UsageStep } from "@/components/ui/usage-step";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import {
  ArrowRight,
  Search,
  Music,
  Zap,
  Bot,
  Globe,
  PenTool,
  Server,
  RefreshCw,
  BrainCircuit,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white overflow-hidden">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/audio-bg.jpg')] opacity-5 bg-cover bg-center" />
        
        <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-600 rounded-full filter blur-[120px] opacity-20 animate-pulse delay-1000" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
                <span className="text-sm font-medium">Next-Gen Audio Framework</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gradient font-display leading-tight">
                Opus V2.0 Core
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto md:mx-0">
                Async. Modular. Bot-powered. The essential logic and integrations powering a next-generation music
                player built for speed, media richness, and Telegram bot interaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <GradientButton onClick={() => document.getElementById("usage")?.scrollIntoView()}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
                <GradientButton variant="outline" onClick={() => document.getElementById("features")?.scrollIntoView()}>
                  Explore Features <Search className="ml-2 h-4 w-4" />
                </GradientButton>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto md:mx-0">
                <StatsCounter value="30+" label="Core Modules" />
                <StatsCounter value="100%" label="Async Support" />
                <StatsCounter value="5x" label="Performance Boost" />
              </div>
            </div>

            <div className="flex-1 relative">
              <AnimatedGradient>
                <div className="relative w-full max-w-md mx-auto">
                  <img 
                    src="/images/audio-visual.jpg"
                    alt="Opus V2.0 Core audio visualization"
                    className="relative rounded-2xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/20 w-full h-auto object-cover aspect-square"
                  />
                  
                  <div className="absolute -top-4 -right-4 w-24 h-24 border border-indigo-500/20 rounded-xl rotate-12 animate-float" />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-violet-500/20 rounded-xl -rotate-12 animate-float delay-200" />
                </div>
              </AnimatedGradient>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] to-[#0a0a15]" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading 
            title="Loaded Modules" 
            description="The core contains essential logic and integrations for a complete music experience" 
          />

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
              icon={<Bot className="h-8 w-8" />}
              title="Bots & AI"
              description="Telegram streaming bots with LLM/AI integration including OpenAI, Bard, and DeepAI for intelligent music interactions."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Web & APIs"
              description="Scraping tools for lyrics and covers, web API integration with bypass tools, and experimental media sources."
            />
            <FeatureCard
              icon={<PenTool className="h-8 w-8" />}
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

      <section id="modules" className="py-20 md:py-32 relative bg-gradient-to-b from-[#0a0a15] to-[#0a0a18]">
        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading 
            title="Core Modules" 
            description="Essential dependencies powering the Opus V2.0 experience" 
          />

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
              icon={<Bot className="h-5 w-5" />}
              title="Bots & AI"
              modules={["pyrogram", "python-telegram-bot", "ntgcalls", "py-tgcalls", "openai", "bard"]}
            />
            <ModuleCard
              icon={<Globe className="h-5 w-5" />}
              title="Web & APIs"
              modules={["beautifulsoup4", "search_engine_parser", "httpx", "requests", "cloudscraper"]}
            />
            <ModuleCard
              icon={<PenTool className="h-5 w-5" />}
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

      <section id="philosophy" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[url('/images/philosophy-bg.jpg')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a18] to-[#0a0a12]" />

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading 
            title="Our Philosophy" 
            description="The principles that guide our development approach" 
          />

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

      <section id="usage" className="py-20 md:py-32 relative bg-gradient-to-b from-[#0a0a12] to-[#0a0a15]">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="relative mb-16 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative p-6 md:p-8 bg-black/30 backdrop-blur-sm border border-indigo-500/20 rounded-xl overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <PenTool className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-400">Note</h3>
                  <p className="text-white/70">
                    The current <code className="text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded-md">Opus</code> repository
                    contains the stable core modules only. We're actively working on Opus V2.0 — the full-featured music
                    player experience — which will launch as a separate official repo based on user demand. This future
                    release will include VX AI integration, enhanced playback systems, and Opus V2.0 Prime+ capabilities.
                    Stay tuned for updates — and if you're excited about what's coming, let us know!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SectionHeading 
            title="Get Started" 
            description="Use stable modules in your own music bot project" 
          />
          
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

      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a15] to-[#0a0a12]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <TestimonialCard
              quote="Opus Core has completely transformed how I build music bots. The async architecture and modular design make it incredibly flexible while maintaining top performance."
              author="Kunal"
              title="[ K E X ]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
