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

export interface AirportData {
  icao: string;
  name: string;
  runways: string[];
  gates: string[];
}

export interface AirlineData {
  name: string;
  callsign: string;
  domain?: string;
}

export interface FlightDetails {
  origin: string;
  destination: string;
  flightCode: string;
  airline: string;
  aircraft: string;
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