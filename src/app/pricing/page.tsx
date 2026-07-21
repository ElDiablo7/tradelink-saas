import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Topbar from "@/components/Topbar";

export default function PricingPage() {
  const [view, setView] = useState<'homeowner' | 'trade' | 'agency'>('homeowner');

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30">
      
      {/* Navbar */}
      <header className="h-20 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(20,184,166,0.2)]">
            TL
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">TradeLink</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm font-bold text-teal-400 hidden sm:block">
            Pricing
          </Link>
          <Link href="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/post-job" className="bg-teal-500 text-slate-900 text-sm font-bold px-6 py-2.5 rounded-full hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
            Post a Job
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-16 px-6">
        
        <div className="text-center max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-4">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Transparent pricing.<br/>No hidden surprises.</h1>
          <p className="text-xl text-slate-400">Whether you need a pipe fixed, you're looking for work, or you manage 1,000 properties, our pricing is simple and fair.</p>
        </div>

        {/* 3-Way View Toggle */}
        <div className="bg-slate-800/50 p-1.5 rounded-full border border-slate-700 mb-16 flex flex-col sm:flex-row gap-1 animate-in fade-in slide-in-from-bottom-6 shadow-2xl overflow-hidden">
          <button 
            onClick={() => setView('homeowner')}
            className={`px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${view === 'homeowner' ? 'bg-teal-500 text-slate-900 shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
          >
            For Homeowners
          </button>
          <button 
            onClick={() => setView('trade')}
            className={`px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${view === 'trade' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
          >
            For Tradespeople
          </button>
          <button 
            onClick={() => setView('agency')}
            className={`px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${view === 'agency' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
          >
            Property Managers
          </button>
        </div>

        {/* HOMEOWNER VIEW */}
        {view === 'homeowner' && (
          <div className="w-full max-w-5xl animate-in fade-in zoom-in-95">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-teal-500/30">
                <div className="absolute top-0 right-0 bg-teal-500 text-slate-900 text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Most Popular</div>
                <h3 className="text-2xl font-bold text-white mb-2">Standard Dispatch</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">Perfect for non-emergencies and standard repairs.</p>
                <div className="text-5xl font-black text-white mb-6">£0 <span className="text-lg text-slate-500 font-normal">platform fee</span></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Free to post a job</li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Free AI problem diagnosis</li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> AI calculates fair, standardized callout rates</li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Trades matched within minutes</li>
                </ul>
                <Link href="/post-job" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl transition-colors border border-slate-600 hover:border-teal-500">
                  Post a Free Job
                </Link>
              </div>

              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Emergency</div>
                <h3 className="text-2xl font-bold text-white mb-2">Priority Ping</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">Skip the queue. For severe emergencies like burst pipes.</p>
                <div className="text-5xl font-black text-white mb-6">£5.99 <span className="text-lg text-slate-500 font-normal">one-off</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Bypasses the standard queue</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Sends a loud push notification to ALL pros in 15 miles</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> 98% match rate within 60 seconds</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Guaranteed priority arrival tracking</li>
                </ul>
                <div className="w-full h-32 relative mb-6 rounded-xl overflow-hidden border border-slate-700">
                  <Image src="/images/tradelink/08-emergency-priority-ping.webp" alt="Priority Ping" fill className="object-cover" />
                </div>
                <Link href="/post-job" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Trigger Priority Ping
                </Link>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">How Homeowner Billing Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-teal-400 mb-2">How much will the actual repair cost?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Our AI analyzes your problem and estimates a fair, standardized hourly/callout rate based on your region before you hit confirm. This prevents trades from overcharging in an emergency.</p>
                </div>
                <div>
                  <h4 className="font-bold text-teal-400 mb-2">Who do I pay?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">You settle the invoice directly with the tradesperson upon completion of the job. TradeLink does not hold your money or take a cut of the tradesperson's hard work.</p>
                </div>
                <div>
                  <h4 className="font-bold text-teal-400 mb-2">What about parts and materials?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">The AI quote covers the labor and callout fee. If your job requires specific parts (like a new boiler valve), the tradesperson will quote you for the materials separately before proceeding.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TRADESPERSON VIEW */}
        {view === 'trade' && (
          <div className="w-full max-w-5xl animate-in fade-in zoom-in-95">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-2">Pay-As-You-Go</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">Perfect for picking up extra weekend jobs. No monthly commitment.</p>
                <div className="text-5xl font-black text-white mb-6">£2.50 <span className="text-lg text-slate-500 font-normal">/ credit</span></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> 1 Credit = 1 Job Acceptance</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> See all job details BEFORE you accept</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> 0% commission on the final invoice</li>
                  <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> 10 Free Credits on sign up</li>
                </ul>
                <Link href="/register" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl transition-colors border border-slate-600">
                  Start for Free
                </Link>
              </div>

              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.1)] flex flex-col">
                <div className="absolute top-0 right-0 bg-teal-500 text-slate-900 text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Full Time</div>
                <h3 className="text-2xl font-bold text-white mb-2">TradeLink Pro</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">For professional businesses wanting a steady stream of local leads.</p>
                <div className="text-5xl font-black text-white mb-6">£29.99 <span className="text-lg text-slate-500 font-normal">/ month</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> <strong>Unlimited Job Accepts</strong></li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Priority placement on Homeowner Radar</li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> 0% commission on the final invoice</li>
                  <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Custom branded business profile</li>
                </ul>
                <div className="w-full h-32 relative mb-6 rounded-xl overflow-hidden border border-slate-700">
                  <Image src="/images/tradelink/06-pro-dashboard-live-radar.webp" alt="Pro Radar Dashboard" fill className="object-cover" />
                </div>
                <Link href="/register" className="block w-full text-center bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  Upgrade to Pro
                </Link>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">How Pro Billing Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-amber-400 mb-2">Do I pay to just see jobs?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">No. Viewing the Live Radar and seeing job descriptions/photos is completely free. You only spend a credit (or use your Pro subscription) when you hit "Accept Job".</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-400 mb-2">Do you take a cut of my earnings?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Absolutely not. If you do a £500 boiler repair, you keep £500. We only charge for the introduction via PAYG credits or the Pro subscription.</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-400 mb-2">What if the homeowner cancels?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">If you accept a job and the homeowner cancels within 5 minutes, your PAYG credit is automatically refunded to your account.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AGENCY / PROPERTY MANAGER VIEW */}
        {view === 'agency' && (
          <div className="w-full max-w-5xl animate-in fade-in zoom-in-95">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)] flex flex-col">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Local Agents</div>
                <h3 className="text-2xl font-bold text-white mb-2">TradeLink Agency</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">For local letting agents managing 10 to 500 properties.</p>
                <div className="text-5xl font-black text-white mb-6">£99.99 <span className="text-lg text-slate-500 font-normal">/ month</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><span className="text-blue-400">✓</span> <strong>20 Free Priority Pings / mo</strong> (Value: £120)</li>
                  <li className="flex items-start gap-3"><span className="text-blue-400">✓</span> Consolidated Monthly Invoicing</li>
                  <li className="flex items-start gap-3"><span className="text-blue-400">✓</span> Multi-property dashboard & reporting</li>
                  <li className="flex items-start gap-3"><span className="text-blue-400">✓</span> Dedicated Agency Account Manager</li>
                </ul>
                <div className="w-full h-32 relative mb-6 rounded-xl overflow-hidden border border-slate-700">
                  <Image src="/images/tradelink/07-property-manager-control-centre.webp" alt="Property Manager Control Centre" fill className="object-cover" />
                </div>
                <Link href="/register?type=agency" className="block w-full text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  Start Agency Trial
                </Link>
              </div>

              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-slate-600">
                <div className="absolute top-0 right-0 bg-slate-700 text-slate-300 text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Enterprise</div>
                <h3 className="text-2xl font-bold text-white mb-2">TradeLink Enterprise</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">For large property management firms scaling nationwide.</p>
                <div className="text-5xl font-black text-white mb-6">Custom <span className="text-lg text-slate-500 font-normal">Pricing</span></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><span className="text-slate-300">✓</span> <strong>Full REST API Access</strong></li>
                  <li className="flex items-start gap-3"><span className="text-slate-300">✓</span> Direct integration with Reapit & Fixflo</li>
                  <li className="flex items-start gap-3"><span className="text-slate-300">✓</span> Custom SLAs & Dispatch Timers</li>
                  <li className="flex items-start gap-3"><span className="text-slate-300">✓</span> White-label tenant reporting app</li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl transition-colors border border-slate-600">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">How Agency Billing Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">What is Consolidated Invoicing?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Say goodbye to chasing receipts. When our tradespeople complete repairs across your property portfolio, TradeLink pays them instantly. We then send your accounts department a single, itemized monthly invoice. Simple.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Can my tenants use the app?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Yes! You can invite tenants to use a white-labeled version of TradeLink. When they report a leak, it routes to your dashboard for approval. Once approved, the AI dispatches the trade automatically.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Do we get cheaper callout rates?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Yes. Because agencies provide bulk volume to our tradespeople, TradeLink negotiates a lower standardized B2B callout rate on your behalf, saving your landlords money on every repair.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div>&copy; {new Date().getFullYear()} TradeLink Technologies Ltd. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
