
import React, { useState } from 'react';
import { getStrategicAdvice } from '../services/geminiService';

const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setAdvice(null);

    try {
      const result = await getStrategicAdvice(input);
      setAdvice(result);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            NovaCore AI Engine
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Strategic Advisor</h2>
          <p className="text-slate-400 mb-8">
            Tell us about your current business challenge, and our AI-powered strategic engine will provide immediate professional guidance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., We are struggling to transition our brick-and-mortar retail business to a sustainable e-commerce model..."
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Strategy...
                </>
              ) : 'Generate Recommendation'}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
              {error}
            </div>
          )}

          {advice && (
            <div className="mt-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700 animate-fadeIn">
              <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-wider text-sm">Strategic Roadmap:</h4>
              <div className="text-slate-200 prose prose-invert max-w-none">
                {advice.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
