
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

  const inputClass = "bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full";
  const labelClass = "text-[10px] uppercase font-bold text-slate-400 mb-1 block";

  return (
    <div className="bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div>
          <label className={labelClass}>Airline</label>
          <input name="airline" value={details.airline} onChange={handleChange} className={inputClass} placeholder="e.g. Airline 123" />
        </div>
        <div>
          <label className={labelClass}>Flight Code</label>
          <input name="flightCode" value={details.flightCode} onChange={handleChange} className={inputClass} placeholder="e.g. 123" />
        </div>
        <div>
          <label className={labelClass}>Origin</label>
          <input name="origin" value={details.origin} onChange={handleChange} className={inputClass} placeholder="e.g. London" />
        </div>
        <div>
          <label className={labelClass}>Destination</label>
          <input name="destination" value={details.destination} onChange={handleChange} className={inputClass} placeholder="e.g. New York" />
        </div>
        <div>
          <label className={labelClass}>Gate</label>
          <input name="gate" value={details.gate} onChange={handleChange} className={inputClass} placeholder="e.g. B12" />
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
          <label className={labelClass}>Runway</label>
          <input name="runway" value={details.runway} onChange={handleChange} className={inputClass} placeholder="e.g. 24R" />
        </div>
        <div>
          <label className={labelClass}>Altitude (ft)</label>
          <input name="altitude" value={details.altitude} onChange={handleChange} className={inputClass} placeholder="e.g. 35000" />
        </div>
        <div>
          <label className={labelClass}>Flight Time (h)</label>
          <input name="flightTime" value={details.flightTime} onChange={handleChange} className={inputClass} placeholder="e.g. 7" />
        </div>
        <div>
          <label className={labelClass}>Squawk</label>
          <input name="squawk" value={details.squawk} onChange={handleChange} className={inputClass} placeholder="e.g. 4522" />
        </div>
        <div>
          <label className={labelClass}>Departure Freq</label>
          <input name="departureFreq" value={details.departureFreq} onChange={handleChange} className={inputClass} placeholder="e.g. 121.9" />
        </div>
        <div className="hidden lg:block">
          <label className={labelClass}>Approch Freq</label>
          <input name="approachFreq" value={details.approachFreq} onChange={handleChange} className={inputClass} placeholder="e.g. 119.7" />
        </div>
      </div>
    </div>
  );
};
