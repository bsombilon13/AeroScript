
import React from 'react';
import { FlightDetails } from '../types';

interface Props {
  details: FlightDetails;
  onChange: (details: FlightDetails) => void;
}

export const FlightControls: React.FC<Props> = ({ details, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...details, [name]: value });
  };

  const inputClass = "bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-slate-100 placeholder-slate-500 transition-all";
  const labelClass = "text-[10px] uppercase font-bold text-slate-500 mb-1 block tracking-wider";

  return (
    <div className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-20 shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        <div>
          <label className={labelClass}>Airline</label>
          <input name="airline" value={details.airline} onChange={handleChange} className={inputClass} placeholder="SkyLink" />
        </div>
        <div>
          <label className={labelClass}>Flight Code</label>
          <input name="flightCode" value={details.flightCode} onChange={handleChange} className={inputClass} placeholder="452" />
        </div>
        <div>
          <label className={labelClass}>Origin</label>
          <input name="origin" value={details.origin} onChange={handleChange} className={inputClass} placeholder="EGLL" />
        </div>
        <div>
          <label className={labelClass}>Destination</label>
          <input name="destination" value={details.destination} onChange={handleChange} className={inputClass} placeholder="KJFK" />
        </div>
        <div>
          <label className={labelClass}>Dep Runway</label>
          <input name="runway" value={details.runway} onChange={handleChange} className={inputClass} placeholder="27R" />
        </div>
        <div>
          <label className={labelClass}>Arr Runway</label>
          <input name="landingRunway" value={details.landingRunway} onChange={handleChange} className={inputClass} placeholder="04L" />
        </div>
        <div>
          <label className={labelClass}>ATIS Code</label>
          <input name="atis" value={details.atis} onChange={handleChange} className={inputClass} placeholder="ALPHA" />
        </div>
        <div>
          <label className={labelClass}>Gate</label>
          <input name="gate" value={details.gate} onChange={handleChange} className={inputClass} placeholder="B12" />
        </div>
        <div>
          <label className={labelClass}>Time of Day</label>
          <select name="timeOfDay" value={details.timeOfDay} onChange={handleChange} className={inputClass}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Altitude (ft)</label>
          <input name="altitude" value={details.altitude} onChange={handleChange} className={inputClass} placeholder="35000" />
        </div>
        <div>
          <label className={labelClass}>Squawk</label>
          <input name="squawk" value={details.squawk} onChange={handleChange} className={inputClass} placeholder="4522" />
        </div>
        <div>
          <label className={labelClass}>Dep Freq</label>
          <input name="departureFreq" value={details.departureFreq} onChange={handleChange} className={inputClass} placeholder="121.9" />
        </div>
        <div>
          <label className={labelClass}>App Freq</label>
          <input name="approachFreq" value={details.approachFreq} onChange={handleChange} className={inputClass} placeholder="119.7" />
        </div>
        <div className="hidden xl:block">
          <label className={labelClass}>Gnd Freq</label>
          <input name="groundFreq" value={details.groundFreq} onChange={handleChange} className={inputClass} placeholder="121.7" />
        </div>
      </div>
    </div>
  );
};
