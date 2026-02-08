
export type Role = 'Pilot' | 'ATC' | 'Cabin Crew' | 'Captain PA';

export interface ScriptLine {
  id: string;
  speaker: Role;
  text: string;
  icon: string;
}

export interface Procedure {
  id: string;
  title: string;
  icon: string;
  lines: ScriptLine[];
}

export interface FlightDetails {
  origin: string;
  destination: string;
  flightCode: string;
  airline: string;
  gate: string;
  departureFreq: string;
  squawk: string;
  runway: string;
  landingRunway: string;
  atis: string;
  altitude: string;
  flightTime: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  groundFreq: string;
  towerFreq: string;
  approachFreq: string;
}
