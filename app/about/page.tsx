'use client';

import { motion } from 'framer-motion';
import { Bot, Users, Zap, Shield, Globe, Heart, Award, Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what\'s possible with AI technology.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Every feature we build is designed with our users\' needs and experiences in mind.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Your data and conversations are protected with enterprise-grade security.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making advanced AI accessible to everyone, regardless of technical expertise.',
    color: 'from-purple-500 to-pink-500'
  }
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former AI researcher at Google with 10+ years in machine learning and natural language processing.',
    avatar: '👨‍💻'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-Founder',
    bio: 'Ex-OpenAI engineer specializing in large language models and distributed systems architecture.',
    avatar: '👩‍💻'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader with experience at Microsoft and Anthropic, focused on AI user experiences.',
    avatar: '👨‍🎨'
  },
  {
    name: 'Emily Zhang',
    role: 'Head of Engineering',
    bio: 'Full-stack engineer and former tech lead at Meta, passionate about scalable AI infrastructure.',
    avatar: '👩‍🔬'
  }
];

const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Started with a vision to democratize access to advanced AI models.'
  },
  {
    year: '2023',
    title: 'First Beta Launch',
    description: 'Released our first beta version with GPT-3.5 integration to 100 users.'
  },
  {
    year: '2024',
    title: 'Multi-Model Platform',
    description: 'Expanded to support multiple AI models including Claude and Gemini.'
  },
  {
    year: '2024',
    title: '50K+ Users',
    description: 'Reached 50,000 active users and processed over 1 million conversations.'
  }
];

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: Bot, value: '5+', label: 'AI Models' },
  { icon: Zap, value: '1M+', label: 'Conversations' },
  { icon: Award, value: '99.9%', label: 'Uptime' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full mb-6">
              <Heart className="h-4 w-4 mr-2" />
              About Gamma AI
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Democratizing AI
              </span>
              <br />
              <span className="text-foreground">for Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that advanced AI should be accessible to everyone. Our mission is to break down 
              the barriers between humans and artificial intelligence, creating a future where AI amplifies 
              human potential rather than replacing it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Gamma AI, we're building the future of human-AI collaboration. We envision a world where 
                advanced artificial intelligence is not just accessible to tech giants and researchers, but 
                to creators, students, professionals, and curious minds everywhere.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our platform brings together the world's most powerful AI models in one unified interface, 
                making it easy for anyone to harness the power of artificial intelligence for their unique needs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="font-medium">Accessibility First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  <span className="font-medium">Innovation Driven</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-xl" />
                <Bot className="h-24 w-24 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-center mb-4">AI for Everyone</h3>
                <p className="text-muted-foreground text-center">
                  Breaking down barriers and making advanced AI accessible to all users, 
                  regardless of technical background.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Gamma AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to democratize AI.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8 pb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind Gamma AI, working to make advanced AI accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the AI revolution. Experience the future of human-AI collaboration 
              and help us build a more accessible, intelligent world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/chat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-2xl hover:from-primary/90 hover:to-purple-600/90 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Chatting Now
                <Bot className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:contact@gammaai.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-primary text-primary hover:bg-primary/5 rounded-2xl transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}