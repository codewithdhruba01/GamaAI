# Gamma AI - Ai Chat Assistant

A modern, responsive web application that provides access to multiple AI models through a unified chat interface. Built with Next.js, TypeScript, Tailwind CSS, and featuring beautiful animations and real-time streaming responses.

## Features

### Core Functionality
- **Multi-Model AI Chat**: Access GPT-4, Claude 3, Gemini Pro, and more in one interface
- **Real-time Streaming**: Get instant responses with streaming technology
- **Chat History**: Persistent conversation history with search and organization
- **Model Selection**: Easy switching between different AI models
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Dark/Light Mode**: Full theme support with system preference detection
- **Beautiful Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithdhruba01/GamaAI.git
   cd gamaai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   GOOGLE_API_KEY=your_google_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### API Keys Setup

The application requires API keys for different AI models. Add these to your `.env.local` file:

- **OpenAI**: Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- **Anthropic**: Get your API key from [Anthropic Console](https://console.anthropic.com/)
- **Google**: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Supported AI Models

| Model | Provider | Description | API Key Required |
|-------|----------|-------------|------------------|
| GPT-4 | OpenAI | Most capable GPT model | OPENAI_API_KEY |
| GPT-3.5 Turbo | OpenAI | Fast and efficient | OPENAI_API_KEY |
| Claude 3 Opus | Anthropic | Most powerful Claude | ANTHROPIC_API_KEY |
| Claude 3 Sonnet | Anthropic | Balanced performance | ANTHROPIC_API_KEY |
| Gemini Pro | Google | Google's advanced model | GOOGLE_API_KEY |


### Adding New AI Models

1. **Update the models configuration** in `lib/ai-models.ts`:
   ```typescript
   export const AI_MODELS: AIModel[] = [
     // ... existing models
     {
       id: 'new-model',
       name: 'New Model',
       provider: 'Provider Name',
       description: 'Model description',
       maxTokens: 4096,
       pricing: { input: 0.001, output: 0.002 },
       capabilities: ['Feature 1', 'Feature 2'],
       icon: ''
     }
   ];
   ```

2. **Implement the API integration** in `lib/chat-api.ts`

3. **Add the API key** to your environment variables


## Deployment

- Vercel


## Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **OpenAI**: For GPT models and API
- **Anthropic**: For Claude models
- **Google**: For Gemini models
- **Vercel**: For hosting and deployment platform
- **Shadcn**: For beautiful UI components
- **Community**: For feedback and contributions
