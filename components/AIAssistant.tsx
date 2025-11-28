import React, { useState } from 'react';
import { generateAIResponse, generateAIStreamResponse, GeminiChat } from '../utils/gemini';
import { Send, Sparkles, Loader2 } from 'lucide-react';

/**
 * Example Component: AI Chat Assistant
 * This component demonstrates how to use Gemini AI in your portfolio
 */
const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Example 1: Simple AI Response
  const handleSimpleQuery = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await generateAIResponse(input);
      setResponse(result);
    } catch (err: any) {
      setError(err.message || 'Failed to get AI response');
    } finally {
      setIsLoading(false);
    }
  };

  // Example 2: Streaming Response (like ChatGPT)
  const handleStreamQuery = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      await generateAIStreamResponse(input, (chunk) => {
        setResponse((prev) => prev + chunk);
      });
    } catch (err: any) {
      setError(err.message || 'Failed to get AI response');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Assistant
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Powered by Google Gemini
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="mb-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything... (e.g., 'Explain what a POS system is')"
          className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          rows={4}
          disabled={isLoading}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleSimpleQuery}
          disabled={isLoading || !input.trim()}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl font-semibold transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Thinking...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send
            </>
          )}
        </button>

        <button
          onClick={handleStreamQuery}
          disabled={isLoading || !input.trim()}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-700 dark:disabled:to-slate-700 text-white rounded-xl font-semibold transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Streaming...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Stream
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <p className="text-red-600 dark:text-red-400 text-sm">
            <strong>Error:</strong> {error}
          </p>
          <p className="text-red-500 dark:text-red-500 text-xs mt-1">
            Make sure you've added your Gemini API key to .env.local
          </p>
        </div>
      )}

      {/* Response Area */}
      {response && (
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-100 dark:border-slate-600">
          <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            AI Response:
          </h3>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
              {response}
            </p>
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
          💡 How to use:
        </h4>
        <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
          <li>• <strong>Send:</strong> Get complete response at once</li>
          <li>• <strong>Stream:</strong> Get response word-by-word (like ChatGPT)</li>
          <li>• Try asking about your portfolio projects, tech stack, or business solutions!</li>
        </ul>
      </div>
    </div>
  );
};

export default AIAssistant;
