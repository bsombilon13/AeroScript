import React from 'react';
import { FlightDetails } from '../types';

interface Props {
  details: FlightDetails;
  onChange: (details: FlightDetails) => void;
  onReset: () => void;
}

const TOOLTIPS: Record<string, string> = {
  airline: "The operating carrier's name used in callsigns and announcements.",
  flightCode: "The specific flight number (e.g., 173).",
  origin: "Departure airport code (ICAO or name).",
  destination: "Arrival airport code (ICAO or name).",
  runway: "The active runway assigned for departure.",
  landingRunway: "The anticipated runway for arrival.",
  atis: "The phonetic letter of the current weather report (e.g., ALPHA).",
  gate: "The assigned parking stand at the terminal.",
  timeOfDay: "Adjusts greetings in passenger announcements.",
  altitude: "Target cruising altitude in feet.",
  squawk: "The 4-digit transponder code assigned by ATC.",
  departureFreq: "Radio frequency for initial departure clearance.",
  approachFreq: "Radio frequency for arrival and approach control.",
  groundFreq: "Radio frequency for taxi and surface movements."
};

export const FlightControls: React.FC<Props> = ({ details, onChange, onReset }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...details, [name]: value });
  };

  const inputClass = "bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-slate-100 placeholder-slate-500 transition-all";
  const labelClass = "text-[10px] uppercase font-bold text-slate-500 mb-1 flex items-center gap-1 tracking-wider";

  const renderField = (name: keyof FlightDetails, label: string, type: 'input' | 'select' = 'input', placeholder?: string) => (
    <div className="relative group">
      <label className={labelClass}>
        {label}
        <div className="w-3 h-3 rounded-full bg-slate-700 text-[8px] flex items-center justify-center cursor-help text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">?</div>
      </label>
      
      {/* Custom Tooltip */}
      <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
        {TOOLTIPS[name]}
      </div>

      {type === 'input' ? (
        <input 
          name={name} 
          value={details[name as keyof FlightDetails]} 
          onChange={handleChange} 
          className={inputClass} 
          placeholder={placeholder} 
        />
      ) : (
        <select 
          name={name} 
          value={details[name as keyof FlightDetails]} 
          onChange={handleChange} 
          className={inputClass}
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      )}
    </div>
  );

  return (
    <div className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-20 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-4">
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 w-full">
          {renderField('airline', 'Airline', 'input', 'SkyLink')}
          {renderField('flightCode', 'Flight Code', 'input', '452')}
          {renderField('origin', 'Origin', 'input', 'EGLL')}
          {renderField('destination', 'Destination', 'input', 'KJFK')}
          {renderField('runway', 'Dep Runway', 'input', '27R')}
          {renderField('landingRunway', 'Arr Runway', 'input', '04L')}
          {renderField('atis', 'ATIS Code', 'input', 'ALPHA')}
          {renderField('gate', 'Gate', 'input', 'B12')}
          {renderField('timeOfDay', 'Time of Day', 'select')}
          {renderField('altitude', 'Altitude', 'input', '35000')}
          {renderField('squawk', 'Squawk', 'input', '4522')}
          {renderField('departureFreq', 'Dep Freq', 'input', '121.9')}
          {renderField('approachFreq', 'App Freq', 'input', '119.7')}
          <div className="hidden xl:block">
            {renderField('groundFreq', 'Gnd Freq', 'input', '121.7')}
          </div>
        </div>
        
        <button 
          onClick={onReset}
          className="bg-slate-800 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 border border-slate-700 text-slate-400 px-4 py-2 rounded font-bold text-[10px] uppercase tracking-widest transition-all flex-shrink-0 mb-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
};