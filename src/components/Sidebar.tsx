"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-700/50 bg-slate-900/50 backdrop-blur-xl flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-700/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-amber-500 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(20,184,166,0.3)]">
          TL
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">TradeLink™</h1>
          <span className="text-xs text-teal-400 font-medium tracking-wide">PRO DASHBOARD</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 flex flex-col gap-2">
        <Link 
          href="/trade" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
            pathname === '/trade' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
          }`}
        >
          <span className="text-xl">📊</span> Job Board
        </Link>
        <Link 
          href="/trade" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors hover:bg-slate-800/50 text-slate-300 border border-transparent`}
        >
          <span className="text-xl">📝</span> My Quotes
        </Link>
        <Link 
          href="/messages" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
            pathname === '/messages' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
          }`}
        >
          <span className="text-xl">💬</span> Messages
        </Link>
        <Link 
          href="/settings" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
            pathname === '/settings' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
          }`}
        >
          <span className="text-xl">⚙️</span> Settings
        </Link>
      </nav>
      
      <div className="p-4 border-t border-slate-700/50">
        <div className="glass-panel p-4 flex flex-col gap-2">
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">AI Assistant</div>
          <button className="glass-btn w-full flex items-center justify-center gap-2 text-sm">
            <span>🧠</span> Ask TradeLink
          </button>
        </div>
      </div>
    </aside>
  );
}
