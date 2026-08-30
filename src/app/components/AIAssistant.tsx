import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Smile, Search, Briefcase, FolderOpen, Sparkles, ArrowUp, Maximize2, Minimize2, Lightbulb, Zap } from 'lucide-react';
import DoodleFramForChat from './DoodleFramForChat';
import { sendMessageToGemini, resetConversation } from '@/app/services/geminiService';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
}

const suggestions = [
  { category: "My Work", items: ["Projects & Case Studies"] },
  { category: "Experience", items: ["Career Journey"] },
  { category: "Skills", items: ["Expertise & Tools"] },
  { category: "About Me", items: ["Background & Interests"] },
  { category: "Contact Me", items: ["Get in Touch"] }
];

// Helper to render bold text and links, and handle navigation
function renderFormattedText(text: string, onNavigate: (path: string) => void) {
  if (!text) return null;
  // Split by bold (**...**) and links ([...](...)
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const [label, url] = part.slice(1, -1).split('](');
          const isExternal = url.startsWith('http');
          const isHashLink = url.startsWith('/#');

          return (
            <a
              key={index}
              href={url}
              className="text-blue-600 hover:text-blue-800 underline font-medium cursor-pointer"
              onClick={(e) => {
                if (!isExternal) {
                  e.preventDefault();
                  if (isHashLink) {
                    // Navigate to home and then scroll to section
                    onNavigate('/');
                    setTimeout(() => {
                      const sectionId = url.replace('/#', '');
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    onNavigate(url);
                  }
                }
              }}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInitialView, setShowInitialView] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    chatContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop } = chatContainerRef.current;
      setShowScrollToTop(scrollTop > 100);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Switch to chat view if on initial view
    if (showInitialView) {
      setShowInitialView(false);
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    try {
      // Call Gemini API
      const response = await sendMessageToGemini(content);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment!"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionCard = (action: string) => {
    handleSendMessage(action);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    // Optionally close the chat or minimize it
    // setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowInitialView(true);
      setMessages([]);
      resetConversation(); // Reset Gemini conversation history
    }, 300);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998] bg-white text-gray-600 rounded-full px-6 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 flex items-center gap-3 min-w-[320px]"
            aria-label="Open AI Assistant"
          >
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-500 flex-1 text-left">Ask me anything about the portfolio...</span>
            <div className="bg-black rounded-lg p-2">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed ${isMaximized
              ? 'inset-4 w-auto h-auto'
              : 'bottom-6 left-1/2 -translate-x-1/2 w-[800px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-120px)]'
              } z-[9999] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                    <DoodleFramForChat />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-black flex items-center gap-2">
                      Chat with Deepika
                      <span className="text-xs font-normal text-gray-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-500" />
                        AI Powered
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none p-1"
                    aria-label={isMaximized ? "Minimize" : "Maximize"}
                  >
                    {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none p-1"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto bg-gray-50 relative"
            >
              {showInitialView ? (
                /* Initial Welcome View */
                <div className="p-6 space-y-6">

                  {/* Action Cards */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">Here's what you can do:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => handleActionCard("Tell me about Deepika's background and experience")}
                        className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center gap-3 group"
                      >
                        <div className="w-12 h-12 bg-white border border-black rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                          <Briefcase className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">Ask me anything</p>
                          <p className="text-xs text-gray-500 mt-1">About my work, process, or experience</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleActionCard("Show me the projects and case studies")}
                        className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center gap-3 group"
                      >
                        <div className="w-12 h-12 bg-white border border-black rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                          <FolderOpen className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">Browse portfolio</p>
                          <p className="text-xs text-gray-500 mt-1">Explore case studies & projects</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleActionCard("What tools and skills does Deepika have?")}
                        className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center gap-3 group"
                      >
                        <div className="w-12 h-12 bg-white border border-black rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                          <Sparkles className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">View my skills</p>
                          <p className="text-xs text-gray-500 mt-1">Tools, methods & expertise</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-gray-400" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Try asking</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Tell me about ChemoBuddy",
                        "What's your design process?",
                        "Navigate to the About page",
                        "Show me the Playground",
                        "What makes you unique?"
                      ].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleActionCard(suggestion)}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs hover:bg-gray-50 hover:border-gray-300 transition-colors"
                        >
                          <span className="text-gray-700">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Chat Messages View */
                <div className="p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-5 py-3.5 ${message.type === 'user'
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-800 shadow-sm border border-gray-100'
                          }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.type === 'user' ? (
                            message.content
                          ) : (
                            renderFormattedText(message.content, handleNavigate)
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1.5">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                          <span className="text-xs text-gray-400 ml-2">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
              {showScrollToTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="absolute bottom-24 right-6 p-2 bg-white rounded-full shadow-md border border-gray-200 text-gray-600 hover:text-black hover:shadow-lg transition-all z-10"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, skills, experience..."
                  className="flex-1 px-4 py-2.5 bg-white border-none text-sm focus:outline-none placeholder:text-gray-400"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="flex-shrink-0 p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed focus:outline-none"
                  aria-label="Send message"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center mt-2">
                Powered by Google Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}