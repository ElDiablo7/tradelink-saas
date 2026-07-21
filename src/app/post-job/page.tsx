"use client";
import { useState, useEffect } from 'react';

export default function PostJobWizard() {
  const [step, setStep] = useState(1);
  const [issue, setIssue] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{ trade: string; quote: string; priority: string; prosNearby: number } | null>(null);

  // Simulate AI Dispatcher analyzing the job
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setAiAnalysis({
          trade: issue.toLowerCase().includes('water') || issue.toLowerCase().includes('leak') ? 'Emergency Plumber' : 'General Handyman',
          quote: isEmergency ? '£120.00 Callout' : '£60.00 / hr',
          priority: isEmergency ? 'HIGH' : 'STANDARD',
          prosNearby: 14
        });
        setStep(4);
      }, 2500);
      return () => clearTimeout(timer);
    }

    if (step === 5) {
      const timer2 = setTimeout(() => {
        setStep(6);
      }, 3000);
      return () => clearTimeout(timer2);
    }
  }, [step, issue, isEmergency]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="glass-panel max-w-2xl w-full p-8 md:p-10 relative overflow-hidden">
        
        {/* Step Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        {/* STEP 1: The Issue */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h1 className="text-3xl font-extrabold text-white mb-2">What needs fixing?</h1>
            <p className="text-lg text-slate-400 mb-8">Describe the issue or just snap a quick photo.</p>

            <textarea 
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="e.g., Water is leaking rapidly from under my kitchen sink..."
              className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl p-4 text-xl text-white placeholder:text-slate-600 outline-none transition-colors h-40 resize-none mb-4"
            />

            <button className="w-full border-2 border-dashed border-slate-600 hover:border-teal-500 bg-slate-900/50 hover:bg-slate-800 rounded-xl p-6 text-slate-400 hover:text-white transition-colors flex flex-col items-center justify-center gap-2 mb-8 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">📸</span>
              <span className="font-medium">Upload a Photo (Optional)</span>
            </button>

            <button 
              disabled={issue.length < 5}
              onClick={() => setStep(2)}
              className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-900 text-xl font-bold py-4 rounded-xl shadow-lg transition-all"
            >
              Next Step
            </button>
          </div>
        )}

        {/* STEP 2: Location & Urgency */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-4 mb-6">
              <button onClick={() => setStep(1)} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">←</button>
              <h1 className="text-3xl font-extrabold text-white">Where & When?</h1>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Postcode</label>
              <input 
                type="text" 
                placeholder="e.g., SW1A 1AA" 
                className="w-full bg-slate-900 border-2 border-slate-700 focus:border-teal-500 rounded-xl px-4 py-4 text-xl text-white uppercase outline-none transition-colors"
              />
            </div>

            <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">How urgent is this?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setIsEmergency(false)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${!isEmergency ? 'border-teal-500 bg-teal-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'}`}
              >
                <div className="text-2xl mb-2">📅</div>
                <div className="font-bold text-white text-lg">Standard Job</div>
                <div className="text-sm text-slate-400">Can wait a few days</div>
              </button>
              
              <button 
                onClick={() => setIsEmergency(true)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${isEmergency ? 'border-amber-500 bg-amber-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'}`}
              >
                <div className="text-2xl mb-2">🚨</div>
                <div className="font-bold text-white text-lg">Emergency (+£5)</div>
                <div className="text-sm text-slate-400">I need someone right now</div>
              </button>
            </div>

            <button 
              onClick={() => setStep(3)}
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 text-xl font-bold py-4 rounded-xl shadow-lg transition-all"
            >
              Analyze Job
            </button>
          </div>
        )}

        {/* STEP 3: AI Processing */}
        {step === 3 && (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-teal-500 animate-spin mb-8 shadow-[0_0_30px_rgba(20,184,166,0.3)]"></div>
            <h2 className="text-2xl font-bold text-white mb-2">AI Dispatcher Analyzing...</h2>
            <p className="text-slate-400 text-lg">Translating your request for the tradespeople.</p>
          </div>
        )}

        {/* STEP 4: Review & Ping */}
        {step === 4 && aiAnalysis && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Ready to Dispatch</h1>
            
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-8 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-slate-400 font-medium">Trade Required</span>
                <span className="text-lg font-bold text-white">{aiAnalysis.trade}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-slate-400 font-medium">Estimated Cost</span>
                <span className="text-lg font-bold text-teal-400">{aiAnalysis.quote}</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-400 font-medium">Pros in Area</span>
                <span className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {aiAnalysis.prosNearby} Available
                </span>
              </div>
            </div>

            <button 
              onClick={() => setStep(5)}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-slate-900 text-xl font-extrabold py-5 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📡</span> Ping Tradespeople Now
            </button>
          </div>
        )}

        {/* STEP 5: Finding Match (Radar) */}
        {step === 5 && (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border-2 border-teal-500/40 animate-ping" style={{ animationDelay: '200ms'}}></div>
              <div className="absolute inset-8 rounded-full border-2 border-teal-500/60 animate-ping" style={{ animationDelay: '400ms'}}></div>
              <div className="w-16 h-16 bg-teal-500 rounded-full shadow-[0_0_30px_#14b8a6] flex items-center justify-center text-3xl z-10">
                📍
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Broadcasting Job...</h2>
            <p className="text-slate-400 text-lg max-w-sm">
              Your request has been pinged to {aiAnalysis?.prosNearby} local professionals. Waiting for the first person to accept.
            </p>
          </div>
        )}

        {/* STEP 6: Match Found */}
        {step === 6 && (
          <div className="animate-in fade-in zoom-in duration-500 text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
              ✅
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-4">Match Found!</h1>
            <p className="text-lg text-slate-300 mb-8">
              A local {aiAnalysis?.trade || 'Professional'} has accepted your job and is on their way.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl mb-8 flex items-center justify-between text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl">👨‍🔧</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dave&apos;s Plumbing Services</h3>
                  <div className="text-teal-400 text-sm font-medium">⭐ 4.9 (124 reviews)</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm">ETA</div>
                <div className="text-xl font-bold text-white">12 mins</div>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("This would open the live tracking map in a real app.");
                setStep(1);
                setIssue('');
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xl font-bold py-5 rounded-xl transition-all"
            >
              Track on Map
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
