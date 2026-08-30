import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUp, Sparkles, Maximize2, Minimize2, Zap, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { sendMessageToGemini, resetConversation, isJobDescription } from '@/app/services/geminiService';
import { useNavigate, useLocation } from 'react-router-dom';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  isJDMatch?: boolean;
}

interface MatchCategory {
  name: string;
  score: number;
}

interface MatchRequirement {
  text: string;
  match: boolean;
  impact: 'high' | 'medium' | 'low';
  explanation: string;
}

interface MatchData {
  matchScore: number;
  label: string;
  categories: MatchCategory[];
  requirements: MatchRequirement[];
  summary: string;
  experienceNote?: string;
}

// Visual Match Score Component
function MatchScoreCard({ data }: { data: MatchData }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22c55e'; // Green
    if (score >= 60) return '#f59e0b'; // Amber/Orange
    return '#ef4444'; // Red
  };

  const getScoreColorClass = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-400';
  };

  const getLabelColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-green-500';
    if (score >= 55) return 'text-amber-500';
    return 'text-red-400';
  };

  const getImpactDots = (impact: string) => {
    switch (impact) {
      case 'high': return ['bg-green-500', 'bg-green-500', 'bg-green-500'];
      case 'medium': return ['bg-amber-400', 'bg-amber-400', 'bg-gray-200'];
      case 'low': return ['bg-red-300', 'bg-gray-200', 'bg-gray-200'];
      default: return ['bg-gray-200', 'bg-gray-200', 'bg-gray-200'];
    }
  };

  const getImpactLabel = (impact: string) => {
    switch (impact) {
      case 'high': return 'High Impact';
      case 'medium': return 'Med Impact';
      case 'low': return 'Low Impact';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4 font-['Inter']">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row items-center gap-8">
        {/* Circular Gauge */}
        <div className="relative w-36 h-36 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#f3f4f6"
              strokeWidth="12"
              fill="transparent"
            />
            <motion.circle
              cx="70"
              cy="70"
              r="60"
              stroke={getScoreColor(data.matchScore)}
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={377}
              initial={{ strokeDashoffset: 377 }}
              animate={{ strokeDashoffset: 377 - (377 * data.matchScore) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">{data.matchScore}</span>
            <span className={`text-[9px] font-bold uppercase tracking-wide leading-tight text-center px-2 ${getLabelColor(data.matchScore)}`}>
              {data.label}
            </span>
          </div>
        </div>

        {/* Category Bars */}
        <div className="flex-1 w-full space-y-3">
          {data.categories.map((cat, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[11px] font-medium text-gray-500 uppercase">
                <span>{cat.name}</span>
                <span className={`font-bold ${getScoreColorClass(cat.score)}`}>{cat.score}</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.score}%` }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: getScoreColor(cat.score) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="p-6 bg-gray-50/50 space-y-4">
        {data.requirements.map((req, i) => (
          <div key={i} className="flex items-start gap-3">
            {req.match ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-gray-800">{req.text}</p>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="flex gap-0.5">
                    {getImpactDots(req.impact).map((dotColor, b) => (
                      <div key={b} className={`w-2.5 h-2.5 rounded-sm ${dotColor}`} />
                    ))}
                  </div>
                  <span className="text-[9px] text-gray-400 font-medium whitespace-nowrap">{getImpactLabel(req.impact)}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{req.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      {data.experienceNote && (
        <div className="px-6 py-4 bg-amber-50/60 border-t border-amber-200/50">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-600 text-[10px] font-bold">!</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide mb-1">Experience Note</p>
              <p className="text-xs text-amber-900/70 leading-relaxed">{data.experienceNote}</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 bg-gray-100/50 border-t border-gray-100">
        <p className="text-xs text-gray-600 leading-relaxed italic">
          <strong>Summary:</strong> {data.summary}
        </p>
      </div>
    </div>
  );
}

  // Render bold text (**...**) and markdown links ([text](url))
function renderFormattedText(text: string, onNavigate: (path: string) => void) {
  if (!text) return null;

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

const SUGGESTION_CHIPS = [
  "Tell me about Deepika",
  "What projects has she worked on?",
  "What are her design skills?",
  "Tell me about ChemoBuddy",
  "How does she approach design?",
];

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dockInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide chatbot on case study pages to not conflict with nav arrows
  const isCaseStudyPage = location.pathname.includes('case-study');

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus the input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isTyping) return;

    // Open the chat panel if not open
    if (!isOpen) {
      setIsOpen(true);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setIsTyping(true);

    try {
      const response = await sendMessageToGemini(content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        isJDMatch: isJobDescription(content)
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment!",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setMessages([]);
    resetConversation();
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  if (isCaseStudyPage) return null;

  return (
    <>
      {/* ============================================= */}
      {/* DOCK INPUT BAR — always visible at bottom     */}
      {/* ============================================= */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998]"
          >
            <div
              onClick={() => setIsOpen(true)}
              className="relative flex items-center cursor-text group"
            >
              {/* Glassmorphic dock bar */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  minWidth: '420px',
                  maxWidth: 'calc(100vw - 48px)',
                }}
              >
                {/* AI icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-black shadow-sm flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>

                {/* Placeholder Text (Instead of real input to force expansion) */}
                <span className="flex-1 text-sm text-gray-400 font-['Inter'] select-none">
                  Ask anything about me, my work, skills...
                </span>

                {/* Fake Submit button */}
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-black text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Subtle hint text */}
            <p className="text-[10px] text-gray-400 text-center mt-1.5 font-['Inter']">
              Powered by AI · Paste a job description for match scoring
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================= */}
      {/* CHAT PANEL — expands from dock on interaction */}
      {/* ============================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed z-[9999] flex flex-col overflow-hidden ${
              isMaximized
                ? 'inset-4'
                : 'bottom-6 left-1/2 -translate-x-1/2 w-[680px] max-w-[calc(100vw-32px)]'
            }`}
            style={{
              height: isMaximized ? undefined : 'min(580px, calc(100vh - 80px))',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18), 0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
          >
            {/* ---- Header ---- */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200/50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-black shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-['Inter'] font-semibold text-sm text-gray-900 leading-tight">
                    Ask Deepika's Portfolio
                  </h3>
                  <p className="font-['Inter'] text-[11px] text-gray-400 leading-tight">
                    AI-powered · Ask about work, skills, or paste a JD
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100/60 transition-all"
                    title="Reset conversation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100/60 transition-all"
                  title={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100/60 transition-all"
                  title="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ---- Messages Area ---- */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-5 py-4 scrollbar-thin"
              style={{ 
                scrollBehavior: 'smooth',
              }}
            >
              {/* Custom Scrollbar Styling within the component */}
              <style>{`
                .scrollbar-thin::-webkit-scrollbar {
                  width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                  background: transparent;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                  background: rgba(0, 0, 0, 0.1);
                  border-radius: 10px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              `}</style>

              {messages.length === 0 ? (
                /* Empty state with suggestions */
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100/50 mx-auto mb-3">
                      <Zap className="w-7 h-7 text-black" />
                    </div>
                    <h4 className="font-['Inter'] font-semibold text-base text-gray-900">
                      How can I help?
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-500 max-w-xs">
                      Ask about Deepika's projects, skills, or experience.
                    </p>
                  </div>

                  {/* Suggestion chips */}
                  <div className="flex flex-wrap justify-center gap-2 max-w-md">
                    {SUGGESTION_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleSendMessage(chip)}
                        className="px-3.5 py-2 rounded-full text-xs font-['Inter'] font-medium text-gray-600 bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/50 transition-all duration-200 hover:scale-[1.02]"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat messages */
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-black text-white'
                            : 'bg-gray-100/80 text-gray-800 border border-gray-200/50'
                        }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-wrap font-['Inter']">
                          {message.type === 'user' ? (
                            message.content
                          ) : (
                            renderFormattedText(message.content, handleNavigate)
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100/80 rounded-2xl px-4 py-3 border border-gray-200/50">
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span className="text-xs text-gray-400 font-['Inter']">Thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* ---- Input Area ---- */}
            <div className="px-4 pb-4 pt-2 flex-shrink-0">
              <form
                onSubmit={handleChatSubmit}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100/60 border border-gray-200/50 focus-within:border-gray-300/80 focus-within:bg-white/80 transition-all duration-200 shadow-inner"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, skills, or paste a job description..."
                  className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none font-['Inter']"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed bg-black hover:bg-gray-800 text-white shadow-sm"
                  aria-label="Send message"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </form>
              <p className="text-[10px] text-gray-400 text-center mt-2 font-['Inter']">
                Powered by Google Gemini · Answers only about Deepika's portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
