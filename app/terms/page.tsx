'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By accessing and using Gamma AI\'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
      },
      {
        subtitle: 'Modifications',
        text: 'We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated terms.'
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years old or have parental consent to use our services. By using Gamma AI, you represent that you meet these age requirements and have the legal capacity to enter into this agreement.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Description of Services',
    content: [
      {
        subtitle: 'AI Chat Platform',
        text: 'Gamma AI provides access to multiple artificial intelligence models through a unified chat interface. Our services include real-time conversations, chat history management, and various AI model options.'
      },
      {
        subtitle: 'Service Availability',
        text: 'We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted service. Maintenance, updates, or technical issues may occasionally affect service availability.'
      },
      {
        subtitle: 'Feature Updates',
        text: 'We continuously improve our platform by adding new features, AI models, and capabilities. Some features may be added, modified, or discontinued at our discretion.'
      }
    ]
  },
  {
    id: 'user-accounts',
    title: 'User Accounts and Responsibilities',
    content: [
      {
        subtitle: 'Account Creation',
        text: 'To access certain features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.'
      },
      {
        subtitle: 'Account Security',
        text: 'You are solely responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account or any other breach of security.'
      },
      {
        subtitle: 'User Conduct',
        text: 'You agree not to use our services for illegal activities, harassment, spam, or any purpose that violates applicable laws or regulations. Respect other users and our community guidelines.'
      }
    ]
  },
  {
    id: 'usage-policies',
    title: 'Usage Policies and Restrictions',
    content: [
      {
        subtitle: 'Acceptable Use',
        text: 'Our services are intended for legitimate personal and business use. You may not use our platform to generate harmful, illegal, or inappropriate content.'
      },
      {
        subtitle: 'Prohibited Activities',
        text: 'You may not attempt to reverse engineer, hack, or compromise our systems. Do not share accounts, resell access, or use our services to compete with us directly.'
      },
      {
        subtitle: 'Content Guidelines',
        text: 'While we don\'t monitor all conversations, we reserve the right to review content that violates our policies. Harmful or illegal content may result in account suspension.'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing and Payments',
    content: [
      {
        subtitle: 'Subscription Plans',
        text: 'We offer various subscription plans with different features and usage limits. Billing occurs monthly or annually based on your selected plan.'
      },
      {
        subtitle: 'Payment Processing',
        text: 'Payments are processed securely through third-party payment processors. We do not store your complete payment information on our servers.'
      },
      {
        subtitle: 'Refunds and Cancellations',
        text: 'You may cancel your subscription at any time. Refunds are provided according to our refund policy, typically within 30 days of purchase for annual plans.'
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    content: [
      {
        subtitle: 'Our Rights',
        text: 'Gamma AI, our logo, and our platform are protected by intellectual property laws. You may not use our trademarks or copyrighted materials without permission.'
      },
      {
        subtitle: 'User Content',
        text: 'You retain ownership of content you create using our platform. However, you grant us a license to use, store, and process your content to provide our services.'
      },
      {
        subtitle: 'AI-Generated Content',
        text: 'Content generated by AI models through our platform is subject to the respective AI provider\'s terms. We make no claims of ownership over AI-generated content.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy and Data Protection',
    content: [
      {
        subtitle: 'Data Collection',
        text: 'We collect and process personal data as described in our Privacy Policy. This includes account information, usage data, and conversation history.'
      },
      {
        subtitle: 'Data Security',
        text: 'We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.'
      },
      {
        subtitle: 'Third-Party Services',
        text: 'Our platform integrates with third-party AI providers. Your interactions with these services are subject to their respective privacy policies.'
      }
    ]
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers and Limitations',
    content: [
      {
        subtitle: 'Service Disclaimer',
        text: 'Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of AI-generated content.'
      },
      {
        subtitle: 'AI Limitations',
        text: 'AI models may produce inaccurate, biased, or inappropriate content. Users should verify important information and use their judgment when relying on AI responses.'
      },
      {
        subtitle: 'Limitation of Liability',
        text: 'Our liability is limited to the amount you paid for our services in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages.'
      }
    ]
  }
];

const keyPoints = [
  {
    icon: CheckCircle,
    title: 'Fair Usage',
    description: 'Use our services responsibly and in accordance with applicable laws'
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We protect your data with enterprise-grade security measures'
  },
  {
    icon: Scale,
    title: 'Legal Compliance',
    description: 'Our terms comply with international laws and regulations'
  },
  {
    icon: AlertTriangle,
    title: 'User Responsibility',
    description: 'Users are responsible for their account security and content'
  }
];

export default function TermsPage() {
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
            <FileText className="h-4 w-4 mr-2" />
            Terms of Service
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Terms of <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            These terms govern your use of Gamma AI's services. Please read them carefully 
            to understand your rights and responsibilities when using our platform.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Last updated: January 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>Effective globally</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Key Points</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the most important aspects of our Terms of Service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Terms Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              id={section.id}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {sectionIndex + 1}
                    </div>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary">{item.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl mb-6">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service or need clarification 
                on any provisions, please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@gammaai.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                >
                  Contact Legal Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                >
                  General Support
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200"
              >
                {section.title}
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}