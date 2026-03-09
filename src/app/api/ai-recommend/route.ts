import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const SERVICES_CONTEXT = `
RS Studio Services & Pricing:

1. LANDING PAGE ($1,000–2,000 / ₪3,500–7,000)
   - Timeline: 1–2 weeks
   - Features: Custom design, High performance, Built-in SEO, Single page with animations, Hebrew & English support
   - Best for: Marketing sites, product launches, business promotion

2. SAAS APPLICATION ($4,000–10,000 / ₪15,000–35,000) — MOST POPULAR
   - Timeline: 4–8 weeks
   - Features: Auth & user management, Custom dashboard, Payment integration, Data management, Full API
   - Best for: Full products, platforms, subscription services, internal tools

3. AI AGENT / AUTOMATION (AaaS) ($3,000–7,000 / ₪10,000–25,000)
   - Timeline: 3–6 weeks
   - Features: Custom AI agent, Business automation, Integration with existing tools, Training & onboarding, Ongoing support
   - Best for: Customer support bots, lead qualifiers, document processors, email responders, data analysts, content generators

About RS Studio:
- AI-first development studio run by Rom Soloman
- Technologies: Next.js, React, Node.js, Python, OpenAI, Claude, LangChain
- Approach: AI-accelerated development — projects that take months are completed in weeks
- Location: Israel, serving clients worldwide
- Contact: WhatsApp +972-52-684-1616 or via the contact form on the website
`;

function buildSystemPrompt(locale: string): string {
  const isHebrew = locale === "he";

  if (isHebrew) {
    return `אתה יועץ AI חכם של RS Studio — סטודיו פיתוח AI-first.
תפקידך לעזור למבקרים להבין איזה שירות מתאים להם ביותר.

${SERVICES_CONTEXT}

הנחיות:
- ענה תמיד בעברית
- היה ידידותי, מקצועי ותכליתי
- שאל שאלות הבהרה אם הבקשה לא ברורה
- המלץ על השירות המתאים ביותר עם הסבר קצר
- ציין מחירים בשקלים (₪)
- אם הלקוח מעוניין, הפנה אותו ליצור קשר דרך WhatsApp או טופס יצירת הקשר
- שמור על תשובות קצרות וממוקדות (3-5 משפטים)
- אל תמציא שירותים שלא קיימים
- אם השאלה לא קשורה לשירותי RS Studio, הסבר בנימוס שאתה מתמחה בייעוץ פרויקטים`;
  }

  return `You are an intelligent AI consultant for RS Studio — an AI-first development studio.
Your role is to help visitors understand which service best fits their needs.

${SERVICES_CONTEXT}

Guidelines:
- Always respond in English
- Be friendly, professional, and to the point
- Ask clarifying questions if the request is unclear
- Recommend the most suitable service with a brief explanation
- Include pricing in USD ($)
- If the visitor is interested, direct them to get in touch via WhatsApp or the contact form
- Keep responses concise (3-5 sentences)
- Never invent services that don't exist
- If the question is unrelated to RS Studio services, politely explain you specialize in project consulting`;
}

interface ChatMessage {
  role: "user" | "model";
  parts: [{ text: string }];
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 503 }
      );
    }

    const { message, locale = "en", history = [] } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const chatHistory: ChatMessage[] = history.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        ...chatHistory,
        { role: "user", parts: [{ text: message }] },
      ],
      config: {
        systemInstruction: buildSystemPrompt(locale),
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const text =
      response.text ??
      (locale === "he"
        ? "מצטער, לא הצלחתי לעבד את הבקשה. נסו שוב."
        : "Sorry, I couldn't process your request. Please try again.");

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("AI Recommend error:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendation" },
      { status: 500 }
    );
  }
}
