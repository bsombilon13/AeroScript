
import React, { useState } from 'react';
import { FlightDetails } from './types';
import { MASTER_SCRIPT } from './constants';
import { FlightControls } from './components/FlightControls';
import { ProcedureSection } from './components/ProcedureSection';

const App: React.FC = () => {
  const [details, setDetails] = useState<FlightDetails>({
    airline: 'Speedbird',
    flightCode: '173',
    origin: 'London',
    destination: 'New York',
    gate: 'A14',
    timeOfDay: 'afternoon',
    departureFreq: '121.97',
    squawk: '4521',
    runway: '27R',
    landingRunway: '04L',
    atis: 'DELTA',
    altitude: '38,000',
    flightTime: '7.5',
    groundFreq: '121.85',
    towerFreq: '118.50',
    approachFreq: '125.75'
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="bg-blue-950 p-6 shadow-2xl border-b border-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl backdrop-blur-md border border-blue-500/20">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase text-white">AeroScript Master</h1>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">Advanced Ops Automation</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">System State</span>
              <span className="text-xs font-mono text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                OPERATIONAL
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-right">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Active Frequency</span>
              <span className="text-xs font-mono text-blue-300">{details.departureFreq} MHz</span>
            </div>
          </div>
        </div>
      </header>

      {/* Inputs */}
      <FlightControls details={details} onChange={setDetails} />

      {/* Main Content */}
      <main className="flex-grow flex p-6 gap-8 max-w-7xl mx-auto w-full">
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-[180px] h-[calc(100vh-280px)] overflow-y-auto pr-4 custom-scrollbar">
          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-3 mb-4">Procedure Stack</p>
            {MASTER_SCRIPT.map((proc) => (
              <a
                key={proc.id}
                href={`#${proc.id}`}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-slate-900 border border-transparent hover:border-slate-800 text-slate-500 hover:text-blue-400 group"
              >
                <span className="text-lg opacity-40 group-hover:opacity-100 transition-opacity">{proc.icon}</span>
                <span className="truncate">{proc.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Script Content */}
        <div className="flex-grow max-w-4xl pb-40">
          {MASTER_SCRIPT.map((proc) => (
            <ProcedureSection key={proc.id} procedure={proc} details={details} />
          ))}
        </div>
      </main>

      {/* Progress Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-2xl border-t border-slate-800/50 p-5 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-10">
            <div className="space-y-1">
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-tighter">Departure</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-500">{details.origin || '----'}</span>
                <span className="text-slate-700">→</span>
                <span className="text-xs font-bold text-white">{details.destination || '----'}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-tighter">Flight Identifier</span>
              <span className="block text-xs font-bold text-white">{details.airline} {details.flightCode}</span>
            </div>
            <div className="space-y-1 hidden sm:block">
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-tighter">Squawk Code</span>
              <span className="block text-xs font-mono font-bold text-orange-500">{details.squawk}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <span className="text-[10px] font-bold text-blue-400 tracking-widest">DIGITAL FLIGHT FOLDER</span>
             </div>
             <div className="flex flex-col text-right">
                <span className="text-[9px] font-bold text-slate-600 tracking-widest">VER: 2.0.0-PRO</span>
                <span className="text-[9px] font-bold text-slate-600 tracking-widest uppercase">Standard Ops Only</span>
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
