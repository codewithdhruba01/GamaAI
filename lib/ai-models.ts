export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  maxTokens: number;
  pricing: {
    input: number;
    output: number;
  };
  capabilities: string[];
  icon: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    description: 'Most capable GPT model, great for complex tasks',
    maxTokens: 8192,
    pricing: { input: 0.03, output: 0.06 },
    capabilities: ['Text Generation', 'Code', 'Analysis', 'Creative Writing'],
    icon: '🤖'
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    description: 'Fast and efficient for most conversational tasks',
    maxTokens: 4096,
    pricing: { input: 0.001, output: 0.002 },
    capabilities: ['Text Generation', 'Conversations', 'Quick Tasks'],
    icon: '⚡'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Most powerful Claude model for complex reasoning',
    maxTokens: 200000,
    pricing: { input: 0.015, output: 0.075 },
    capabilities: ['Long Context', 'Analysis', 'Code', 'Research'],
    icon: '🧠'
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    description: 'Balanced performance and speed',
    maxTokens: 200000,
    pricing: { input: 0.003, output: 0.015 },
    capabilities: ['Balanced Tasks', 'Analysis', 'Writing'],
    icon: '🎭'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Google\'s most capable AI model',
    maxTokens: 32768,
    pricing: { input: 0.0005, output: 0.0015 },
    capabilities: ['Multimodal', 'Code', 'Analysis', 'Creative Tasks'],
    icon: '💎'
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return AI_MODELS.find(model => model.id === id);
};