"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-800 flex items-center justify-center font-medium text-teal-500 animate-pulse">Loading Live Map...</div>
});

export default function TradeDashboard() {
  const [incomingJobs, setIncomingJobs] = useState([
    {
      id: "req-092",
      title: "Emergency Pipe Leak",
      distance: "1.2 miles away",
      timeEstimate: "5 mins drive",
      aiQuote: "£120.00",
      urgent: true,
      description: "Homeowner reports water leaking rapidly from under kitchen sink. AI has assessed as priority 1 plumbing emergency.",
    }
  ]);

  const handleAccept = (id: string) => {
    alert("Job Accepted! 1 Credit Deducted. Navigation started.");
    setIncomingJobs(jobs => jobs.filter(j => j.id !== id));
  };

  const handleDecline = (id: string) => {
    setIncomingJobs(jobs => jobs.filter(j => j.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Pro Dashboard</h2>
          <p className="text-slate-400 text-sm">You are currently visible to local homeowners.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-400 uppercase tracking-wider">PAYG Credits</span>
            <span className="text-xl font-bold text-teal-400">42 🪙</span>
          </div>
          <button className="bg-green-500/20 text-green-400 border border-green-500/50 px-6 py-3 rounded-xl font-bold animate-pulse flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            ONLINE & RECEIVING JOBS
          </button>
        </div>
      </div>

      {/* Main Layout: Map & Radar vs Incoming Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Live Radar Map (2/3 width) */}
        <div className="lg:col-span-2 glass-panel flex flex-col overflow-hidden h-[600px]">
          <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/80">
            <h3 className="font-bold text-lg">Live Area Radar</h3>
            <span className="text-sm text-teal-400 font-medium bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              Scanning 10 mile radius...
            </span>
          </div>
          <div className="flex-1 relative bg-slate-800 overflow-hidden">
            
            <MapComponent jobs={incomingJobs} />
            
            {/* Overlay UI over the map */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between z-[400]">
               <div>
                 <div className="font-bold text-white">High Demand Area Detected</div>
                 <div className="text-sm text-slate-400">Plumbing requests are up 24% in Croydon.</div>
               </div>
               <button className="glass-btn text-sm">Navigate to Hotspot</button>
            </div>
          </div>
        </div>

        {/* Right Column: Incoming Job Feed (1/3 width) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold text-white">Incoming Jobs</h3>
             <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">1 NEW</span>
          </div>

          {incomingJobs.map(job => (
            <div key={job.id} className="glass-panel p-5 border-amber-500/50 border-2 bg-gradient-to-b from-amber-500/10 to-transparent relative overflow-hidden group">
              {job.urgent && (
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  URGENT DISPATCH
                </div>
              )}
              
              <h4 className="text-xl font-bold text-white mt-2">{job.title}</h4>
              <div className="flex items-center gap-2 text-sm text-amber-200 mt-1 mb-4 font-medium">
                <span>📍 {job.distance}</span>
                <span>•</span>
                <span>🚗 {job.timeEstimate}</span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {job.description}
              </p>
              
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 flex justify-between items-center mb-4">
                <span className="text-sm text-slate-400 font-medium">AI Generated Quote:</span>
                <span className="text-xl font-bold text-green-400">{job.aiQuote}</span>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleAccept(job.id)}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-slate-900 font-bold py-3 rounded-xl shadow-lg hover:from-teal-400 hover:to-teal-300 transition-all transform active:scale-95 text-lg flex items-center justify-center gap-2"
                >
                  <span>✅</span> Accept Job (Costs 1 Credit)
                </button>
                <button 
                  onClick={() => handleDecline(job.id)}
                  className="w-full bg-slate-800 text-white font-medium py-3 rounded-xl hover:bg-slate-700 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
          
          <div className="glass-panel p-6 flex flex-col items-center justify-center text-center opacity-50 h-[200px]">
             <span className="text-4xl mb-2">📡</span>
             <p className="font-medium text-slate-300">Listening for more jobs...</p>
          </div>

        </div>
      </div>

    </div>
  );
}
