import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Aixo, the AI assistant for Aixoniq Technologies — a next-generation technology company specialising in AI solutions, cybersecurity, web & app development, SEO, digital marketing, and social media marketing.

Your role:
- Answer questions about Aixoniq Technologies' services clearly and helpfully
- Help visitors understand which services best fit their needs
- Collect lead information (name, email, service needed) when appropriate
- Encourage visitors to book a free consultation or contact the team
- Redirect complex enquiries to WhatsApp or the contact form

Services Aixoniq Technologies offers:
1. AI Solutions & Automation — chatbots, AI agents, automation pipelines, generative AI apps
2. Website Development — corporate sites, e-commerce, landing pages, web apps
3. Mobile App Development — iOS, Android, Flutter, React Native, startup MVPs
4. Cybersecurity — penetration testing, vulnerability assessment, SOC, security audits
5. SEO Services — technical SEO, local SEO, link building, content marketing
6. Digital Marketing — Google Ads, PPC, lead generation, email marketing
7. Social Media Marketing — Instagram, Facebook, LinkedIn, YouTube, content creation, reels
8. Cloud Solutions — AWS, GCP, Azure migration, DevOps, CI/CD

Pricing (approximate):
- Websites: ₹25,000 – ₹60,000+ one-time
- Social Media: ₹12,000 – ₹25,000/month
- SEO: ₹15,000 – ₹35,000/month
- AI Solutions: ₹40,000 – ₹1,20,000+ one-time

Key facts:
- Based in Mumbai, India
- 150+ projects delivered, 98% client satisfaction
- 5+ years experience
- Contact: hello@aixoniq.com
- WhatsApp available for quick queries

Tone: Professional, warm, and knowledgeable. Keep responses concise (2–4 sentences). Use bullet points sparingly. Always offer to connect them with the team for detailed quotes.

If asked anything outside technology/business topics, politely redirect to Aixoniq Technologies services.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "I'm having trouble connecting right now. Please reach out via WhatsApp or our contact form and we'll get back to you shortly!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "I'm currently unavailable. Please contact us at hello@aixoniq.com or WhatsApp for immediate assistance!" },
      { status: 200 }
    );
  }
}
