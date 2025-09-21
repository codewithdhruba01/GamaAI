export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  model: string;
  createdAt: Date;
  updatedAt: Date;
}

// OpenAI API Integration
async function sendToOpenAI(message: string, model: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not found in environment variables');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model === 'gpt-4' ? 'gpt-4' : 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      stream: true,
      max_tokens: 2000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let fullResponse = '';

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content || '';
            if (content) {
              fullResponse += content;
              if (onChunk) {
                onChunk(content);
              }
            }
          } catch (e) {
            // Ignore parsing errors for incomplete chunks
          }
        }
      }
    }
  }

  return fullResponse;
}

// Anthropic Claude API Integration
async function sendToClaude(message: string, model: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    throw new Error('Anthropic API key not found in environment variables');
  }

  const claudeModel = model === 'claude-3-opus' ? 'claude-3-opus-20240229' : 'claude-3-sonnet-20240229';

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: claudeModel,
      max_tokens: 2000,
      messages: [{ role: 'user', content: message }],
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.statusText}`);
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let fullResponse = '';

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            if (parsed.type === 'content_block_delta') {
              const content = parsed.delta?.text || '';
              if (content) {
                fullResponse += content;
                if (onChunk) {
                  onChunk(content);
                }
              }
            }
          } catch (e) {
            // Ignore parsing errors
          }
        }
      }
    }
  }

  return fullResponse;
}

// Google Gemini API Integration
async function sendToGemini(message: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
  
  if (!apiKey) {
    throw new Error('Google API key not found in environment variables');
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:streamGenerateContent?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: message }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2000,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Google API error: ${response.statusText}`);
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let fullResponse = '';

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.trim()) {
          try {
            const parsed = JSON.parse(line);
            const content = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
            if (content) {
              fullResponse += content;
              if (onChunk) {
                onChunk(content);
              }
            }
          } catch (e) {
            // Ignore parsing errors
          }
        }
      }
    }
  }

  return fullResponse;
}

// Main function to send message to selected AI model
export async function sendMessage(
  message: string,
  model: string,
  onChunk?: (chunk: string) => void
): Promise<string> {
  try {
    // Route to appropriate AI model based on selection
    switch (model) {
      case 'gpt-4':
      case 'gpt-3.5-turbo':
        return await sendToOpenAI(message, model, onChunk);
      
      case 'claude-3-opus':
      case 'claude-3-sonnet':
        return await sendToClaude(message, model, onChunk);
      
      case 'gemini-pro':
        return await sendToGemini(message, onChunk);
      
      default:
        // Fallback to mock response if model not supported
        return await mockStreamingResponse(message, onChunk);
    }
  } catch (error) {
    console.error('API Error:', error);
    // Fallback to mock response on error
    return await mockStreamingResponse(`I apologize, but I'm having trouble connecting to the ${model} API right now. This is a fallback response. Error: ${error instanceof Error ? error.message : 'Unknown error'}`, onChunk);
  }
}

// Fallback mock streaming response
async function mockStreamingResponse(message: string, onChunk?: (chunk: string) => void): Promise<string> {
  const responses = [
    `I understand you're asking about: "${message}". Let me provide you with a comprehensive response based on my knowledge.`,
    `That's an interesting question about "${message}". Here are some key points to consider:`,
    `Regarding your query about "${message}", I'd be happy to help you explore this topic further.`,
    `Thank you for asking about "${message}". Let me break this down for you step by step.`
  ];
  
  const response = responses[Math.floor(Math.random() * responses.length)];
  const words = response.split(' ');
  let fullResponse = '';
  
  for (let i = 0; i < words.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 50));
    const chunk = words[i] + ' ';
    fullResponse += chunk;
    if (onChunk) {
      onChunk(chunk);
    }
  }
  
  return fullResponse.trim();
}

// Local storage functions for chat history
export const saveChatSession = (session: ChatSession): void => {
  if (typeof window === 'undefined') return;
  
  const sessions = getChatSessions();
  const existingIndex = sessions.findIndex(s => s.id === session.id);
  
  if (existingIndex >= 0) {
    sessions[existingIndex] = session;
  } else {
    sessions.push(session);
  }
  
  localStorage.setItem('gamma-chat-sessions', JSON.stringify(sessions));
};

export const getChatSessions = (): ChatSession[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const sessions = localStorage.getItem('gamma-chat-sessions');
    return sessions ? JSON.parse(sessions) : [];
  } catch {
    return [];
  }
};

export const deleteChatSession = (sessionId: string): void => {
  if (typeof window === 'undefined') return;
  
  const sessions = getChatSessions().filter(s => s.id !== sessionId);
  localStorage.setItem('gamma-chat-sessions', JSON.stringify(sessions));
};

export const generateSessionId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};