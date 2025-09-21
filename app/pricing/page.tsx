'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with AI',
    icon: Zap,
    color: 'from-gray-500 to-gray-600',
    features: [
      '100 messages per month',
      'Access to GPT-3.5 Turbo',
      'Basic chat history',
      'Standard support',
      'Web access only'
    ],
    limitations: [
      'Limited model access',
      'No priority support',
      'Basic features only'
    ],
    popular: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For professionals and power users',
    icon: Crown,
    color: 'from-blue-500 to-purple-600',
    features: [
      '2,000 messages per month',
      'Access to all AI models',
      'Unlimited chat history',
      'Priority support',
      'API access',
      'Custom model settings',
      'Export conversations',
      'Advanced analytics'
    ],
    limitations: [],
    popular: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations',
    icon: Rocket,
    color: 'from-purple-600 to-pink-600',
    features: [
      'Unlimited messages',
      'All AI models + early access',
      'Team collaboration',
      'Advanced security',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom training',
      'White-label options',
      'Analytics dashboard'
    ],
    limitations: [],
    popular: false,
    cta: 'Contact Sales'
  }
];

const faqs = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What AI models are included?',
    answer: 'Pro and Enterprise plans include access to GPT-4, Claude 3, Gemini Pro, and other cutting-edge models. Free plan includes GPT-3.5 Turbo.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Pro plan comes with a 7-day free trial. No credit card required to start.'
  },
  {
    question: 'How does billing work?',
    answer: 'All plans are billed monthly. You can cancel anytime and will retain access until the end of your billing period.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. Contact support for assistance.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and never store your conversations longer than necessary for service delivery.'
  }
];

export default function PricingPage() {
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
            <Star className="h-4 w-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">AI Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include access to our advanced AI models 
            with no hidden fees or surprise charges.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}>
                <CardHeader className="text-center pb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4 mx-auto`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Compare All Features</h2>
          <p className="text-muted-foreground">See what's included in each plan</p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 font-semibold">Features</th>
                <th className="text-center py-4 px-6 font-semibold">Free</th>
                <th className="text-center py-4 px-6 font-semibold">Pro</th>
                <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly Messages', '100', '2,000', 'Unlimited'],
                ['AI Models', 'GPT-3.5', 'All Models', 'All + Early Access'],
                ['Chat History', 'Basic', 'Unlimited', 'Unlimited'],
                ['API Access', '❌', '✅', '✅'],
                ['Priority Support', '❌', '✅', '✅'],
                ['Team Features', '❌', '❌', '✅'],
                ['Custom Integrations', '❌', '❌', '✅'],
                ['SLA Guarantee', '❌', '❌', '✅']
              ].map(([feature, free, pro, enterprise]) => (
                <tr key={feature} className="border-b hover:bg-muted/30">
                  <td className="py-4 px-6 font-medium">{feature}</td>
                  <td className="py-4 px-6 text-center">{free}</td>
                  <td className="py-4 px-6 text-center">{pro}</td>
                  <td className="py-4 px-6 text-center">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our pricing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}