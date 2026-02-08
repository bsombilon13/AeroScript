
import React from 'react';
import { Procedure, FlightDetails } from '../types';

interface Props {
  procedure: Procedure;
  details: FlightDetails;
}

export const ProcedureSection: React.FC<Props> = ({ procedure, details }) => {
  const getProcessedText = (text: string) => {
    return text.replace(/{(\w+)}/g, (_, key) => {
      return (details as any)[key] || `___`;
    });
  };

  return (
    <div id={procedure.id} className="mb-8 scroll-mt-64">
      <div className="flex items-center gap-3 mb-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
        <span className="text-2xl">{procedure.icon}</span>
        <h2 className="text-xl font-bold tracking-tight text-blue-400">{procedure.title}</h2>
      </div>

      <div className="space-y-3">
        {procedure.lines.map((line) => (
          <div 
            key={line.id} 
            className="flex gap-4 p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group relative"
          >
            <div className="flex-shrink-0 w-24">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{line.icon}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{line.speaker}</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <p className="text-slate-300 leading-relaxed mono">
                {getProcessedText(line.text)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
