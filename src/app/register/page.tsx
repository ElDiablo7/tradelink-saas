"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [role, setRole] = useState<'homeowner' | 'trade' | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="glass-panel max-w-2xl w-full p-8 md:p-10">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Join TradeLink</h1>
          <p className="text-xl text-slate-400">First, tell us how you&apos;ll be using the platform.</p>
        </div>

        {/* Role Selection */}
        {!role ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => setRole('homeowner')}
              className="group border-2 border-slate-700 hover:border-teal-500 bg-slate-900/50 rounded-2xl p-8 text-left transition-all transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-left">🏠</div>
              <h2 className="text-2xl font-bold text-white mb-2">I&apos;m a Homeowner</h2>
              <p className="text-slate-400 font-medium">I need to find reliable tradespeople to fix things.</p>
            </button>
            
            <button 
              onClick={() => setRole('trade')}
              className="group border-2 border-slate-700 hover:border-amber-500 bg-slate-900/50 rounded-2xl p-8 text-left transition-all transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-left">🛠️</div>
              <h2 className="text-2xl font-bold text-white mb-2">I&apos;m a Tradesperson</h2>
              <p className="text-slate-400 font-medium">I want to find local jobs and get paid instantly.</p>
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setRole(null)}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                ←
              </button>
              <div className="text-xl font-bold text-white">
                Registering as a {role === 'homeowner' ? 'Homeowner' : 'Professional'}
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/trade'); }}>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-4 text-lg text-white placeholder:text-slate-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com" 
                  className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-4 text-lg text-white placeholder:text-slate-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Password</label>
                <input 
                  type="password" 
                  required
                  placeholder="Create a strong password" 
                  className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-4 text-lg text-white placeholder:text-slate-600 outline-none transition-colors"
                />
              </div>
              
              {role === 'trade' && (
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Primary Trade</label>
                  <select className="w-full bg-slate-900 border-2 border-slate-700 focus:border-amber-500 rounded-xl px-4 py-4 text-lg text-white outline-none transition-colors appearance-none">
                    <option>Plumber</option>
                    <option>Electrician</option>
                    <option>Carpenter / Joiner</option>
                    <option>Builder</option>
                    <option>Handyman</option>
                  </select>
                </div>
              )}

              <button 
                type="submit" 
                className={`w-full text-slate-900 text-xl font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                  role === 'trade' 
                    ? 'bg-amber-500 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                    : 'bg-teal-500 hover:bg-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                }`}
              >
                Create Account
              </button>
            </form>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 font-medium">
            Already have an account?{` `}
            <Link href="/login" className="text-white font-bold hover:text-teal-400 transition-colors border-b-2 border-slate-600 hover:border-teal-400">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
