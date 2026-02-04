'use client';

import { motion } from 'framer-motion';
import { Bot, Users, Zap, Shield, Globe, Heart, Award, Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    icon: Lightbulb,
    title: 'Offline Capable',
    description: 'Fully functional without internet, ensuring zero distractions.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your notes and embeddings are stored locally, never shared.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Syllabus Focused',
    description: 'AI responses are strictly derived from your uploaded curriculum.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Personalized',
    description: 'Quizzes and study plans tailored to your own learning materials.',
    color: 'from-purple-500 to-pink-500'
  }
];

const team = [
  {
    name: 'FastAPI',
    role: 'Backend Framework',
    bio: 'High-performance web framework for building APIs with Python 3.7+.',
    avatar: '🚀'
  },
  {
    name: 'ChromaDB',
    role: 'Vector Database',
    bio: 'Open-source embedding database for building AI applications with privacy.',
    avatar: '💾'
  },
  {
    name: 'Whisper AI',
    role: 'Speech Recognition',
    bio: 'Robust speech recognition model for converting video lectures to text.',
    avatar: '🎙️'
  },
  {
    name: 'RAG',
    role: 'AI Architecture',
    bio: 'Retrieval-Augmented Generation for accurate, context-aware responses.',
    avatar: '🧠'
  }
];

const milestones = [
  {
    year: '01',
    title: 'Mobile App',
    description: 'Native mobile application for studying on the go.'
  },
  {
    year: '02',
    title: 'Teacher Dashboard',
    description: 'Admin interface for educators to track student progress.'
  },
  {
    year: '03',
    title: 'Analytics',
    description: 'Detailed learning analytics and progress tracking systems.'
  },
  {
    year: '04',
    title: 'Multilingual',
    description: 'Support for OCR and speech recognition in multiple languages.'
  }
];

const stats = [
  { icon: Users, value: 'Secure', label: 'Authentication' },
  { icon: Bot, value: 'Smart', label: 'AI Assistant' },
  { icon: Zap, value: 'Fast', label: 'Processing' },
  { icon: Award, value: 'Exam', label: 'Ready' }
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
              Final Year Project
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transforming Study
              </span>
              <br />
              <span className="text-foreground">Materials into Knowledge</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Students today face the challenge of scattered learning materials. We unify handwritten notes,
              blackboard images, PDFs, and video lectures into a single, intelligent, and queryable knowledge base.
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
                Problem <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Statement</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Study materials are often scattered across various formats—PDFs, images, YouTube links—making revision
                inefficient. Traditional note-taking lacks semantic understanding and intelligent querying capabilities.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our platform solves this by ensuring accurate information retrieval, syllabus syllabus-specific AI assistance,
                and complete data privacy through local processing.
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
                <h3 className="text-xl font-semibold text-center mb-4">Unified Learning</h3>
                <p className="text-muted-foreground text-center">
                  Bringing all your study resources into one searchable, intelligent interface.
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
              System <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why our privacy-first, offline-capable approach is superior for education.
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
              Future <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Enhancements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our roadmap for expanding the platform's capabilities.
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
              Technology <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge open source technologies to ensure performance and privacy.
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
              Start Your Exam Prep Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of organized, intelligent tuition.
              Upload your materials and let the AI build your knowledge base.
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