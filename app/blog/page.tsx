'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Conversation: How Multi-Model Platforms Are Changing Everything',
    excerpt: 'Explore how platforms like Gamma AI are revolutionizing the way we interact with artificial intelligence by providing access to multiple AI models in one unified interface.',
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI Technology',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true,
    tags: ['AI', 'Technology', 'Future']
  },
  {
    id: 2,
    title: 'GPT-4 vs Claude 3 vs Gemini Pro: A Comprehensive Comparison',
    excerpt: 'We put the top AI models head-to-head to help you understand which one is best for your specific use cases and requirements.',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Model Comparison',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['GPT-4', 'Claude', 'Gemini', 'Comparison']
  },
  {
    id: 3,
    title: 'Building Better Prompts: Advanced Techniques for AI Conversations',
    excerpt: 'Learn the art and science of prompt engineering to get better results from AI models. Includes practical examples and best practices.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Tutorials',
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['Prompts', 'Tips', 'Best Practices']
  },
  {
    id: 4,
    title: 'Privacy in AI: How We Protect Your Data at Gamma AI',
    excerpt: 'Transparency is key to trust. Learn about our comprehensive approach to data privacy and security in AI conversations.',
    author: 'Emily Zhang',
    date: '2024-01-08',
    readTime: '5 min read',
    category: 'Privacy & Security',
    image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['Privacy', 'Security', 'Data Protection']
  },
  {
    id: 5,
    title: 'The Rise of Conversational AI in Business: Real-World Applications',
    excerpt: 'Discover how businesses are leveraging conversational AI to improve customer service, automate processes, and drive innovation.',
    author: 'David Kim',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Business',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['Business', 'Applications', 'Innovation']
  },
  {
    id: 6,
    title: 'Understanding AI Model Limitations: What You Need to Know',
    excerpt: 'Every AI model has its strengths and limitations. Learn how to work effectively with AI while understanding its boundaries.',
    author: 'Lisa Park',
    date: '2024-01-03',
    readTime: '7 min read',
    category: 'Education',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['Education', 'AI Limitations', 'Understanding']
  }
];

const categories = [
  'All Posts',
  'AI Technology',
  'Model Comparison',
  'Tutorials',
  'Privacy & Security',
  'Business',
  'Education'
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Gamma AI Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Insights & <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with the latest developments in AI technology, platform updates, 
            and insights from our team of AI experts.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>
                    <Button className="rounded-full">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest AI insights, platform updates, 
                and exclusive content delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-2 focus:border-primary/50 focus:outline-none transition-colors"
                />
                <Button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}