export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Huge, Accessible Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            Welcome to TradeLink
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            The easiest way to find trusted tradespeople. Just tell us what you need, and we&apos;ll do the rest.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 text-slate-900 text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
            <span className="text-2xl">➕</span> Post a Job
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Live Map Visual */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🗺️</span> Trades Near You
          </h3>
          <div className="glass-panel relative h-[400px] overflow-hidden group">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
              <span className="text-slate-500 font-bold text-2xl tracking-widest">[ INTERACTIVE MAP GOES HERE ]</span>
            </div>
            
            {/* Mock Map Pins */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-teal-500 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center text-xl animate-bounce">
              🛠️
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-amber-500 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center text-xl">
              ⚡
            </div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-500 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center text-xl">
              💧
            </div>

            {/* Map Overlay UI */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
              <div className="bg-slate-900/80 backdrop-blur p-4 rounded-xl border border-slate-700 pointer-events-auto">
                <div className="text-lg font-bold text-white mb-1">12 Trades Available</div>
                <div className="text-teal-400 font-medium">Within 5 miles of you</div>
              </div>
              <button className="bg-white text-slate-900 p-4 rounded-full shadow-lg font-bold text-xl pointer-events-auto hover:bg-slate-200 transition-colors">
                📍
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Assistant & Easy Actions */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🤖</span> AI Helper
          </h3>
          
          <div className="glass-panel p-6 border-teal-500/30 border-2">
            <div className="flex gap-4 items-start mb-6">
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-2xl shrink-0 shadow-lg">
                TL
              </div>
              <div>
                <p className="text-lg text-slate-200 leading-snug font-medium">
                  Hi! I&apos;m your TradeLink assistant. What needs fixing today?
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-left p-4 rounded-xl border border-slate-600 transition-colors flex items-center justify-between group">
                <span className="text-lg font-medium text-white">I have a plumbing leak</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">👉</span>
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-left p-4 rounded-xl border border-slate-600 transition-colors flex items-center justify-between group">
                <span className="text-lg font-medium text-white">Need an electrician</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">👉</span>
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-left p-4 rounded-xl border border-slate-600 transition-colors flex items-center justify-between group">
                <span className="text-lg font-medium text-white">Other...</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">👉</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 text-center font-medium">
                Or just describe it in your own words:
              </p>
              <div className="mt-3 relative">
                <input 
                  type="text" 
                  placeholder="e.g. My sink is dripping..." 
                  className="w-full bg-slate-900 border-2 border-slate-600 focus:border-teal-500 rounded-xl px-4 py-4 text-lg text-white placeholder:text-slate-500 outline-none transition-colors"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-lg px-6 font-bold text-lg transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
