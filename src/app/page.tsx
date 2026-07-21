"use client";
import Link from "next/link";
import AIAssistant from "@/components/AIAssistant";

export default function ConsumerLandingPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30">
      
      {/* Top Banner for Pros */}
      <div className="bg-slate-900 border-b border-slate-800 text-center py-2 text-sm">
        <span className="text-slate-400">Are you a professional tradesperson? </span>
        <Link href="/register" className="text-teal-400 font-bold hover:underline">
          Join the Pro Network →
        </Link>
      </div>

      {/* Navbar */}
      <header className="h-20 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(20,184,166,0.2)]">
            TL
          </div>
          <span className="font-bold text-xl tracking-tight">TradeLink</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm font-bold text-slate-300 hover:text-white transition-colors hidden sm:block">
            Pricing
          </Link>
          <Link href="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/post-job" className="bg-teal-500 text-slate-900 text-sm font-bold px-6 py-2.5 rounded-full hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
            Post a Job
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        
        {/* Hero Section */}
        <section className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <div className="inline-block bg-teal-500/10 border border-teal-500/30 px-4 py-1.5 rounded-full text-teal-400 font-bold text-sm mb-8 animate-in fade-in slide-in-from-bottom-4">
            ✨ AI-Powered Trade Matching
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6">
            Stop waiting.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Start fixing.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8">
            Describe your home emergency, get an instant fair quote, and watch a vetted local professional arrive on a live map.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10">
            <Link href="/post-job" className="bg-teal-500 text-slate-900 text-lg font-black px-10 py-4 rounded-full hover:bg-teal-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              Find a Trade Instantly
            </Link>
            <Link href="#how-it-works" className="bg-slate-800 text-white border border-slate-700 text-lg font-bold px-10 py-4 rounded-full hover:bg-slate-700 transition-colors">
              See How It Works
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full bg-slate-900/50 border-y border-slate-800/50 py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Like Uber, but for repairs.</h2>
              <p className="text-slate-400 text-lg">Three simple steps to fix your home emergencies.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-3xl mb-6 text-teal-400 font-black">1</div>
                <h3 className="text-2xl font-bold text-white mb-3">Snap & Describe</h3>
                <p className="text-slate-400 leading-relaxed">Tell our AI what's broken or snap a quick photo. We instantly diagnose the issue and calculate a standardized fair quote.</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mb-6 text-amber-400 font-black">2</div>
                <h3 className="text-2xl font-bold text-white mb-3">Instant Match</h3>
                <p className="text-slate-400 leading-relaxed">We ping the 5 closest, available, and highly-rated professionals in your area. The first to accept gets the job.</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-3xl mb-6 text-blue-400 font-black">3</div>
                <h3 className="text-2xl font-bold text-white mb-3">Live Tracking</h3>
                <p className="text-slate-400 leading-relaxed">Watch your tradesperson arrive on the live map. Pay securely through the app only when the job is done.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="w-full py-24 max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on Trust.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Inviting a stranger into your home requires absolute trust. That's why every professional on TradeLink goes through a rigorous vetting process.
              </p>
              <ul className="space-y-4">
                {['ID & Background Checks Verified', 'Public Liability Insurance Confirmed', 'Trade Qualifications Authenticated', 'Continuous Community Reviews'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-500/20 rounded-3xl blur-3xl"></div>
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                  <div className="text-5xl">⭐️⭐️⭐️⭐️⭐️</div>
                  <div className="text-white font-bold">4.9/5 Average Rating</div>
                </div>
                <p className="text-slate-300 italic mb-6">"My pipe burst at 2am. Used TradeLink, got a price instantly, and Dave was at my door 15 minutes later. Absolute lifesaver."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-600"></div>
                  <div>
                    <div className="font-bold text-white">Sarah Jenkins</div>
                    <div className="text-sm text-slate-500">Croydon, London</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center font-bold text-slate-900 text-sm">TL</div>
              <span className="font-bold text-white">TradeLink</span>
            </div>
            <p className="text-slate-500 text-sm">The intelligent network connecting homeowners with elite tradespeople.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Homeowners</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/post-job" className="hover:text-teal-400">Post a Job</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-teal-400">How it Works</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400">Pricing Guide</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Professionals</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/register" className="hover:text-teal-400">Join the Network</Link></li>
              <li><Link href="/login" className="hover:text-teal-400">Pro Dashboard</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400">Pricing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-teal-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div>&copy; {new Date().getFullYear()} TradeLink Technologies Ltd. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating AI Assistant */}
      <AIAssistant />

    </div>
  );
}
