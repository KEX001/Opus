<h1 align="center">🎧 Opus V2.0 – Core</h1>
<p align="center">
  <i>The heart of the sound. Async. Modular. Bot-powered.</i><br>
  <strong>codex.txt</strong> lives here – your ultimate module manifest.
</p>

---

## 📘 What is This?

The `/core` directory contains the essential logic and integrations powering **Opus V2.0** — a modular, AI-enhanced music player built for speed, media richness, and Telegram bot interaction.

> Core dependencies are tracked in [`codex.txt`](https://raw.githubusercontent.com/KEX001/Opus/main/core/codex.txt).

---

## 🧩 Loaded Modules

### 🎶 Audio & Media
- `ffmpeg-python`, `pydub` — Audio processing & slicing  
- `gtts` — Text-to-speech voice feedback  
- `yt-dlp`, `youtube-search(-python)` — YouTube music handling  
- `SpeechRecognition` — Voice command input  
- `opencv-python`, `img2pdf` — Visual media utilities

### 🔄 Async & Scheduling
- `aiofiles`, `aiohttp`, `asyncio` — Non-blocking I/O  
- `motor` — Async MongoDB support  
- `apscheduler` — Timed jobs & automation

### 🤖 Bots & AI
- `pyrogram`, `python-telegram-bot`, `ntgcalls`, `py-tgcalls` — Telegram streaming bots  
- `bard`, `openai`, `deepai`, `SafoneAPI` — LLM/AI integration  
- `telegraph`, `tgcrypto` — Secure media sharing

### 🌐 Web, Scraping & APIs
- `beautifulsoup4`, `search_engine_parser` — Scraping lyrics, covers  
- `httpx`, `requests`, `cloudscraper` — Web APIs & bypass tools  
- `pornhub-api`, `daxxhub`, `lexica-api` — Experimental media sources

### 🛠 Utility & Support
- `numpy`, `pillow` — Math and image tools  
- `Faker`, `emojis`, `unidecode` — Data generation & text formatting  
- `pyfiglet` — Terminal artwork  
- `psutil`, `pykeyboard` — System monitoring & control  
- `dotenv`, `PyYAML`, `pickledb` — Config & storage  
- `pycountry`, `future`, `pytz`, `wget`, `pyshorteners` — Misc utilities

### 🖥 Deployment & API
- `flask`, `flask_restful`, `gunicorn` — RESTful interfaces  
- `GitPython`, `heroku3` — Git + cloud deployment

---

## 🧭 Philosophy

Opus Core is guided by:

- **Modularity** — Each feature is isolated and swappable  
- **Asynchronicity** — Built for performance  
- **Media-first Design** — Audio, video, and streaming are native  
- **Bot-readiness** — Telegram-first thinking  
- **LLM Compatibility** — AI features out of the box

---

## 🚀 Usage

To use **Opus Core** in your own music bot project:

### 1. Open `requirements.txt`

In your bot’s root directory, find the `requirements.txt` file.

### 2. Replace the contents with:

```txt
-r https://raw.githubusercontent.com/KEX001/Opus/main/core/codex.txt
```
### 3. Install the dependencies:
### Run this in your terminal:

```txt
pip3 install -U -r requirements.txt
```

✅ All Opus Core modules will now be installed automatically.

---

## 🛠 Dev Notes

- `codex.txt` is manually curated — keep it synced with `requirements.txt` and your virtual environment.   
- Fully compatible with **python-3.11.4**

---

> 🎼 **Opus V2.0** — _Let the code play the music._

<p align="center"><i>Maintained by the Opus Dev Collective</i></p>
