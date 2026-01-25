
import React, { useState } from 'react';
import { FlightDetails } from './types';
import { MASTER_SCRIPT } from './constants';
import { FlightControls } from './components/FlightControls';
import { ProcedureSection } from './components/ProcedureSection';

const App: React.FC = () => {
  const [details, setDetails] = useState<FlightDetails>({
    airline: 'SkyLink',
    flightCode: '452',
    origin: 'Los Angeles',
    destination: 'New York',
    gate: 'B12',
    timeOfDay: 'afternoon',
    departureFreq: '121.9',
    squawk: '4522',
    runway: '24R',
    altitude: '35000',
    flightTime: '5.5',
    groundFreq: '121.7',
    towerFreq: '118.9',
    approachFreq: '119.7'
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="bg-blue-900 p-6 shadow-2xl border-b border-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
              <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase">AeroScript Master</h1>
              <p className="text-xs font-medium text-blue-200 uppercase tracking-[0.2em]">Flight Procedure Automation System</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[10px] text-blue-300 font-bold uppercase">Status</span>
              <span className="text-sm font-mono text-green-400">● READY FOR DEPARTURE</span>
            </div>
            <div className="h-8 w-px bg-blue-700/50" />
            <div className="text-right">
              <span className="block text-[10px] text-blue-300 font-bold uppercase">Network</span>
              <span className="text-sm font-mono text-blue-100">VHF-Datalink: ACTIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Inputs */}
      <FlightControls details={details} onChange={setDetails} />

      {/* Main Content */}
      <main className="flex-grow flex p-6 gap-8 max-w-7xl mx-auto w-full">
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-[180px] h-[calc(100vh-220px)] overflow-y-auto pr-4 custom-scrollbar">
          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-3">Checklist Sequences</p>
            {MASTER_SCRIPT.map((proc) => (
              <a
                key={proc.id}
                href={`#${proc.id}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-slate-800 text-slate-400 hover:text-white group"
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">{proc.icon}</span>
                <span className="truncate">{proc.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Script Content */}
        <div className="flex-grow max-w-4xl pb-32">
          {MASTER_SCRIPT.map((proc) => (
            <ProcedureSection key={proc.id} procedure={proc} details={details} />
          ))}
        </div>
      </main>

      {/* Progress Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-t border-slate-700 p-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] uppercase font-bold text-slate-500 tracking-widest">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">ORIGIN:</span>
              <span className="text-slate-100">{details.origin || '---'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">DEST:</span>
              <span className="text-slate-100">{details.destination || '---'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">FLIGHT:</span>
              <span className="text-slate-100">{details.airline} {details.flightCode}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <span>Gemini AI Synthetic Voice</span>
             <span className="h-1 w-1 rounded-full bg-slate-600" />
             <span>Standard Flight Operations</span>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
