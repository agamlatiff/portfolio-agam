import React from 'react';
import AIAssistant from '../components/AIAssistant';

const TestAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            🤖 Test Gemini AI
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Coba tanya apa saja tentang portfolio, projects, atau tech stack!
          </p>
        </div>

        <AIAssistant />
      </div>
    </div>
  );
};

export default TestAIPage;
