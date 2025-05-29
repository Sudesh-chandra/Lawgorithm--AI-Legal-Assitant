import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Mic, User, Bot, AlertTriangle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Updated pattern-based responses using RegExp
const legalRegexResponses: { pattern: RegExp; response: string }[] = [
  {
    pattern: /\b(section\s*420|cheating\s+under\s+ipc)\b/i,
    response: 'Section 420 of IPC deals with cheating and dishonestly inducing delivery of property. It carries imprisonment up to 7 years and a fine.',
  },
  {
    pattern: /\b(divorce|how\s+to\s+get\s+a\s+divorce)\b/i,
    response: 'In India, divorce can be obtained under various personal laws like Hindu Marriage Act, Muslim Personal Law, Special Marriage Act, etc. The grounds include adultery, cruelty, desertion, and mutual consent.',
  },
  {
    pattern: /\bwhat\s+is\s+an?\s+affidavit\b/i,
    response: 'An affidavit is a written sworn statement of fact made voluntarily under oath. It must be signed before a notary public or other authorized officer.',
  },
  {
    pattern: /\bpower\s+of\s+attorney\b/i,
    response: 'Power of Attorney is a legal document that authorizes someone to act on your behalf in legal, financial, or medical matters. It can be general or specific.',
  },
  {
    pattern: /\b(ipc|indian\s+penal\s+code)\b/i,
    response: 'The Indian Penal Code (IPC) is the official criminal code of India. It covers all substantive aspects of criminal law.',
  },
  {
    pattern: /\brti|right\s+to\s+information\b/i,
    response: 'The Right to Information Act (RTI) is an Indian law that sets out the rules and procedures regarding citizens\' right to information from public authorities.',
  },
  {
    pattern: /\bwrit\s+petition\b/i,
    response: 'A writ petition is a petition filed before a court seeking issuance of a writ. In India, five types of writs can be issued: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.',
  },
  {
    pattern: /\bsection\s*302|punishment\s+for\s+murder\b/i,
    response: 'Section 302 of IPC deals with punishment for murder. It carries a death penalty or life imprisonment and a fine.',
  },
  {
    pattern: /\bcopyright\b/i,
    response: 'Copyright in India is governed by the Copyright Act, 1957. It protects original literary, dramatic, musical, and artistic works, cinematograph films, and sound recordings.',
  },
  {
    pattern: /\bdowry\b/i,
    response: 'Dowry is prohibited under the Dowry Prohibition Act, 1961. Giving, taking, or demanding dowry is a punishable offense in India.',
  },
  {
    pattern: /\bbail\b/i,
    response: 'Bail is the release of an accused person from custody, usually under some conditions, while awaiting trial or other court proceedings.',
  },
  {
    pattern: /\bfir|first\s+information\s+report\b/i,
    response: 'An FIR (First Information Report) is a written document prepared by police when they receive information about the commission of a cognizable offence.',
  },
];

const findRegexMatch = (query: string): string | null => {
  for (const { pattern, response } of legalRegexResponses) {
    if (pattern.test(query)) {
      return response;
    }
  }
  return null;
};

const getAIResponse = async (query: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (query.toLowerCase().includes('legal') || query.toLowerCase().includes('law')) {
    return "I can provide general legal information based on Indian laws, but this shouldn't be considered legal advice. For specific legal situations, please consult with a qualified lawyer.";
  }

  return "I'm not sure about that specific legal question. Would you like me to connect you with a lawyer who specializes in this area?";
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Lawgorithm\'s AI legal assistant. How can I help you with your legal questions today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [fallbackTriggered, setFallbackTriggered] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const match = findRegexMatch(input);
    if (match) {
      const responseMessage: Message = {
        id: Date.now().toString(),
        content: match,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, responseMessage]);
      return;
    }

    setIsTyping(true);

    try {
      const response = await getAIResponse(input);

      const shouldTriggerFallback = Math.random() > 0.8;

      if (shouldTriggerFallback) {
        setFallbackTriggered(true);
        setTimeout(() => {
          const fallbackMessage: Message = {
            id: Date.now().toString(),
            content: "I'm having trouble connecting to our main AI service. Using our backup system to answer your query.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, fallbackMessage]);

          setTimeout(() => {
            const responseMessage: Message = {
              id: Date.now().toString(),
              content: response,
              sender: 'bot',
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, responseMessage]);
            setIsTyping(false);
            setFallbackTriggered(false);
          }, 1500);
        }, 1000);
      } else {
        setTimeout(() => {
          const responseMessage: Message = {
            id: Date.now().toString(),
            content: response,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, responseMessage]);
          setIsTyping(false);
        }, 1000);
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setFallbackTriggered(true);

      setTimeout(() => {
        const errorMessage: Message = {
          id: Date.now().toString(),
          content: "I'm having trouble connecting to our services. Please try again or consider speaking with a lawyer directly.",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
        setFallbackTriggered(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setInput('Can you explain Section 420 of IPC?');
        setIsRecording(false);
      }, 2000);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-lg border border-neutral-800 bg-neutral-900 shadow-lg">
      <div className="flex items-center justify-between border-b border-neutral-800 p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700/30">
            <MessageSquare className="h-5 w-5 text-primary-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Legal AI Assistant</h2>
            <p className="text-xs text-neutral-400">Ask any legal question</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex max-w-[80%] items-start space-x-2 rounded-lg px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-800 text-neutral-200'
                }`}
              >
                <div className="mt-1 flex-shrink-0">
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 flex justify-start"
            >
              <div className="flex max-w-[80%] items-start space-x-2 rounded-lg bg-neutral-800 px-4 py-3 text-neutral-200">
                <div className="mt-1 flex-shrink-0">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          )}

          {fallbackTriggered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 rounded-lg bg-warning-500/20 p-3"
            >
              <div className="flex items-center space-x-2 text-warning-500">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">Switching to backup system...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      <div className="border-t border-neutral-800 p-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your legal question..."
              className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              rows={1}
            />
          </div>

          <button
            onClick={toggleRecording}
            className={`rounded-full p-3 transition-colors ${
              isRecording
                ? 'bg-error-500 text-white'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
            }`}
            aria-label={isRecording ? 'Stop recording' : 'Start voice input'}
          >
            <Mic className="h-5 w-5" />
          </button>

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="rounded-full bg-primary-600 p-3 text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-2 text-center">
          <p className="text-xs text-neutral-500">
            Information provided is not legal advice. For specific legal advice, consult a lawyer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
