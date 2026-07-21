"use client";
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
      </div>

      <div className="glass-panel p-1 flex gap-2 rounded-xl overflow-x-auto">
        {['profile', 'notifications', 'billing'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-6 rounded-lg font-bold capitalize transition-colors ${
              activeTab === tab 
                ? 'bg-teal-500 text-slate-900 shadow-md' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="glass-panel p-8">
        {activeTab === 'profile' && (
          <form className="space-y-6 animate-in fade-in" onSubmit={e => { e.preventDefault(); alert('Profile updated'); }}>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-4xl">👨‍🔧</div>
              <button type="button" className="glass-btn text-sm">Change Photo</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Business Name</label>
                <input type="text" defaultValue="Dave's Plumbing Services" className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-3 text-white outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Primary Trade</label>
                <input type="text" defaultValue="Emergency Plumber" className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-3 text-white outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Operating Radius</label>
                <select className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-3 text-white outline-none appearance-none">
                  <option>10 Miles</option>
                  <option>20 Miles</option>
                  <option>50 Miles</option>
                  <option>Nationwide</option>
                </select>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700/50 flex justify-end">
              <button type="submit" className="bg-teal-500 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-teal-400 transition-colors">Save Changes</button>
            </div>
          </form>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-xl font-bold text-white mb-6">Alert Preferences</h2>
            {[
              { id: 'urgent', label: 'Urgent Jobs (Priority 1)', desc: 'Get SMS alerts immediately for emergency jobs in your radius.' },
              { id: 'standard', label: 'Standard Jobs', desc: 'Get push notifications for non-urgent jobs.' },
              { id: 'messages', label: 'Direct Messages', desc: 'Notify when a homeowner replies.' }
            ].map(pref => (
              <div key={pref.id} className="flex items-start justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                <div>
                  <div className="font-bold text-white mb-1">{pref.label}</div>
                  <div className="text-sm text-slate-400">{pref.desc}</div>
                </div>
                <div className="w-12 h-6 bg-teal-500 rounded-full relative cursor-pointer shadow-inner">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-amber-400 mb-1">PAYG Balance</h2>
                <p className="text-amber-200/60 text-sm">Credits are used to accept jobs.</p>
              </div>
              <div className="text-4xl font-black text-amber-500">42 🪙</div>
            </div>
            <button className="w-full bg-slate-800 border-2 border-dashed border-slate-600 hover:border-amber-500 rounded-xl py-6 font-bold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>💳</span> Top Up Credits
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
