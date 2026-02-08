import React, { useMemo, useState, useRef, useEffect } from 'react';
import { FlightDetails } from '../types';
import { AIRPORTS, AIRLINES, ATIS_CODES, AIRCRAFT_MODELS } from '../constants';

interface Props {
  details: FlightDetails;
  onChange: (details: FlightDetails) => void;
  onReset: () => void;
}

const TOOLTIPS: Record<string, string> = {
  airline: "The operating carrier's name used in callsigns and announcements.",
  aircraft: "The aircraft type and model for this flight.",
  flightCode: "The specific flight number (e.g., 173).",
  origin: "Departure airport code (ICAO).",
  destination: "Arrival airport code (ICAO).",
  runway: "The active runway assigned for departure at the origin airport.",
  landingRunway: "The anticipated runway for arrival at the destination airport.",
  atis: "The phonetic letter of the current weather report (e.g., ALPHA). Automatically updated on airport change.",
  gate: "The assigned parking stand at the destination terminal.",
  timeOfDay: "Adjusts greetings in passenger announcements.",
  altitude: "Target cruising altitude in feet.",
  squawk: "The 4-digit transponder code assigned by ATC.",
  departureFreq: "Radio frequency for initial departure clearance.",
  approachFreq: "Radio frequency for arrival and approach control.",
  groundFreq: "Radio frequency for taxi and surface movements."
};

interface SearchableSelectProps {
  label: string;
  name: keyof FlightDetails;
  value: string;
  options: { value: string; label: string; sublabel?: string; icon?: string }[];
  onChange: (name: keyof FlightDetails, value: string) => void;
  tooltip: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ label, name, value, options, onChange, tooltip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(() => {
    const s = search.toLowerCase();
    return options.filter(opt => 
      opt.label.toLowerCase().includes(s) || 
      opt.value.toLowerCase().includes(s) ||
      (opt.sublabel && opt.sublabel.toLowerCase().includes(s))
    );
  }, [options, search]);

  const selectedOption = useMemo(() => options.find(o => o.value === value), [options, value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const inputClass = "bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-slate-100 placeholder-slate-500 transition-all text-left flex justify-between items-center cursor-pointer h-[34px]";
  const labelClass = "text-[10px] uppercase font-bold text-slate-500 mb-1 flex items-center gap-1 tracking-wider";

  return (
    <div className="relative group" ref={containerRef}>
      <label className={labelClass}>
        {label}
        <div className="w-3 h-3 rounded-full bg-slate-700 text-[8px] flex items-center justify-center cursor-help text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">?</div>
      </label>
      <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
        {tooltip}
      </div>
      
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={inputClass}
      >
        <div className="flex items-center gap-2 truncate">
          {selectedOption?.icon && (
            <img src={selectedOption.icon} alt="" className="w-4 h-4 rounded-sm flex-shrink-0" onError={(e) => (e.currentTarget.style.display = 'none')} />
          )}
          <span className="truncate">{selectedOption ? selectedOption.label : 'Select...'}</span>
        </div>
        <svg className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-md shadow-2xl z-[100] overflow-hidden">
          <div className="p-2 border-b border-slate-800">
            <input 
              autoFocus
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(name, opt.value);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full text-left px-3 py-2 text-xs hover:bg-blue-600/20 transition-colors flex items-center gap-3 ${value === opt.value ? 'bg-blue-600/10 text-blue-400' : 'text-slate-300'}`}
                >
                  {opt.icon && (
                    <img src={opt.icon} alt="" className="w-6 h-6 rounded bg-white p-0.5 flex-shrink-0" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  )}
                  <div className="flex flex-col truncate">
                    <span className="font-bold truncate">{opt.label}</span>
                    {opt.sublabel && <span className="text-[10px] text-slate-500 truncate">{opt.sublabel}</span>}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-center text-xs text-slate-600">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const FlightControls: React.FC<Props> = ({ details, onChange, onReset }) => {
  const [isRefreshingAtis, setIsRefreshingAtis] = useState(false);
  const sortedAirports = useMemo(() => [...AIRPORTS].sort((a, b) => a.name.localeCompare(b.name)), []);
  const sortedAirlines = useMemo(() => [...AIRLINES].sort((a, b) => a.name.localeCompare(b.name)), []);
  const sortedAircraft = useMemo(() => [...AIRCRAFT_MODELS].sort((a, b) => a.label.localeCompare(b.label)), []);

  const originAirport = useMemo(() => AIRPORTS.find(a => a.icao === details.origin), [details.origin]);
  const destAirport = useMemo(() => AIRPORTS.find(a => a.icao === details.destination), [details.destination]);

  // Simulate picking a random ATIS letter
  const getSimulatedAtis = () => {
    return ATIS_CODES[Math.floor(Math.random() * ATIS_CODES.length)];
  };

  const handleFieldChange = (name: keyof FlightDetails, value: string) => {
    const newDetails = { ...details, [name]: value };

    // Automatic ATIS logic: When airport changes, simulate "receiving" new ATIS
    if (name === 'origin' || name === 'destination') {
      newDetails.atis = getSimulatedAtis();
      setIsRefreshingAtis(true);
      setTimeout(() => setIsRefreshingAtis(false), 500);
    }

    if (name === 'origin') {
      const newOrigin = AIRPORTS.find(a => a.icao === value);
      newDetails.runway = newOrigin?.runways[0] || '';
    }

    if (name === 'destination') {
      const newDest = AIRPORTS.find(a => a.icao === value);
      newDetails.landingRunway = newDest?.runways[0] || '';
      newDetails.gate = newDest?.gates[0] || '';
    }

    onChange(newDetails);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleFieldChange(name as keyof FlightDetails, value);
  };

  const handleManualAtisRefresh = () => {
    setIsRefreshingAtis(true);
    handleFieldChange('atis', getSimulatedAtis());
    setTimeout(() => setIsRefreshingAtis(false), 500);
  };

  const inputClass = "bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-slate-100 placeholder-slate-500 transition-all appearance-none h-[34px]";
  const labelClass = "text-[10px] uppercase font-bold text-slate-500 mb-1 flex items-center gap-1 tracking-wider";

  const renderSelect = (name: keyof FlightDetails, label: string, options: { value: string; label: string }[]) => (
    <div className="relative group">
      <label className={labelClass}>
        {label}
        <div className="w-3 h-3 rounded-full bg-slate-700 text-[8px] flex items-center justify-center cursor-help text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">?</div>
      </label>
      <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
        {TOOLTIPS[name]}
      </div>
      <div className="relative">
        <select 
          name={name} 
          value={details[name as keyof FlightDetails]} 
          onChange={handleChange} 
          className={inputClass}
        >
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );

  const renderAtisSelect = () => (
    <div className="relative group">
      <label className={labelClass}>
        ATIS Code
        <div className="w-3 h-3 rounded-full bg-slate-700 text-[8px] flex items-center justify-center cursor-help text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">?</div>
      </label>
      <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
        {TOOLTIPS.atis}
      </div>
      <div className="relative flex gap-1">
        <div className="relative flex-grow">
          <select 
            name="atis" 
            value={details.atis} 
            onChange={handleChange} 
            className={`${inputClass} ${isRefreshingAtis ? 'ring-2 ring-blue-400' : ''}`}
          >
            {ATIS_CODES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <button 
          onClick={handleManualAtisRefresh}
          title="Refresh ATIS Information"
          className={`bg-slate-800 border border-slate-700 rounded p-1.5 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all ${isRefreshingAtis ? 'animate-spin' : ''}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderInput = (name: keyof FlightDetails, label: string, placeholder?: string) => (
    <div className="relative group">
      <label className={labelClass}>
        {label}
        <div className="w-3 h-3 rounded-full bg-slate-700 text-[8px] flex items-center justify-center cursor-help text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">?</div>
      </label>
      <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-2xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
        {TOOLTIPS[name]}
      </div>
      <input 
        name={name} 
        value={details[name as keyof FlightDetails]} 
        onChange={handleChange} 
        className={inputClass} 
        placeholder={placeholder} 
      />
    </div>
  );

  return (
    <div className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-20 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-4">
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 w-full">
          
          <SearchableSelect 
            label="Airline"
            name="airline"
            value={details.airline}
            onChange={handleFieldChange}
            tooltip={TOOLTIPS.airline}
            options={sortedAirlines.map(a => ({ 
              value: a.name, 
              label: a.name, 
              sublabel: a.callsign,
              icon: a.domain ? `https://www.google.com/s2/favicons?sz=64&domain=${a.domain}` : undefined
            }))}
          />

          <SearchableSelect 
            label="Aircraft Model"
            name="aircraft"
            value={details.aircraft}
            onChange={handleFieldChange}
            tooltip={TOOLTIPS.aircraft}
            options={sortedAircraft.map(a => ({ 
              value: a.value, 
              label: a.label, 
              sublabel: a.value
            }))}
          />

          {renderInput('flightCode', 'Flight Code', '452')}

          <SearchableSelect 
            label="Origin"
            name="origin"
            value={details.origin}
            onChange={handleFieldChange}
            tooltip={TOOLTIPS.origin}
            options={sortedAirports.map(a => ({ value: a.icao, label: a.name, sublabel: a.icao }))}
          />

          <SearchableSelect 
            label="Destination"
            name="destination"
            value={details.destination}
            onChange={handleFieldChange}
            tooltip={TOOLTIPS.destination}
            options={sortedAirports.map(a => ({ value: a.icao, label: a.name, sublabel: a.icao }))}
          />
          
          {renderSelect('runway', 'Dep Runway', 
            originAirport ? originAirport.runways.map(r => ({ value: r, label: r })) : [{ value: details.runway, label: details.runway }]
          )}
          
          {renderSelect('landingRunway', 'Arr Runway', 
            destAirport ? destAirport.runways.map(r => ({ value: r, label: r })) : [{ value: details.landingRunway, label: details.landingRunway }]
          )}
          
          {renderSelect('gate', 'Gate', 
            destAirport ? destAirport.gates.map(g => ({ value: g, label: g })) : [{ value: details.gate, label: details.gate }]
          )}

          {renderAtisSelect()}
          
          {renderSelect('timeOfDay', 'Time of Day', [
            { value: 'morning', label: 'Morning' },
            { value: 'afternoon', label: 'Afternoon' },
            { value: 'evening', label: 'Evening' }
          ])}
          
          {renderInput('altitude', 'Altitude', '35000')}
          {renderInput('squawk', 'Squawk', '4522')}
          {renderInput('departureFreq', 'Dep Freq', '121.9')}
          <div className="hidden xl:block">
            {renderInput('approachFreq', 'App Freq', '119.7')}
          </div>
          <div className="hidden xl:block">
            {renderInput('groundFreq', 'Gnd Freq', '121.7')}
          </div>
        </div>
        
        <button 
          onClick={onReset}
          className="bg-slate-800 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 border border-slate-700 text-slate-400 px-4 py-2 rounded font-bold text-[10px] uppercase tracking-widest transition-all flex-shrink-0 mb-0.5 h-9"
        >
          Reset
        </button>
      </div>
    </div>
  );
};