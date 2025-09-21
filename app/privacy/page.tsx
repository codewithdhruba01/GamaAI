'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const principles = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Your personal information is encrypted and protected with industry-leading security measures.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We clearly explain what data we collect, how we use it, and who we share it with.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: UserCheck,
    title: 'User Control',
    description: 'You have full control over your data with options to view, edit, or delete your information.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Lock,
    title: 'Minimal Collection',
    description: 'We only collect data that is necessary to provide and improve our services.',
    color: 'from-orange-500 to-red-500'
  }
];

const sections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Account Information',
        text: 'When you create an account, we collect your email address, username, and encrypted password. This information is necessary to provide you with access to our services and to communicate with you about your account.'
      },
      {
        subtitle: 'Usage Data',
        text: 'We collect information about how you use our service, including the AI models you interact with, the frequency of your usage, and general usage patterns. This helps us improve our service and provide better recommendations.'
      },
      {
        subtitle: 'Conversation Data',
        text: 'Your conversations with AI models are temporarily stored to provide context for ongoing conversations and to improve our services. We do not use your conversations to train AI models without your explicit consent.'
      },
      {
        subtitle: 'Technical Information',
        text: 'We automatically collect certain technical information, including your IP address, browser type, device information, and operating system. This information helps us provide technical support and improve our service.'
      }
    ]
  },
  {
    id: 'data-usage',
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Service Provision',
        text: 'We use your information to provide, maintain, and improve our AI chat services, including processing your requests and maintaining your conversation history.'
      },
      {
        subtitle: 'Communication',
        text: 'We may use your contact information to send you important updates about our service, security alerts, and respond to your inquiries.'
      },
      {
        subtitle: 'Analytics and Improvement',
        text: 'We analyze usage patterns and feedback to improve our services, develop new features, and ensure optimal performance.'
      },
      {
        subtitle: 'Security and Compliance',
        text: 'We use your information to detect and prevent fraud, abuse, and other harmful activities, and to comply with legal obligations.'
      }
    ]
  },
  {
    id: 'data-sharing',
    title: 'Information Sharing',
    content: [
      {
        subtitle: 'AI Model Providers',
        text: 'Your messages are sent to third-party AI model providers (OpenAI, Anthropic, Google) to generate responses. These providers have their own privacy policies and data handling practices.'
      },
      {
        subtitle: 'Service Providers',
        text: 'We may share your information with trusted service providers who help us operate our service, such as hosting providers, analytics services, and customer support tools.'
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of our users or others.'
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.'
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      {
        subtitle: 'Encryption',
        text: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your passwords are hashed using industry-standard algorithms.'
      },
      {
        subtitle: 'Access Controls',
        text: 'We implement strict access controls and authentication mechanisms to ensure that only authorized personnel can access your data.'
      },
      {
        subtitle: 'Regular Audits',
        text: 'We conduct regular security audits and assessments to identify and address potential vulnerabilities in our systems.'
      },
      {
        subtitle: 'Incident Response',
        text: 'We have established procedures for detecting, responding to, and recovering from security incidents.'
      }
    ]
  },
  {
    id: 'user-rights',
    title: 'Your Rights and Choices',
    content: [
      {
        subtitle: 'Access and Portability',
        text: 'You can request access to your personal information and receive a copy of your data in a portable format.'
      },
      {
        subtitle: 'Correction and Updates',
        text: 'You can update or correct your account information at any time through your account settings.'
      },
      {
        subtitle: 'Deletion',
        text: 'You can request deletion of your account and associated data. Some information may be retained for legal or legitimate business purposes.'
      },
      {
        subtitle: 'Opt-out',
        text: 'You can opt out of certain communications and data processing activities, subject to the requirements of providing our services.'
      }
    ]
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: [
      {
        subtitle: 'Account Data',
        text: 'We retain your account information for as long as your account is active or as needed to provide you services.'
      },
      {
        subtitle: 'Conversation History',
        text: 'Conversation data is retained according to your account settings and subscription plan. Free users have limited history retention.'
      },
      {
        subtitle: 'Usage Analytics',
        text: 'Aggregated and anonymized usage data may be retained indefinitely for analytics and service improvement purposes.'
      },
      {
        subtitle: 'Legal Requirements',
        text: 'Some data may be retained longer if required by law or for legitimate business purposes such as fraud prevention.'
      }
    ]
  }
];

export default function PrivacyPage() {
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
            <Shield className="h-4 w-4 mr-2" />
            Privacy Policy
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Privacy <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Matters</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            We are committed to protecting your privacy and being transparent about how we collect, 
            use, and protect your information. This policy explains our practices in detail.
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

      {/* Privacy Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Privacy Principles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide how we handle your data and protect your privacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl mb-4`}>
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Privacy Policy Sections */}
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
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@gammaai.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="mailto:support@gammaai.com"
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