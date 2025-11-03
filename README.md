# Wikipedia Next.js - Modern Wikipedia Search

A modern, beautifully designed Wikipedia search application built with Next.js 14, featuring both traditional and AI-powered semantic search capabilities.

## ✨ Features

- **Simple Search**: Fast, traditional Wikipedia article search with real-time suggestions
- **AI Semantic Search**: Intelligent search powered by OpenAI GPT-3.5 that understands context and provides relevant article recommendations
- **Featured Content**: Browse today's featured article, most-read articles, and historical events
- **Modern UI**: Built with Tailwind CSS and Radix UI components for a sleek, responsive design
- **Dark Mode**: Full dark mode support with theme persistence
- **Image Optimization**: Automatic image optimization using Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- OpenAI API key (for semantic search feature)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheSatyam-Singh/wikipedia-Next.js.git
cd wikipedia-Next.js
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

> **Note**: The semantic search feature requires an OpenAI API key. Simple search works without it.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

Build the optimized production bundle:

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **AI Integration**: OpenAI GPT-3.5
- **HTTP Client**: Axios
- **Type Safety**: TypeScript
- **Animations**: Framer Motion

## 🌐 Deploy on Vercel

The easiest way to deploy this app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TheSatyam-Singh/wikipedia-Next.js)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your `OPENAI_API_KEY` environment variable in Vercel project settings
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for semantic search | Optional (required for AI features) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)
- [OpenAI API](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
