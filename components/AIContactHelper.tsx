import React, { useState } from 'react';
import { generateAIResponse } from '../utils/gemini';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

/**
 * AI Contact Helper - Generate professional inquiry messages
 */
const AIContactHelper: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    setGeneratedMessage('');

    try {
      const prompt = `
Kamu adalah asisten yang membantu orang menulis pesan profesional untuk menghubungi developer/freelancer.

User ingin: ${userInput}

Buatkan pesan WhatsApp yang:
1. Profesional tapi friendly
2. Jelas menyebutkan kebutuhan
3. Singkat (max 3-4 kalimat)
4. Siap copy-paste

Format:
Halo Agam, [isi pesan]

Jangan tambahkan penjelasan lain, langsung berikan pesannya saja.
      `;

      const response = await generateAIResponse(prompt);
      setGeneratedMessage(response);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedMessage('Maaf, terjadi kesalahan. Coba lagi ya!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 border border-purple-100 dark:border-slate-700">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          AI Message Helper
        </h3>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        Bingung mau nulis apa? AI bantu buatin pesan profesional!
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Apa yang kamu butuhkan?
          </label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Contoh: Saya butuh website company profile untuk bisnis furniture"
            className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            rows={3}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading || !userInput.trim()}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-700 dark:disabled:to-slate-700 text-white rounded-xl font-semibold transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Message
            </>
          )}
        </button>

        {generatedMessage && (
          <div className="relative">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                {generatedMessage}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIContactHelper;
