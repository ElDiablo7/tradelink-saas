"use client";
import { useState, useRef, useEffect } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
    { role: 'ai', text: "Hi! I'm the TradeLink AI. Describe your issue (e.g. 'My sink is leaking') and I'll tell you exactly who you need." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/brain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      
      if (data.success && data.data?.aiMessage) {
        setMessages(prev => [...prev, { role: 'ai', text: data.data.aiMessage }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I couldn't process that. Try rephrasing." }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "Network error. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_40px_rgba(20,184,166,0.15)] rounded-2xl mb-4 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400 font-bold">
                AI
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight">TradeLink Assistant</h3>
                <span className="text-xs text-teal-400">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-teal-500 text-slate-900 rounded-br-sm' 
                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-slate-800 border border-slate-700 text-slate-200 p-3 rounded-2xl rounded-bl-sm text-sm flex gap-1">
                  <span className="animate-bounce inline-block">.</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '100ms' }}>.</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '200ms' }}>.</span>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800/80 border-t border-slate-700/50">
            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="w-full bg-slate-900 border border-slate-700 focus:border-teal-500 rounded-xl py-3 pl-4 pr-12 text-sm text-white outline-none transition-colors"
              />
              <button type="submit" disabled={!input.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="text-slate-900 transform rotate-45 -translate-y-[1px] -translate-x-[1px] text-xs font-black">↑</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-transform hover:scale-110 z-50 ${
          isOpen ? 'bg-slate-800 border-2 border-slate-700 text-slate-400' : 'bg-gradient-to-r from-teal-500 to-teal-400 text-slate-900'
        }`}
      >
        {isOpen ? '✖' : '💬'}
      </button>
    </div>
  );
}
