# Gamma AI - Ai Chat Assistant

A modern, responsive web application that provides access to multiple AI models through a unified chat interface. Built with Next.js, TypeScript, Tailwind CSS, and featuring beautiful animations and real-time streaming responses.

## 🚀 Features

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

### Pages & Features
- **Home Page**: Hero section with animated elements and feature showcase
- **Chat Interface**: Advanced chat UI with model selector and history sidebar
- **Pricing Page**: Comprehensive pricing tiers with feature comparison
- **About Page**: Company story, team, and mission
- **Privacy Policy**: Detailed privacy information and data handling practices

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
   git clone https://github.com/yourusername/gamma-ai.git
   cd gamma-ai
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

## 🔧 Configuration

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

## 🎨 Customization

### Theme Configuration

The application uses a comprehensive design system with:

- **Color Palette**: Primary (purple), secondary (teal), accent colors
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: 8px grid system
- **Animations**: Consistent timing and easing functions

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
       icon: '🤖'
     }
   ];
   ```

2. **Implement the API integration** in `lib/chat-api.ts`

3. **Add the API key** to your environment variables

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation on mobile
- Adaptive chat interface
- Touch-friendly interactions
- Optimized typography scaling

## 🔒 Privacy & Security

- **Data Encryption**: All data encrypted in transit and at rest
- **API Key Security**: Environment variables for sensitive data
- **Privacy First**: Minimal data collection with user control
- **GDPR Compliant**: Full privacy policy and user rights

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push

### Other Platforms

The application can be deployed on any platform supporting Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect repository and add environment variables
- **DigitalOcean**: Use App Platform with Node.js buildpack

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Caching**: Efficient caching strategies for static assets

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📈 Analytics

Optional analytics integration:

1. **Google Analytics**: Add `NEXT_PUBLIC_GOOGLE_ANALYTICS` to environment
2. **Custom Events**: Track user interactions and model usage
3. **Performance Monitoring**: Monitor API response times and errors

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- **Code Style**: Use Prettier and ESLint configurations
- **Commits**: Follow conventional commit format
- **Testing**: Add tests for new features
- **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact support@gammaai.com

## 🗺️ Roadmap

### Upcoming Features

- [ ] **Voice Chat**: Speech-to-text and text-to-speech integration
- [ ] **Image Generation**: DALL-E and Midjourney integration
- [ ] **File Upload**: Document analysis and processing
- [ ] **Team Collaboration**: Shared workspaces and conversations
- [ ] **API Access**: Public API for developers
- [ ] **Mobile App**: Native iOS and Android applications

### Version History

- **v1.0.0**: Initial release with core chat functionality
- **v1.1.0**: Added pricing page and improved UI
- **v1.2.0**: Enhanced chat history and model selection
- **v1.3.0**: Added about and privacy pages

## 🙏 Acknowledgments

- **OpenAI**: For GPT models and API
- **Anthropic**: For Claude models
- **Google**: For Gemini models
- **Vercel**: For hosting and deployment platform
- **Shadcn**: For beautiful UI components
- **Community**: For feedback and contributions

---

**Built with ❤️ by the Gamma AI Team**

For more information, visit our [website](https://gammaai.com) or follow us on [Twitter](https://twitter.com/gammaai).