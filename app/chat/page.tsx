'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  User, 
  Send, 
  Loader2, 
  History, 
  Trash2, 
  MessageSquare, 
  ChevronRight, 
  Check, 
  ChevronDown, 
  Zap, 
  Copy,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AI_MODELS, getModelById } from '@/lib/ai-models';

// Types
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  model: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Functions
async function sendToOpenAI(message: string, model: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please add NEXT_PUBLIC_OPENAI_API_KEY to your .env.local file');
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
  const errorText = await response.text();  // Show full response
  throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
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

async function sendToClaude(message: string, model: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    throw new Error('Anthropic API key not found. Please add NEXT_PUBLIC_ANTHROPIC_API_KEY to your .env.local file');
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

async function sendToGemini(message: string, onChunk?: (chunk: string) => void): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  
  if (!apiKey) {
    throw new Error('Google API key not found. Please add NEXT_PUBLIC_GOOGLE_API_KEY to your .env.local file');
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

async function sendMessage(message: string, model: string, onChunk?: (chunk: string) => void): Promise<string> {
  try {
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
        throw new Error(`Unsupported model: ${model}`);
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Local storage functions
const saveChatSession = (session: ChatSession): void => {
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

const getChatSessions = (): ChatSession[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const sessions = localStorage.getItem('gamma-chat-sessions');
    return sessions ? JSON.parse(sessions) : [];
  } catch {
    return [];
  }
};

const deleteChatSession = (sessionId: string): void => {
  if (typeof window === 'undefined') return;
  
  const sessions = getChatSessions().filter(s => s.id !== sessionId);
  localStorage.setItem('gamma-chat-sessions', JSON.stringify(sessions));
};

const generateSessionId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Components
function ModelSelector({ selectedModel, onModelChange }: { selectedModel: string; onModelChange: (modelId: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentModel = AI_MODELS.find(m => m.id === selectedModel) || AI_MODELS[0];

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto justify-between min-w-[200px] h-12 rounded-xl border-2 hover:border-primary/50 transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg">{currentModel.icon}</span>
          <div className="text-left">
            <div className="font-medium">{currentModel.name}</div>
            <div className="text-xs text-muted-foreground">{currentModel.provider}</div>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 w-full sm:w-96 bg-background border-2 rounded-xl shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2 max-h-96 overflow-y-auto">
                {AI_MODELS.map((model) => (
                  <motion.button
                    key={model.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onModelChange(model.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                      model.id === selectedModel
                        ? 'bg-primary/10 border-2 border-primary/20'
                        : 'hover:bg-muted/50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="text-xl">{model.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{model.name}</span>
                            {model.id === selectedModel && (
                              <Check className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            {model.provider} • {model.maxTokens.toLocaleString()} tokens
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {model.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {model.capabilities.slice(0, 3).map((capability) => (
                              <Badge key={capability} variant="secondary" className="text-xs">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Zap className="h-3 w-3" />
                          <span>${model.pricing.input}/1K</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChatMessage({ message, isStreaming }: { message: ChatMessage; isStreaming?: boolean }) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';
  const model = message.model ? getModelById(message.model) : null;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-4 p-4 rounded-2xl ${
        isUser 
          ? 'bg-primary/5 ml-8 border border-primary/10' 
          : 'bg-muted/30 mr-8'
      }`}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
      }`}>
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm">
              {isUser ? 'You' : model?.name || 'AI Assistant'}
            </span>
            {!isUser && model && (
              <span className="text-xs text-muted-foreground">
                {model.icon} {model.provider}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">
              {message.timestamp.toLocaleTimeString()}
            </span>
            {!isUser && (
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="h-6 w-6 p-0 hover:bg-muted"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            )}
          </div>
        </div>
        
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
            {isStreaming && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ChatInput({ onSendMessage, isLoading, disabled }: { onSendMessage: (message: string) => void; isLoading: boolean; disabled?: boolean }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="border-t bg-background/80 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end space-x-3">
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
              disabled={disabled || isLoading}
              className="min-h-[60px] max-h-[200px] resize-none rounded-2xl border-2 focus:border-primary/50 pr-12 py-4 text-sm leading-relaxed"
              style={{ height: 'auto' }}
            />
            
            <div className="absolute bottom-2 right-14 text-xs text-muted-foreground">
              {message.length}/4000
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleSubmit}
              disabled={!message.trim() || isLoading || disabled}
              size="lg"
              className="rounded-2xl h-[60px] w-[60px] p-0 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Explain quantum computing",
            "Write a Python function",
            "Creative writing prompt",
            "Analyze this data"
          ].map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              onClick={() => setMessage(suggestion)}
              disabled={isLoading}
              className="text-xs rounded-full hover:bg-primary/10 transition-all duration-200"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatHistory({ currentSessionId, onSessionSelect, onNewChat }: { currentSessionId?: string; onSessionSelect: (session: ChatSession) => void; onNewChat: () => void }) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = () => {
    const savedSessions = getChatSessions();
    setSessions(savedSessions.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };

  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteChatSession(sessionId);
    loadSessions();
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return 'Today';
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else if (diffInHours < 168) {
      return `${Math.floor(diffInHours / 24)} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <>
      <div className="md:hidden fixed top-20 left-4 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm"
        >
          <History className="h-4 w-4" />
        </Button>
      </div>

      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed md:relative top-0 left-0 h-full w-80 bg-background/95 backdrop-blur-sm border-r z-30 md:z-0"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold flex items-center space-x-2">
                    <History className="h-5 w-5" />
                    <span>Chat History</span>
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="md:hidden"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  onClick={onNewChat}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  New Chat
                </Button>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-2">
                  {sessions.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No chat history yet</p>
                      <p className="text-sm">Start a conversation to see it here</p>
                    </div>
                  ) : (
                    sessions.map((session) => {
                      const model = getModelById(session.model);
                      const isActive = session.id === currentSessionId;
                      
                      return (
                        <motion.div
                          key={session.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`group p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                            isActive
                              ? 'bg-primary/10 border-2 border-primary/20'
                              : 'hover:bg-muted/50 border-2 border-transparent'
                          }`}
                          onClick={() => {
                            onSessionSelect(session);
                            setIsOpen(false);
                          }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                {model && <span className="text-sm">{model.icon}</span>}
                                <span className="text-xs text-muted-foreground">
                                  {model?.name || 'Unknown Model'}
                                </span>
                              </div>
                              <h3 className="font-medium text-sm truncate mb-1">
                                {session.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(new Date(session.updatedAt))} • {session.messages.length} messages
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => handleDeleteSession(session.id, e)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// Main Chat Page Component
export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: generateSessionId(),
      title: 'New Conversation',
      messages: [],
      model: selectedModel,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setCurrentSession(newSession);
    setMessages([]);
    setStreamingMessage('');
    setError(null);
  };

  const handleSendMessage = async (content: string) => {
    if (!currentSession) {
      createNewSession();
    }

    const userMessage: ChatMessage = {
      id: generateSessionId(),
      role: 'user',
      content,
      timestamp: new Date(),
      model: selectedModel
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);
    setStreamingMessage('');
    setError(null);

    try {
      const assistantMessageId = generateSessionId();
      let fullResponse = '';

      await sendMessage(content, selectedModel, (chunk) => {
        fullResponse += chunk;
        setStreamingMessage(fullResponse);
      });

      const assistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: 'assistant',
        content: fullResponse,
        timestamp: new Date(),
        model: selectedModel
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      setStreamingMessage('');

      const updatedSession: ChatSession = {
        ...currentSession!,
        title: currentSession?.title === 'New Conversation' 
          ? content.slice(0, 50) + (content.length > 50 ? '...' : '')
          : currentSession?.title || 'New Conversation',
        messages: finalMessages,
        model: selectedModel,
        updatedAt: new Date()
      };

      setCurrentSession(updatedSession);
      saveChatSession(updatedSession);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while sending the message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSessionSelect = (session: ChatSession) => {
    setCurrentSession(session);
    setMessages(session.messages);
    setSelectedModel(session.model);
    setStreamingMessage('');
    setError(null);
  };

  const handleNewChat = () => {
    createNewSession();
  };

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    setError(null);
  };

  useEffect(() => {
    if (!currentSession) {
      createNewSession();
    }
  }, );

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5">
      <ChatHistory
        currentSessionId={currentSession?.id}
        onSessionSelect={handleSessionSelect}
        onNewChat={handleNewChat}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <div className="border-b bg-background/80 backdrop-blur-sm p-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  {currentSession?.title || 'New Conversation'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {messages.length} messages • {getModelById(selectedModel)?.name}
                </p>
              </div>
            </div>
            <ModelSelector
              selectedModel={selectedModel}
              onModelChange={handleModelChange}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="max-w-4xl mx-auto p-4 space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-destructive text-sm"
              >
                <strong>Error:</strong> {error}
              </motion.div>
            )}

            {messages.length === 0 && !streamingMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="relative mb-6">
                  <Bot className="h-16 w-16 text-primary mx-auto" />
                  <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Welcome to Gamma AI
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Start a conversation with {getModelById(selectedModel)?.name}. Ask questions, get creative, or solve complex problems.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "What can you help me with?",
                    "Explain quantum computing",
                    "Write a creative story",
                    "Help me code a function"
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSendMessage(suggestion)}
                      className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {streamingMessage && (
              <ChatMessage
                message={{
                  id: 'streaming',
                  role: 'assistant',
                  content: streamingMessage,
                  timestamp: new Date(),
                  model: selectedModel
                }}
                isStreaming={true}
              />
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}