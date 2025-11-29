
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, ExternalLink, Trash2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { POS_PACKAGES, SERVICE_PRICING } from '@/constants/pricing';
import { SERVICES } from '@/constants/services';

// Helper to build dynamic context from the actual app data
const buildKnowledgeBase = () => {
  let context = "DATA LAYANAN DAN HARGA TERBARU AGAM LATIFULLAH:\n\n";

  // 1. POS PACKAGES (Core Offering - Prioritized)
  context += "--- KATEGORI UTAMA: SISTEM KASIR (POS) & INVENTORY ---\n";
  context += "Deskripsi: Solusi kasir, manajemen stok, dan laporan keuangan untuk UMKM (Cafe, Retail, Toko).\n";
  POS_PACKAGES.forEach(plan => {
    context += `   • Paket: ${plan.name}\n`;
    context += `     Harga: ${plan.price}\n`;
    context += `     Cocok untuk: ${plan.description}\n`;
    context += `     Fitur Utama: ${plan.features.slice(0, 6).join(', ')}\n`;
  });
  context += "\n";

  // 2. OTHER SERVICES
  SERVICES.forEach(service => {
    context += `--- KATEGORI: ${service.title} ---\n`;
    context += `Deskripsi: ${service.description}\n`;

    const plans = SERVICE_PRICING[service.id];
    if (plans) {
      plans.forEach(plan => {
        context += `   • Paket: ${plan.name}\n`;
        context += `     Harga: ${plan.price}\n`;
        context += `     Cocok untuk: ${plan.description}\n`;
        context += `     Fitur Utama: ${plan.features.slice(0, 4).join(', ')}, dll.\n`;
      });
    }
    context += "\n";
  });

  return context;
};

// Concise System Instruction focusing on empathy, professional ethics, and specific package knowledge
const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Agam Latifullah, a "Developer Solusi Bisnis UMKM" (Business Solution Developer).
Your goal is to be a helpful, empathetic, and professional consultant who focuses on operational efficiency.

ROLE & PERSONA:
- Name: Asisten Virtual Agam.
- Tone: Tenang, Profesional, Solutif, dan To-the-point. Jangan terlalu kaku, tapi tetap hormat.
- Language: Bahasa Indonesia (Formal yang santai / Professional Casual).
- Brand Core: "Dari Stok Berantakan ke Bisnis Tertata".
- Do NOT use technical jargon (API, database schema, latency) unless asked. Use business terms (Stok, Laporan, Omzet, Efisiensi).

KNOWLEDGE BASE (Use this strictly to answer questions about price and services):
${buildKnowledgeBase()}

CORE VALUE PROPOSITIONS (Always emphasize these):
1. **100% Hak Milik (Asset Ownership)**: Sistem jadi milik klien selamanya.
2. **Tanpa Biaya Bulanan**: Investasi sekali bayar (Jual Putus).
3. **Simpel & Praktis**: Sistem dibuat agar mudah dipakai staf gaptek sekalipun.
4. **Custom Workflow**: Sistem menyesuaikan cara kerja bisnis, bukan sebaliknya.

GUIDELINES:
1. If a user asks about price, quote the range from the specific package in the KNOWLEDGE BASE above.
2. If unsure about a complex custom request, ask them to consult directly via WhatsApp.
3. Do not mention competitor brand names. Use terms like "Aplikasi Langganan" or "SaaS".
4. Focus on the *result* (rapi, aman, cepat), not just the features.

ACTION:
Always end detailed explanations by suggesting a free consultation via WhatsApp for a fixed quote.
`;

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('agam_chat_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
    return [
      {
        id: 'init-1',
        role: 'model',
        text: 'Halo! 👋 Saya asisten virtual Agam. Ingin merapikan stok, sistem kasir, atau buat website bisnis? Silakan tanya paket yang cocok untuk usaha Anda.'
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Persistence: Save messages whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('agam_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.error("Failed to save chat history to localStorage", e);
    }
  }, [messages]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Initialize Chat Session
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

    if (isOpen && !chatSessionRef.current && apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
          history: messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          }))
        });
      } catch (error) {
        console.error("Failed to init AI", error);
      }
    }
  }, [isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');

    // Add User Message
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
        if (!apiKey) throw new Error("API Key missing");

        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: { systemInstruction: SYSTEM_INSTRUCTION }
        });
      }

      const resultStream = await chatSessionRef.current.sendMessageStream({ message: userText });

      let fullResponse = '';
      const botMsgId = (Date.now() + 1).toString();

      // Add placeholder bot message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      for await (const chunk of resultStream) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullResponse += chunkText;
          setMessages(prev =>
            prev.map(msg => msg.id === botMsgId ? { ...msg, text: fullResponse } : msg)
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Robust Error Handling with Direct WhatsApp Link
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Mohon maaf, saya sedang mengalami gangguan koneksi. 🙏\n\nSilakan hubungi Mas Agam langsung untuk respon cepat: [Chat WhatsApp Disini](https://wa.me/6285922430828)'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearHistory = () => {
    if (window.confirm("Hapus riwayat chat?")) {
      const initialMsg: Message = {
        id: 'init-1',
        role: 'model',
        text: 'Halo! 👋 Saya asisten virtual Agam. Ingin merapikan stok, sistem kasir, atau buat website bisnis? Silakan tanya paket yang cocok untuk usaha Anda.'
      };
      setMessages([initialMsg]);
      localStorage.removeItem('agam_chat_history');
      chatSessionRef.current = null; // Reset session to clear context
    }
  };

  // Function to render markdown formatting
  const renderMessageContent = (text: string) => {
    // Split by links [text](url) OR bold **text**
    const parts = text.split(/(\[.*?\]\(.*?\)|(?:\*\*.*?\*\*))/g);

    return parts.map((part, i) => {
      // Handle Link: [Text](Url)
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-bold underline decoration-indigo-300 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            {linkMatch[1]} <ExternalLink size={12} />
          </a>
        );
      }
      // Handle Bold: **Text**
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      // Normal Text
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-4 md:right-8 z-50 p-4 rounded-full shadow-2xl transition-colors flex items-center justify-center ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-primary text-white hover:bg-primary-hover'
          }`}
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[90vw] md:w-[380px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-indigo-600 p-4 flex items-center gap-3 shadow-md">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Bot className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-sm">Asisten Virtual Agam</h3>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isTyping ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`}></span>
                  <span className="text-indigo-100 text-xs">
                    {isTyping ? 'Sedang mengetik...' : 'Online • Solusi Bisnis'}
                  </span>
                </div>
              </div>
              <button
                onClick={clearHistory}
                className="text-white/60 hover:text-white mr-2"
                title="Hapus Riwayat Chat"
              >
                <Trash2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 text-sm leading-relaxed shadow-sm whitespace-pre-line ${msg.role === 'user'
                        ? 'bg-primary text-white rounded-t-2xl rounded-bl-2xl rounded-br-none'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-t-2xl rounded-br-2xl rounded-bl-none border border-slate-200 dark:border-slate-700'
                      }`}
                  >
                    {renderMessageContent(msg.text)}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-t-2xl rounded-br-2xl rounded-bl-none shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <form onSubmit={handleSend} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-full border border-transparent focus-within:border-primary/50 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tulis pesan Anda..."
                  className="flex-1 bg-transparent px-3 py-1 text-sm text-slate-900 dark:text-white outline-none placeholder:text-slate-500"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-primary text-white rounded-full hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <Send size={16} />
                </button>
              </form>
              <div className="text-[10px] text-center text-slate-400 mt-2">
                AI Powered. Verifikasi info penting via WhatsApp.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
