
import React, { useState } from 'react';
import { Procedure, FlightDetails, ScriptLine } from '../types';
import { speak } from '../services/audioService';

interface Props {
  procedure: Procedure;
  details: FlightDetails;
}

export const ProcedureSection: React.FC<Props> = ({ procedure, details }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const getProcessedText = (text: string) => {
    return text.replace(/{(\w+)}/g, (_, key) => {
      return (details as any)[key] || `___`;
    });
  };

  const handlePlay = async (line: ScriptLine) => {
    if (playingId) return;
    setPlayingId(line.id);
    try {
      await speak(getProcessedText(line.text), line.speaker);
    } catch (err) {
      alert("Failed to play audio. Ensure your API key is valid.");
    } finally {
      setPlayingId(null);
    }
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
            className="flex gap-4 p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors group relative"
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

            <button
              onClick={() => handlePlay(line)}
              disabled={playingId !== null}
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                playingId === line.id 
                  ? 'bg-blue-500 animate-pulse' 
                  : 'bg-slate-700 hover:bg-blue-600 opacity-0 group-hover:opacity-100'
              }`}
            >
              {playingId === line.id ? (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
