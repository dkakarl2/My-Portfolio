// Gemini AI Agent for Portfolio
// TRUE AI agent with smart fallback for quota limits

import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from '@/app/data/portfolioData';

// Get API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Build complete portfolio knowledge for the AI
const PORTFOLIO_KNOWLEDGE = `
# DEEPIKA'S PORTFOLIO - COMPLETE KNOWLEDGE BASE

You are an AI assistant embedded in Deepika's UX design portfolio website. You have complete knowledge about her work and can answer ANY question a visitor might ask.

## WHO IS DEEPIKA?
Name: ${portfolioData.personal.name}
Title: ${portfolioData.personal.title}
Tagline: "${portfolioData.personal.tagline}"
Bio: ${portfolioData.personal.description}
Design Focus: ${portfolioData.personal.focus}
Design Approach: ${portfolioData.personal.approach}
Philosophy: "${portfolioData.personal.philosophy}"
Current Status: ${portfolioData.personal.status}
Email: ${portfolioData.personal.contact.email}
LinkedIn: ${portfolioData.personal.contact.linkedin}

## DEEPIKA'S PROJECTS (CASE STUDIES)

${portfolioData.projects.map(p => `
### ${p.title}
- Client/Company: ${p.company}
- Role: ${p.role}
- When: ${p.timeline} (${p.duration})
- Summary: ${p.description}
- Detailed Work: ${p.details}
- Impact: ${p.impact}
- URL: ${p.link || 'Not published'}
`).join('\n')}

## SKILLS
Design: ${portfolioData.skills.design.join(', ')}
Tools: ${portfolioData.skills.tools.join(', ')}
Methods: ${portfolioData.skills.methods.join(', ')}
Strengths: ${portfolioData.skills.strengths.join(', ')}

## EXPERIENCE
${portfolioData.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

## DESIGN PROCESS
${portfolioData.approach.process}
Principles: ${portfolioData.approach.principles.join(', ')}

## LOOKING FOR
Roles: ${portfolioData.opportunities.roles.join(', ')}
Interests: ${portfolioData.opportunities.interests.join(', ')}
Status: ${portfolioData.opportunities.availability}

## NAVIGATION
- Home: /
- About: /about
- Mayo Clinic Case Study: /mayo-clinic-case-study
- EdPlus Hackathon: /ed-plus-hackathon-case-study
- EduFund: /edu-fund-case-study
- Playground: /#playground

## RESPONSE STYLE
Be friendly, warm, conversational. Answer any question naturally. Use **bold** for emphasis and [links](/path) for navigation.
`;

// Initialize Gemini AI
let genAI: GoogleGenerativeAI | null = null;
let chatSession: any = null;
let isInitialized = false;
let retryAfter = 0;

// Initialize the AI
async function initializeGemini(): Promise<boolean> {
    if (isInitialized && chatSession) return true;
    if (!GEMINI_API_KEY) {
        console.error('No Gemini API key found');
        return false;
    }

    try {
        console.log('🚀 Initializing Gemini AI...');
        genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: PORTFOLIO_KNOWLEDGE,
        });

        chatSession = model.startChat({
            generationConfig: {
                temperature: 0.9,
                topP: 0.95,
                maxOutputTokens: 512,
            },
        });

        isInitialized = true;
        console.log('✅ Gemini AI ready!');
        return true;
    } catch (error: any) {
        console.error('❌ Gemini init error:', error);
        return false;
    }
}

// Smart fallback that still feels like AI
function getSmartFallback(userMessage: string): string {
    const msg = userMessage.toLowerCase();

    // Greetings
    if (msg.match(/^(hi|hey|hello|hola|yo|sup|what'?s up)/)) {
        return `Hey there! 👋 Great to meet you! I'm the AI assistant for Deepika's portfolio. She's a **UX Designer** who specializes in creating thoughtful, user-centered designs. 

I can tell you about her projects like **ChemoBuddy** (a Mayo Clinic collaboration) or the **Rocket Design System** she built at ASU. What would you like to explore?`;
    }

    // How are you
    if (msg.includes('how are you') || msg.includes('how r u')) {
        return `I'm doing great, thanks for asking! 😊 Always excited to chat about design. Deepika's been doing some amazing work lately - her **ChemoBuddy** project with Mayo Clinic is particularly impressive. It's a companion app helping cancer patients navigate their treatment. Want to hear more about it?`;
    }

    // ChemoBuddy / Mayo Clinic
    if (msg.includes('chemo') || msg.includes('mayo') || msg.includes('clinic') || msg.includes('cancer')) {
        const p = portfolioData.projects.find(p => p.id === 'mayo-clinic');
        return `**ChemoBuddy** is one of Deepika's most impactful projects! 🏥

${p?.description}

As the ${p?.role}, she focused on turning overwhelming chemotherapy journeys into guided, understandable experiences. The impact? ${p?.impact}

[Check out the full case study](/mayo-clinic-case-study) to see her design process!`;
    }

    // Rocket / Design System / EdPlus
    if (msg.includes('rocket') || msg.includes('design system') || msg.includes('edplus') || msg.includes('asu')) {
        const p = portfolioData.projects.find(p => p.id === 'rocket-design-system');
        return `The **Rocket Design System** is Deepika's current focus at EdPlus/ASU! 🚀

${p?.description}

She's building scalable components, variables, and spacing guidelines that ensure consistency across all EdPlus digital products. It's all about **systems thinking** - one of her core strengths!`;
    }

    // EduFund
    if (msg.includes('edufund') || msg.includes('fintech') || msg.includes('finance')) {
        const p = portfolioData.projects.find(p => p.id === 'edufund');
        return `**EduFund** was Deepika's dive into fintech! 💰

${p?.description}

She focused on creating user-centered experiences for students and families navigating financial planning for education. The goal? Making complex financial processes feel simple and trustworthy.`;
    }

    // Skills / Tools
    if (msg.includes('skill') || msg.includes('tool') || msg.includes('figma') || msg.includes('software') || msg.includes('use')) {
        return `Deepika has a solid toolkit! 🛠️

**Design Skills:** ${portfolioData.skills.design.slice(0, 5).join(', ')}

**Tools:** ${portfolioData.skills.tools.join(', ')}

**What sets her apart:** Her focus on **systems thinking**, creating implementation-ready designs, and always considering edge cases. She designs like an architect - with intention, usability, and flow!`;
    }

    // Experience / Background
    if (msg.includes('experience') || msg.includes('work') || msg.includes('background') || msg.includes('career')) {
        return `Here's Deepika's journey so far! 📈

${portfolioData.experience.map(e => `• **${e.role}** at ${e.company} (${e.period})`).join('\n')}

She's a systems-minded UX designer who believes in designing with feasibility in mind. Visit her [About page](/about) for the full story!`;
    }

    // About
    if (msg.includes('about') || msg.includes('who is') || msg.includes('tell me about deepika')) {
        return `Let me introduce Deepika! 👩‍🎨

"${portfolioData.personal.tagline}"

She's a **${portfolioData.personal.title}** focused on ${portfolioData.personal.focus.toLowerCase()}. ${portfolioData.personal.approach}

Want the full story? Check out her [About page](/about)!`;
    }

    // Contact / Hire
    if (msg.includes('contact') || msg.includes('hire') || msg.includes('email') || msg.includes('reach')) {
        return `Great news - Deepika is open to opportunities! 🎯

**Status:** ${portfolioData.opportunities.availability}

**Looking for:** ${portfolioData.opportunities.roles.join(', ')}

**Reach out:**
📧 ${portfolioData.personal.contact.email}
🔗 [LinkedIn](${portfolioData.personal.contact.linkedin})

She'd love to hear from you!`;
    }

    // Projects general
    if (msg.includes('project') || msg.includes('portfolio') || msg.includes('case stud') || msg.includes('work')) {
        return `Here are Deepika's featured projects! 🎨

${portfolioData.projects.map(p => `• **${p.title}** - ${p.description.slice(0, 80)}...`).join('\n')}

Which one catches your eye? I can dive deeper into any of them!`;
    }

    // Process / Approach
    if (msg.includes('process') || msg.includes('approach') || msg.includes('method') || msg.includes('how do you')) {
        return `Deepika's design philosophy is all about **human-centered design**! 

${portfolioData.approach.process}

Her key principles: ${portfolioData.approach.principles.slice(0, 4).join(', ')}. Want to see this in action? Check out the [ChemoBuddy case study](/mayo-clinic-case-study)!`;
    }

    // Default - conversational
    return `That's an interesting question! 🤔 

I'm Deepika's portfolio assistant, and I can help you explore her work. Here's what I know best:

• Her **projects** like ChemoBuddy, Rocket Design System, and EduFund
• Her **skills** in UX design, research, and design systems
• Her **experience** and career journey
• Her **design process** and philosophy

What would you like to know more about?`;
}

// Send message - tries Gemini first, falls back gracefully
export async function sendMessageToGemini(userMessage: string): Promise<string> {
    console.log('📤 User:', userMessage);

    // Check if we're in a rate limit cooldown
    if (retryAfter > Date.now()) {
        console.log('⏳ In cooldown, using smart fallback');
        return getSmartFallback(userMessage);
    }

    // Try to initialize
    if (!isInitialized || !chatSession) {
        const success = await initializeGemini();
        if (!success) {
            return getSmartFallback(userMessage);
        }
    }

    try {
        const result = await chatSession.sendMessage(userMessage);
        const response = result.response.text();
        console.log('📥 Gemini:', response);
        return response;
    } catch (error: any) {
        console.error('❌ Gemini error:', error.message);

        // Handle rate limiting
        if (error.message?.includes('429') || error.message?.includes('quota')) {
            retryAfter = Date.now() + 30000; // 30 second cooldown
            console.log('⏳ Rate limited, switching to smart fallback');
        }

        // Reset for next attempt
        isInitialized = false;
        chatSession = null;

        return getSmartFallback(userMessage);
    }
}

// Reset conversation
export function resetConversation() {
    chatSession = null;
    isInitialized = false;
}
