import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamma AI - Advanced AI Chat Platform',
  description: 'Experience the future of AI conversation with multiple advanced models. Chat, create, and explore with the world\'s most powerful AI assistants.',
  keywords: 'AI, chatbot, GPT, Claude, Gemini, artificial intelligence, conversation',
  authors: [{ name: 'Gamma AI Team' }],
  openGraph: {
    title: 'Gamma AI - Advanced AI Chat Platform',
    description: 'Experience the future of AI conversation with multiple advanced models.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}