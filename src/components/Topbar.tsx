"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Topbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="h-16 border-b border-slate-700/50 bg-slate-900/30 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-2xl">☰</button>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input 
            type="text" 
            placeholder="Search jobs, trades, or locations..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(e.target.value.length > 0);
            }}
            className="glass-input pl-10 py-1.5 w-64 md:w-96 text-sm relative z-50"
          />
          
          {searchOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setSearchOpen(false)}></div>
              <div className="absolute top-12 left-0 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-2">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider px-3 mb-2 mt-2">Recent Searches</div>
                  <button onClick={() => setSearchOpen(false)} className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded-lg text-sm text-slate-200">
                    Emergency Plumber Croydon
                  </button>
                  <button onClick={() => setSearchOpen(false)} className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded-lg text-sm text-slate-200">
                    Sarah Jenkins (Past Client)
                  </button>
                  <div className="border-t border-slate-700 my-2"></div>
                  <button onClick={() => setSearchOpen(false)} className="w-full text-center px-3 py-2 text-teal-400 hover:bg-slate-700 rounded-lg text-sm font-medium">
                    See all results for &quot;{searchQuery}&quot;
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <button 
          onClick={() => setNotifOpen(!notifOpen)}
          className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
            notifOpen ? 'bg-slate-700 border-slate-500' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'
          }`}
        >
          🔔
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-900"></span>
        </button>

        {notifOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)}></div>
            <div className="absolute top-12 right-12 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex justify-between items-center">
                <span className="font-bold">Notifications</span>
                <span className="text-xs text-teal-400 cursor-pointer">Mark all read</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <Link href="/trade" onClick={() => setNotifOpen(false)} className="block p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors bg-slate-800/80">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm text-white">New Job Match!</span>
                    <span className="text-xs text-amber-500 font-bold">NEW</span>
                  </div>
                  <div className="text-sm text-slate-300">Emergency Pipe Leak in your area.</div>
                  <div className="text-xs text-slate-500 mt-2">Just now</div>
                </Link>
                <Link href="/messages" onClick={() => setNotifOpen(false)} className="block p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm text-white">Message from Sarah</span>
                  </div>
                  <div className="text-sm text-slate-300">Are you still 10 mins away?</div>
                  <div className="text-xs text-slate-500 mt-2">1 hour ago</div>
                </Link>
              </div>
            </div>
          </>
        )}

        <Link href="/settings" className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 cursor-pointer shadow-md"></Link>
      </div>
    </header>
  );
}
