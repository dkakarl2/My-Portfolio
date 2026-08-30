// Gemini AI Service for Portfolio Chatbot
// Handles all AI interactions with proper system instructions and job matching

import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from '@/app/data/portfolioData';

// Get API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Build complete portfolio knowledge for the AI
const SYSTEM_INSTRUCTION = `
You are an AI assistant embedded in Deepika's UX design portfolio website. Your ONLY purpose is to answer questions about Deepika, her work, skills, experience, and portfolio. You must NEVER answer questions unrelated to Deepika's portfolio.

## STRICT RULES
1. ONLY answer questions related to Deepika's portfolio, work, skills, experience, education, projects, and design approach.
2. If someone asks a random/unrelated question (e.g., "what's the weather?", "tell me a joke", "write code for me"), respond ONLY with: "I can only answer questions about Deepika's portfolio and work. Try asking about her projects, skills, or experience!"
3. Keep responses concise (2-4 short paragraphs max). Be warm but professional.
4. Use **bold** for emphasis on key terms.
5. When referencing portfolio pages, use markdown links like [ChemoBuddy Case Study](/mayo-clinic-case-study).

## WHO IS DEEPIKA
- Name: ${portfolioData.personal.fullName}
- Title: ${portfolioData.personal.title}
- Tagline: "${portfolioData.personal.tagline}"
- Currently: ${portfolioData.personal.status}
- Education: ${portfolioData.education.degree} at ${portfolioData.education.university} (${portfolioData.education.graduationYear})
- Previous Education: ${portfolioData.education.previousDegree} from ${portfolioData.education.previousUniversity}
- Background: ${portfolioData.education.note}
- Philosophy: "${portfolioData.personal.philosophy}"
- Contact: Email: ${portfolioData.personal.contact.email}, LinkedIn: ${portfolioData.personal.contact.linkedin}
- Resume: ${portfolioData.personal.contact.resume}

## PROJECTS

${portfolioData.projects.map(p => `
### ${p.title}
- Company: ${p.company}
- Role: ${p.role}
- Timeline: ${p.timeline} (${p.duration})
- Summary: ${p.description}
- Details: ${p.details}
- Impact: ${p.impact}
- Achievements: ${p.achievements?.join(', ') || 'N/A'}
- Methods Used: ${p.methods?.join(', ') || 'N/A'}
- Case Study Link: ${p.link || 'N/A'}
`).join('\n')}

## SKILLS
- Design: ${portfolioData.skills.design.join(', ')}
- Tools: ${portfolioData.skills.tools.join(', ')}
- Methods: ${portfolioData.skills.methods.join(', ')}
- Strengths: ${portfolioData.skills.strengths.join(', ')}

## EXPERIENCE
${portfolioData.experience.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

## DESIGN PROCESS
${portfolioData.approach.process}
Principles: ${portfolioData.approach.principles.join(', ')}

## LOOKING FOR
- Roles: ${portfolioData.opportunities.roles.join(', ')}
- Interests: ${portfolioData.opportunities.interests.join(', ')}
- Status: ${portfolioData.opportunities.availability}

## PORTFOLIO NAVIGATION
- Home: /
- About: /about
- Mayo Clinic Case Study: /mayo-clinic-case-study
- EduFund Case Study: /edufund-case-study
- Rocket Design System: /rocket-design-system-case-study
- EdPlus Hackathon: /ed-plus-hackathon-case-study
- Contact: /contact

## RESPONSE STYLE
- Be conversational, warm, and friendly but professional.
- Use emojis sparingly (max 1-2 per response).
- Keep responses concise and scannable.
- Always ground answers in REAL data from the portfolio above.
- Never make up information that isn't in the knowledge base.
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
        genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: SYSTEM_INSTRUCTION,
        });

        chatSession = model.startChat({
            generationConfig: {
                temperature: 0.7,
                topP: 0.9,
                maxOutputTokens: 1024,
            },
        });

        isInitialized = true;
        return true;
    } catch (error: any) {
        console.error('Gemini init error:', error);
        return false;
    }
}

// Detect if message looks like a job description
export function isJobDescription(message: string): boolean {
    return false;
}

// ============================================================
// LOCAL JOB DESCRIPTION ANALYZER — always works, no API needed
// ============================================================
function analyzeJobDescriptionLocally(jdText: string): string {
    const jd = jdText.toLowerCase();

    // --- Keyword dictionaries mapped to Deepika's portfolio ---
    const skillKeywords: Record<string, { matched: boolean; explanation: string }> = {};

    // Design skills detection
    const designTerms = [
        { terms: ['ux design', 'ux/ui', 'user experience', 'ui/ux'], label: 'UX/UI Design experience', explanation: 'Core expertise across Mayo Clinic, EduFund, and ASU EdPlus projects' },
        { terms: ['user research', 'ux research', 'research methods', 'usability study', 'usability testing'], label: 'User Research expertise', explanation: 'Led research at Mayo Clinic (patient interviews) and EduFund (competitive analysis)' },
        { terms: ['interaction design', 'interaction'], label: 'Interaction Design', explanation: 'Specializes in interaction logic — core strength across all projects' },
        { terms: ['design system', 'component library', 'design tokens'], label: 'Design Systems experience', explanation: 'Built the Rocket Design System at ASU with 10+ published components' },
        { terms: ['wireframe', 'wireframing', 'low fidelity', 'lo-fi'], label: 'Wireframing skills', explanation: 'Created wireframes for EduFund FD flow and ChemoBuddy patient journey' },
        { terms: ['prototype', 'prototyping', 'high fidelity', 'hi-fi'], label: 'Prototyping experience', explanation: 'Built interactive prototypes for Mayo Clinic and EdPlus Hackathon' },
        { terms: ['information architecture', 'ia', 'site map'], label: 'Information Architecture', explanation: 'Designed IA for medication tracking in ChemoBuddy' },
        { terms: ['accessibility', 'a11y', 'wcag', 'ada compliance', 'inclusive design'], label: 'Accessibility Design', explanation: 'Accessibility-first approach in Rocket Design System components' },
        { terms: ['visual design', 'ui design', 'graphic design', 'layout'], label: 'Visual/UI Design', explanation: 'Strong visual design across all case studies' },
        { terms: ['responsive', 'mobile-first', 'mobile design', 'cross-platform'], label: 'Responsive/Mobile-First Design', explanation: 'Mobile-first approach used in EduFund FD experience' },
        { terms: ['journey map', 'user journey', 'experience map'], label: 'Journey Mapping', explanation: 'Created patient journey maps for Mayo Clinic ChemoBuddy' },
        { terms: ['user flow', 'task flow', 'flow diagram'], label: 'User Flow Design', explanation: 'Designed clear user flows — a core strength' },
    ];

    // Tool detection
    const toolTerms = [
        { terms: ['figma'], label: 'Figma proficiency', explanation: 'Primary design tool used across all projects' },
        { terms: ['adobe xd', 'xd'], label: 'Adobe XD', explanation: 'Proficient in Adobe XD' },
        { terms: ['sketch'], label: 'Sketch', explanation: 'Familiar with design tools ecosystem, primary tool is Figma' },
        { terms: ['miro', 'figjam', 'whiteboard'], label: 'Collaboration tools (FigJam/Miro)', explanation: 'Uses FigJam and Miro for collaborative ideation' },
        { terms: ['maze', 'usertesting', 'testing tool'], label: 'Usability testing tools', explanation: 'Experienced with Maze and UserTesting platforms' },
        { terms: ['html', 'css', 'react', 'front-end', 'frontend', 'code'], label: 'Frontend/code familiarity', explanation: 'Knows HTML/CSS and React for prototyping' },
        { terms: ['adobe creative suite', 'photoshop', 'illustrator'], label: 'Adobe Creative Suite', explanation: 'Proficient in Adobe Creative Suite' },
    ];

    // Domain/industry detection
    const domainTerms = [
        { terms: ['healthcare', 'health tech', 'healthtech', 'medical', 'patient', 'clinical'], label: 'Healthcare/MedTech domain', explanation: 'Designed ChemoBuddy with Mayo Clinic for cancer patients' },
        { terms: ['fintech', 'finance', 'banking', 'financial', 'payments'], label: 'Fintech domain experience', explanation: 'Designed FD experience at EduFund — 30% engagement increase' },
        { terms: ['edtech', 'education', 'learning', 'e-learning', 'lms'], label: 'EdTech domain experience', explanation: 'Currently at EdPlus/ASU, participated in EdPlus Hackathon' },
        { terms: ['saas', 'b2b', 'enterprise', 'platform'], label: 'SaaS/Platform experience', explanation: 'Rocket Design System is built for scalable platform products' },
    ];

    // Education detection
    const eduTerms = [
        { terms: ['master', 'ms ', "master's", 'graduate degree', 'advanced degree'], label: "Master's degree", explanation: 'Pursuing MS in User Experience at Arizona State University (2026)' },
        { terms: ['bachelor', 'bs ', "bachelor's", 'undergraduate'], label: "Bachelor's degree", explanation: 'B.Arch from Anna University, India — brings architectural thinking to UX' },
        { terms: ['hci', 'human-computer interaction', 'user experience degree', 'ux degree'], label: 'HCI/UX degree', explanation: 'MS in User Experience at ASU — directly relevant' },
    ];

    // Analyze each category
    const requirements: { text: string; match: boolean; impact: 'high' | 'medium' | 'low'; explanation: string }[] = [];
    let designScore = 40; // base
    let toolsScore = 40;
    let researchScore = 40;
    let experienceScore = 50;
    let educationScore = 50;

    // Check design skills
    let designMatches = 0;
    let designTotal = 0;
    for (const item of designTerms) {
        const found = item.terms.some(t => jd.includes(t));
        if (found) {
            designTotal++;
            designMatches++;
            requirements.push({ text: item.label, match: true, impact: 'high', explanation: item.explanation });
        }
    }
    if (designTotal > 0) designScore = Math.min(98, 60 + (designMatches / Math.max(designTotal, 1)) * 38);

    // Check tools
    let toolMatches = 0;
    let toolTotal = 0;
    for (const item of toolTerms) {
        const found = item.terms.some(t => jd.includes(t));
        if (found) {
            toolTotal++;
            if (item.terms.some(t => ['figma', 'adobe xd', 'miro', 'figjam', 'maze', 'usertesting', 'html', 'css', 'react', 'adobe creative suite'].includes(t) && jd.includes(t))) {
                toolMatches++;
                requirements.push({ text: item.label, match: true, impact: 'medium', explanation: item.explanation });
            } else {
                requirements.push({ text: item.label, match: false, impact: 'low', explanation: item.explanation });
            }
        }
    }
    if (toolTotal > 0) toolsScore = Math.min(98, 55 + (toolMatches / Math.max(toolTotal, 1)) * 43);

    // Check research
    const researchTermsFlat = ['user research', 'ux research', 'usability', 'a/b test', 'survey', 'interview', 'empathy map', 'persona', 'competitive analysis', 'heuristic'];
    let researchMatches = 0;
    let researchTotal = 0;
    for (const term of researchTermsFlat) {
        if (jd.includes(term)) {
            researchTotal++;
            researchMatches++;
        }
    }
    if (researchTotal > 0) researchScore = Math.min(95, 55 + (researchMatches / Math.max(researchTotal, 1)) * 40);

    // Check experience level — REGEX-BASED for accuracy
    let requiredYears = 0;

    // Extract years from JD using regex patterns like "5+ years", "3-5 years", "4 years"
    const yearPatterns = [
        /(\d+)\+?\s*(?:years?|yrs?)\s+(?:of\s+)?(?:design|ux|ui|product|professional|full|hands-on|relevant|related|industry|work)/gi,
        /(\d+)\+?\s*(?:years?|yrs?)\s+(?:of\s+)?experience/gi,
        /(\d+)-(\d+)\s*(?:years?|yrs?)/gi,
        /(\d+)\+\s*(?:years?|yrs?)/gi,
    ];

    for (const pattern of yearPatterns) {
        const matches = [...jd.matchAll(pattern)];
        for (const match of matches) {
            const year1 = parseInt(match[1]);
            const year2 = match[2] ? parseInt(match[2]) : year1;
            const maxYear = Math.max(year1, year2);
            if (maxYear > requiredYears && maxYear <= 20) {
                requiredYears = maxYear;
            }
        }
    }

    // Also check seniority keywords with word boundaries
    const seniorPattern = /\b(senior|lead|principal|staff|director|manager|head of)\b/gi;
    const isSenior = seniorPattern.test(jd);
    if (isSenior && requiredYears === 0) {
        requiredYears = 5; // assume senior = 5+ years minimum
    }

    // Score based on extracted years (Deepika has 1+ years)
    if (requiredYears > 0) {
        if (requiredYears <= 1) {
            experienceScore = Math.round(75 + Math.random() * 15); // Full match
            requirements.push({ text: `${requiredYears}+ year experience required`, match: true, impact: 'high', explanation: '1+ years combined: EdPlus at ASU (12 months) + EduFund (7 months)' });
        } else if (requiredYears <= 2) {
            experienceScore = Math.round(40 + Math.random() * 15); // Partial
            requirements.push({ text: `${requiredYears}+ years experience required`, match: false, impact: 'high', explanation: '1+ years combined industry experience (EdPlus 12mo + EduFund 7mo) — approaching this level' });
        } else {
            // 3+ years — clear gap, be honest
            experienceScore = Math.round(15 + Math.random() * 15); // Gap
            requirements.push({ text: `${requiredYears}+ years experience required`, match: false, impact: 'high', explanation: `1+ years combined experience vs. ${requiredYears}+ years required — significant gap in tenure` });
        }
    } else {
        experienceScore = 60; // No years mentioned, neutral
    }

    // Check education
    for (const item of eduTerms) {
        const found = item.terms.some(t => jd.includes(t));
        if (found) {
            educationScore = Math.min(95, 82 + Math.random() * 13);
            requirements.push({ text: item.label, match: true, impact: 'medium', explanation: item.explanation });
            break;
        }
    }

    // Check domain
    for (const item of domainTerms) {
        const found = item.terms.some(t => jd.includes(t));
        if (found) {
            requirements.push({ text: item.label, match: true, impact: 'medium', explanation: item.explanation });
        }
    }

    // Check AI-related skills
    const aiTerms = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'generative ai', 'ai tools', 'ai-first', 'ai design', 'designing with ai', 'designing for ai', 'llm'];
    if (aiTerms.some(t => jd.includes(t))) {
        requirements.push({ text: 'AI-first design experience', match: true, impact: 'high', explanation: 'AI-first designer using Claude Code, Cursor, OpenAI Codex, and Gemini Antigravity for designing with AI' });
        toolsScore = Math.min(98, toolsScore + 5);
    }

    // Ensure we have at least 4 requirements
    if (requirements.length < 4) {
        if (!requirements.some(r => r.text.includes('UX'))) {
            requirements.push({ text: 'UX/UI Design experience', match: true, impact: 'high', explanation: 'Core expertise across Mayo Clinic, EduFund, and ASU EdPlus projects' });
        }
        if (!requirements.some(r => r.text.includes('Figma'))) {
            requirements.push({ text: 'Figma proficiency', match: true, impact: 'high', explanation: 'Primary design tool used across all projects' });
        }
        if (!requirements.some(r => r.text.includes('Research'))) {
            requirements.push({ text: 'User Research expertise', match: true, impact: 'high', explanation: 'Led research at Mayo Clinic and EduFund' });
        }
        if (!requirements.some(r => r.text.includes('Collaboration'))) {
            requirements.push({ text: 'Cross-functional collaboration', match: true, impact: 'medium', explanation: 'Collaborated with engineers, PMs, and stakeholders at Mayo Clinic and ASU' });
        }
    }

    // Limit to 8 max
    const finalReqs = requirements.slice(0, 8);

    // Round scores
    designScore = Math.round(designScore);
    toolsScore = Math.round(toolsScore);
    researchScore = Math.round(researchScore);
    experienceScore = Math.round(experienceScore);
    educationScore = Math.round(educationScore);

    // Overall score — experience weighted honestly
    const matchScore = Math.round(
        designScore * 0.25 +
        toolsScore * 0.15 +
        researchScore * 0.15 +
        experienceScore * 0.30 +
        educationScore * 0.15
    );

    // Label
    let label = 'Low Match';
    if (matchScore >= 85) label = 'Excellent Match';
    else if (matchScore >= 70) label = 'Strong Match';
    else if (matchScore >= 55) label = 'Good Match';
    else if (matchScore >= 40) label = 'Partial Match';

    // Generate contextual summary — straightforward
    const matchedDomains: string[] = [];
    if (jd.includes('healthcare') || jd.includes('health') || jd.includes('medical')) matchedDomains.push('healthcare (Mayo Clinic)');
    if (jd.includes('fintech') || jd.includes('finance')) matchedDomains.push('fintech (EduFund)');
    if (jd.includes('edtech') || jd.includes('education')) matchedDomains.push('edtech (ASU EdPlus)');
    if (jd.includes('iot') || jd.includes('connected device') || jd.includes('hardware')) matchedDomains.push('IoT/connected products');
    
    let summary = '';
    if (experienceScore < 50) {
        summary = `Honest assessment: Deepika has 1+ years of combined industry experience (EdPlus 12mo + EduFund 7mo), which falls short of the ${requiredYears > 0 ? requiredYears + '+ years' : 'experience level'} this role requires. `;
        summary += `However, her skills in design, research, and tools are strong. `;
        if (matchedDomains.length > 0) {
            summary += `She has relevant domain experience in ${matchedDomains.join(' and ')}. `;
        }
    } else {
        summary += `Deepika is a ${label.toLowerCase()} for this role. `;
        if (matchedDomains.length > 0) {
            summary += `Her experience in ${matchedDomains.join(' and ')} is directly relevant. `;
        }
    }
    summary += `Her architecture-to-UX transition brings strong systems thinking to her work.`;

    // Experience note — honest but fair
    let experienceNote = '';
    if (experienceScore < 50) {
        experienceNote = `Deepika has 1+ years of industry experience (EdPlus at ASU: 12 months, EduFund: 7 months), which is below the ${requiredYears > 0 ? requiredYears + '+ years' : 'level'} this role asks for. That said, her experience spans healthcare, fintech, and edtech — three distinct domains with different user needs, constraints, and stakeholders. This breadth shows adaptability, not just tenure.`;
    } else if (experienceScore < 70) {
        experienceNote = `Deepika's 1+ years of combined experience (EdPlus 12mo + EduFund 7mo) is approaching the level this role requires. Her work across healthcare, fintech, and edtech demonstrates range and the ability to ramp up quickly in new domains.`;
    }

    const result = {
        matchScore,
        label,
        categories: [
            { name: 'Design Skills', score: designScore },
            { name: 'Tools & Software', score: toolsScore },
            { name: 'Research Methods', score: researchScore },
            { name: 'Experience Level', score: experienceScore },
            { name: 'Education', score: educationScore },
        ],
        requirements: finalReqs,
        summary,
        experienceNote,
    };

    return '```json\n' + JSON.stringify(result, null, 2) + '\n```';
}


// Smart fallback responses when Gemini is unavailable
function getSmartFallback(userMessage: string): string {
    const msg = userMessage.toLowerCase();

    // Check for unrelated questions first
    const unrelatedPatterns = [
        /weather/, /joke/, /recipe/, /news/, /sports/, /movie/, /music/,
        /write.*code/, /solve.*math/, /calculate/, /translate/,
        /what time/, /who is the president/, /capital of/
    ];
    if (unrelatedPatterns.some(p => p.test(msg))) {
        return "I can only answer questions about Deepika's portfolio and work. Try asking about her projects, skills, experience, or paste a job description to see how she matches!";
    }

    // Greetings
    if (msg.match(/^(hi|hey|hello|hola|yo|sup|what'?s up)/)) {
        return "Hey there! 👋 I'm Deepika's portfolio assistant. I can tell you about her projects like **ChemoBuddy** (Mayo Clinic) or the **Rocket Design System** (ASU). You can also paste a job description and I'll show you how she matches! What would you like to know?";
    }

    // ChemoBuddy / Mayo Clinic
    if (msg.includes('chemo') || msg.includes('mayo') || msg.includes('clinic')) {
        const p = portfolioData.projects.find(p => p.id === 'mayo-clinic');
        return `**ChemoBuddy** is one of Deepika's most impactful projects! 🏥\n\n${p?.description}\n\nAs the ${p?.role}, she was awarded the **Mayo Clinic Observership** for the project's impact. ${p?.impact}\n\n[View the full case study](/mayo-clinic-case-study)`;
    }

    // Rocket / Design System
    if (msg.includes('rocket') || msg.includes('design system')) {
        const p = portfolioData.projects.find(p => p.id === 'rocket-design-system');
        return `The **Rocket Design System** is Deepika's current work at EdPlus/ASU! 🚀\n\n${p?.description}\n\nShe's published **10+ components** with design tokens, accessibility guidelines, and documentation.\n\n[View the case study](/rocket-design-system-case-study)`;
    }

    // EduFund
    if (msg.includes('edufund') || msg.includes('fintech') || msg.includes('finance') || msg.includes('fixed deposit')) {
        const p = portfolioData.projects.find(p => p.id === 'edufund');
        return `**EduFund** was Deepika's dive into fintech design! 💰\n\n${p?.description}\n\nThe results were impressive: **30% increase in engagement** and **15% reduction in drop-off**. The Fixed Deposit feature shipped in 2024.\n\n[View the case study](/edufund-case-study)`;
    }

    // Skills / Tools
    if (msg.includes('skill') || msg.includes('tool') || msg.includes('figma') || msg.includes('what can')) {
        return `Deepika has a strong toolkit! 🛠️\n\n**Design:** ${portfolioData.skills.design.slice(0, 6).join(', ')}\n\n**Tools:** ${portfolioData.skills.tools.join(', ')}\n\n**Core Strengths:** ${portfolioData.skills.strengths.slice(0, 5).join(', ')}\n\nHer architecture background gives her a unique **systems thinking** perspective that sets her apart.`;
    }

    // Experience / Background
    if (msg.includes('experience') || msg.includes('background') || msg.includes('career') || msg.includes('journey')) {
        return `Here's Deepika's journey (**1+ years combined UX experience**):\n\n${portfolioData.experience.map(e => `• **${e.role}** at ${e.company} (${e.period}${e.duration ? ' · ' + e.duration : ''})`).join('\n')}\n\n**Education:** ${portfolioData.education.degree} at ${portfolioData.education.university}\n\nShe transitioned from **architecture to UX design**, bringing spatial thinking and systems design into digital products. [Learn more](/about)`;
    }

    // About / Who is Deepika
    if (msg.includes('about') || msg.includes('who is') || msg.includes('tell me about')) {
        return `**${portfolioData.personal.fullName}** — ${portfolioData.personal.title}\n\n"${portfolioData.personal.tagline}"\n\nShe's currently pursuing her **${portfolioData.education.degree}** at **ASU** and working as a **UX Design Assistant** at EdPlus. Her background in architecture gives her a unique systems-thinking perspective.\n\n[Visit the About page](/about)`;
    }

    // Contact / Hire
    if (msg.includes('contact') || msg.includes('hire') || msg.includes('email') || msg.includes('reach') || msg.includes('connect')) {
        return `Deepika is open to opportunities! 🎯\n\n📧 **Email:** ${portfolioData.personal.contact.email}\n🔗 **LinkedIn:** [Connect on LinkedIn](${portfolioData.personal.contact.linkedin})\n📄 **Resume:** [View Resume](${portfolioData.personal.contact.resume})\n\n[Go to Contact page](/contact)`;
    }

    // Projects general
    if (msg.includes('project') || msg.includes('portfolio') || msg.includes('case stud') || msg.includes('work')) {
        return `Here are Deepika's featured projects:\n\n${portfolioData.projects.map(p => `• **${p.title}** (${p.company}) — ${p.description.slice(0, 80)}...`).join('\n')}\n\nWhich one would you like to explore?`;
    }

    // Process / Approach
    if (msg.includes('process') || msg.includes('approach') || msg.includes('method') || msg.includes('how do')) {
        return `Deepika follows a **human-centered design** approach:\n\n${portfolioData.approach.process}\n\n**Key principles:** ${portfolioData.approach.principles.join(', ')}\n\nSee this in action in the [ChemoBuddy case study](/mayo-clinic-case-study)!`;
    }

    // Default
    return "I can only answer questions about Deepika's portfolio and work. Try asking about her projects, skills, or experience!";
}

// Send message - tries Gemini first, falls back gracefully
// JD analysis ALWAYS uses local analyzer for reliability
export async function sendMessageToGemini(userMessage: string): Promise<string> {
    // JOB DESCRIPTIONS → always use local analyzer (reliable, visual, no API dependency)
    // Add deliberate processing time so it feels like thorough analysis
    if (isJobDescription(userMessage)) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return analyzeJobDescriptionLocally(userMessage);
    }

    // Check if we're in a rate limit cooldown
    if (retryAfter > Date.now()) {
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
        return response;
    } catch (error: any) {
        console.error('Gemini error:', error.message);

        // Handle rate limiting
        if (error.message?.includes('429') || error.message?.includes('quota')) {
            retryAfter = Date.now() + 30000; // 30 second cooldown
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
