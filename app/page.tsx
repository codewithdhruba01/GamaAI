'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Shield, Globe, Sparkles, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Bot,
    title: 'Multiple AI Models',
    description: 'Access GPT-4, Claude, Gemini, and more in one unified interface',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Real-time Streaming',
    description: 'Get instant responses with real-time streaming technology',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your conversations are secure and private by design',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Always Available',
    description: '24/7 access to the world\'s most advanced AI assistants',
    color: 'from-purple-500 to-pink-500'
  }
];

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: MessageSquare, value: '1M+', label: 'Conversations' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
  { icon: Sparkles, value: '5+', label: 'AI Models' }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full">
                <Sparkles className="h-4 w-4 mr-2 text-orange-300" />
                Powered by Advanced AI Models
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience the Future
              </span>
              <br />
              <span className="text-foreground">of AI Conversation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Chat with multiple advanced AI models including GPT-4, Claude, and Gemini. 
              Get instant, intelligent responses for any task - from creative writing to complex problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/chat">
                <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start Chatting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-primary/5 transition-all duration-300">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl"
            />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Gamma AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the next generation of AI conversation with cutting-edge features designed for modern users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your AI Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of AI conversation. 
              Start your journey today with our advanced AI models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat">
                <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-background/80 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}