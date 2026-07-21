"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-8 md:p-10">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-teal-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6">
            TL
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Back</h1>
          <p className="text-lg text-slate-400">Sign in to your TradeLink account.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/trade'); }}>
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
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">Password</label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }} className="text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-4 text-lg text-white placeholder:text-slate-600 outline-none transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 text-xl font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 font-medium">
            Don&apos;t have an account?{` `}
            <Link href="/register" className="text-white font-bold hover:text-teal-400 transition-colors border-b-2 border-teal-500/30 hover:border-teal-400">
              Create one now
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
