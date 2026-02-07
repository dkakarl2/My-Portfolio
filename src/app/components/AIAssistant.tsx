import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Smile, Search, Briefcase, FolderOpen, Sparkles, ArrowUp, Maximize2, Minimize2, Lightbulb } from 'lucide-react';
import DoodleFramForChat from './DoodleFramForChat';
import { portfolioData } from '@/app/data/portfolioData';

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

function getResponse(question: string): string {
  const lowerQuestion = question.toLowerCase().trim();
  
  // Mayo Clinic / ChemoBuddy project
  if (lowerQuestion.includes('mayo') || lowerQuestion.includes('chemobuddy') || lowerQuestion.includes('best project') || lowerQuestion.includes('favorite project')) {
    return `ChemoBuddy is a chemotherapy education and support platform I designed in collaboration with Mayo Clinic. It helps patients better understand their treatment journey through simplified medical information, visual guidance, and an AI-powered support assistant.\n\nThe goal was to reduce confusion and anxiety by turning overwhelming clinical content into clear, empathetic, and easy-to-follow experiences that help patients feel more prepared and in control.`;
  }
  
  // Tools & Skills
  if (lowerQuestion.includes('tool') || lowerQuestion.includes('software') || lowerQuestion.includes('figma') || lowerQuestion.includes('what do you use')) {
    return `I specialize in end-to-end product design, from research and problem framing to interaction design and polished UI. My strengths include user flows, wireframing, prototyping, usability testing, and turning complex problems into intuitive experiences.\n\nI work primarily with Figma, FigJam, and prototyping tools, and I'm comfortable collaborating with developers using design systems, handoff documentation, and iterative feedback workflows.`;
  }
  
  // All Projects / Portfolio / Work
  if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('work') || lowerQuestion.includes('browse')) {
    let response = "I'd love to show you my work! Here are my key projects:\n\n";
    portfolioData.projects.forEach(project => {
      response += `• **${project.title}** (${project.company}): ${project.description}\n`;
    });
    response += "\nEach project showcases my research-driven, user-centered approach to design.";
    return response;
  }
  
  // Skills overview
  if (lowerQuestion.includes('skill') || lowerQuestion.includes('expertise') || lowerQuestion.includes('what can you do') || lowerQuestion.includes('view my skills')) {
    const designSkills = portfolioData.skills.design.join(', ');
    const tools = portfolioData.skills.tools.join(', ');
    return `I specialize in ${designSkills}. My toolkit includes ${tools}. I focus on creating scalable, accessible, and user-centered design systems.`;
  }
  
  // Experience / Background
  if (lowerQuestion.includes('experience') || lowerQuestion.includes('background') || lowerQuestion.includes('worked') || lowerQuestion.includes('career')) {
    let response = `${portfolioData.personal.description}\n\nMy experience includes:\n`;
    portfolioData.experience.forEach(exp => {
      response += `• **${exp.company}** (${exp.period}) - ${exp.description}\n`;
    });
    response += "\nI've worked across healthcare tech, fintech, and educational platforms.";
    return response;
  }
  
  // Design Process / Approach
  if (lowerQuestion.includes('process') || lowerQuestion.includes('approach') || lowerQuestion.includes('method') || lowerQuestion.includes('how do you')) {
    return `${portfolioData.approach.process}\n\nKey principles I follow: ${portfolioData.approach.principles.join(', ')}.`;
  }
  
  // Roles / Jobs / Opportunities
  if (lowerQuestion.includes('role') || lowerQuestion.includes('job') || lowerQuestion.includes('hiring') || lowerQuestion.includes('opportunity') || lowerQuestion.includes('looking for')) {
    const roles = portfolioData.opportunities.roles.join(', ');
    const interests = portfolioData.opportunities.interests.join(', ');
    return `I'm open to ${roles} — especially opportunities in ${interests}. ${portfolioData.opportunities.availability}`;
  }
  
  // Rocket Design System
  if (lowerQuestion.includes('rocket') || lowerQuestion.includes('design system') || lowerQuestion.includes('edplus') || lowerQuestion.includes('asu')) {
    const rocketProject = portfolioData.projects.find(p => p.id === 'rocket-design-system');
    return `${rocketProject?.description} ${rocketProject?.details} This work is ongoing since ${rocketProject?.duration}.`;
  }
  
  // EduFund
  if (lowerQuestion.includes('edufund') || lowerQuestion.includes('fintech') || lowerQuestion.includes('financial')) {
    const edufundProject = portfolioData.projects.find(p => p.id === 'edufund');
    return `${edufundProject?.description} ${edufundProject?.details} This internship was in ${edufundProject?.duration}.`;
  }
  
  // About / Introduction
  if (lowerQuestion.includes('about') || lowerQuestion.includes('who are you') || lowerQuestion.includes('tell me about') || lowerQuestion.includes('introduce')) {
    return `I'm a curious product designer who loves turning messy, complex problems into experiences that just make sense. I pay close attention to how people think, feel, and move through digital spaces — the small details are where the magic happens.\n\nOutside of screens, I'm someone who enjoys observing everyday interactions, finding inspiration in simple moments, and constantly learning new ways to design with empathy and intention.`;
  }
  
  // Contact
  if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach') || lowerQuestion.includes('get in touch')) {
    return `${portfolioData.opportunities.availability}\n\nYou can reach me at:\n• Email: ${portfolioData.personal.contact.email}\n• LinkedIn: ${portfolioData.personal.contact.linkedin}`;
  }
  
  // Ask me anything / General
  if (lowerQuestion.includes('ask me anything') || lowerQuestion.includes('what can i ask')) {
    return `Great! I'm ${portfolioData.personal.name}, a ${portfolioData.personal.title} passionate about creating user-centered designs. Feel free to ask about:\n\n• My projects (Mayo Clinic ChemoBuddy, Rocket Design System, EduFund, etc.)\n• My design process and approach\n• Tools and skills I use\n• What kind of roles I'm looking for\n• My background and experience\n\nWhat would you like to know?`;
  }
  
  // Default response
  return `Great question! I'm passionate about creating user-centered designs that solve real problems. ${portfolioData.personal.tagline}\n\nFeel free to ask me about my projects, design process, tools, experience, or the kind of roles I'm looking for!`;
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

  const handleSendMessage = (content: string) => {
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

    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: getResponse(content)
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleActionCard = (action: string) => {
    handleSendMessage(action);
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
            <Smile className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400 flex-1 text-left">What tools do you use?</span>
            <div className="bg-black rounded-lg p-2">
              <Search className="w-4 h-4 text-white" />
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
            className={`fixed ${
              isMaximized 
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
                    <h3 className="font-semibold text-base text-black">Chat with Deepika</h3>
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
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        setShowInitialView(true);
                        setMessages([]);
                      }, 300);
                    }}
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
                        onClick={() => handleActionCard("Ask me anything")}
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
                        onClick={() => handleActionCard("Browse portfolio")}
                        className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center gap-3 group"
                      >
                        <div className="w-12 h-12 bg-white border border-black rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                          <FolderOpen className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">Browse portfolio</p>
                          <p className="text-xs text-gray-500 mt-1">Scroll to explore case studies</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleActionCard("View my skills")}
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
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Suggestions</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion.category}
                          onClick={() => handleActionCard(suggestion.category)}
                          className="flex-shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-700">{suggestion.category}</span>
                          <span className="text-gray-400 ml-1">· {suggestion.items[0]}</span>
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
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-black text-white'
                            : 'bg-white text-gray-800 shadow-sm border border-gray-100'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
                  placeholder="Show me your best work…"
                  className="flex-1 px-4 py-2.5 bg-white border-none text-sm focus:outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex-shrink-0 p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed focus:outline-none"
                  aria-label="Send message"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}