import { Procedure, AirportData, AirlineData } from './types';

export const AIRPORTS: AirportData[] = [
  // --- ASIA (Expanded) ---
  { icao: 'RJTT', name: 'Tokyo Haneda (HND)', runways: ['04', '05', '16L', '16R', '22', '23', '34L', '34R'], gates: ['105', '112', '140', '5'] },
  { icao: 'RJAA', name: 'Tokyo Narita (NRT)', runways: ['16L', '16R', '34L', '34R'], gates: ['21', '34', '42', '51'] },
  { icao: 'WSSS', name: 'Singapore Changi (SIN)', runways: ['02L', '02C', '02R', '20L', '20C', '20R'], gates: ['A1', 'B5', 'C20', 'D42', 'E5'] },
  { icao: 'VHHH', name: 'Hong Kong (HKG)', runways: ['07L', '07R', '25L', '25R'], gates: ['5', '18', '24', '62', '511'] },
  { icao: 'RKSI', name: 'Seoul Incheon (ICN)', runways: ['15L', '15R', '16L', '16R', '33L', '33R', '34L', '34R'], gates: ['10', '101', '250'] },
  { icao: 'ZBAA', name: 'Beijing Capital (PEK)', runways: ['01', '18L', '18R', '19', '36L', '36R'], gates: ['T3-C', 'T2-A'] },
  { icao: 'ZBAD', name: 'Beijing Daxing (PKX)', runways: ['01L', '11L', '17L', '17R', '19R', '29R', '35L', '35R'], gates: ['A01', 'B02', 'C03'] },
  { icao: 'ZSPD', name: 'Shanghai Pudong (PVG)', runways: ['16L', '16R', '17L', '17R', '34L', '34R', '35L', '35R'], gates: ['G101', 'G120', 'D80'] },
  { icao: 'RCTP', name: 'Taipei Taoyuan (TPE)', runways: ['05L', '05R', '23L', '23R'], gates: ['A1', 'B5', 'C10', 'D7'] },
  { icao: 'WMKK', name: 'Kuala Lumpur (KUL)', runways: ['14L', '14R', '15', '32L', '32R', '33'], gates: ['A2', 'B10', 'C1', 'G4'] },
  { icao: 'VTBS', name: 'Bangkok Suvarnabhumi (BKK)', runways: ['01L', '01R', '19L', '19R'], gates: ['D1', 'E5', 'G2'] },
  { icao: 'VIDP', name: 'Delhi Indira Gandhi (DEL)', runways: ['09', '10', '11', '27', '28', '29'], gates: ['1', '12', 'T3-14'] },
  { icao: 'VABB', name: 'Mumbai Chhatrapati (BOM)', runways: ['09', '14', '27', '32'], gates: ['M1', 'P5', 'T2-10'] },
  { icao: 'WIII', name: 'Jakarta Soekarno-Hatta (CGK)', runways: ['07L', '07R', '25L', '25R'], gates: ['D1', 'E2', 'F5'] },
  { icao: 'RPLL', name: 'Manila Ninoy Aquino (MNL)', runways: ['06', '13', '24', '31'], gates: ['1', '7', '15'] },
  { icao: 'VVTS', name: 'Ho Chi Minh Tan Son Nhat (SGN)', runways: ['07L', '07R', '25L', '25R'], gates: ['1', '12', '18'] },
  
  // --- MIDDLE EAST ---
  { icao: 'OMDB', name: 'Dubai Intl (DXB)', runways: ['12L', '12R', '30L', '30R'], gates: ['A1', 'B12', 'C5', 'F1'] },
  { icao: 'OTHH', name: 'Doha Hamad (DOH)', runways: ['16L', '16R', '34L', '34R'], gates: ['A1', 'B5', 'C10', 'E2'] },
  { icao: 'OERK', name: 'Riyadh King Khalid (RUH)', runways: ['15L', '15R', '33L', '33R'], gates: ['11', '24', '36'] },
  { icao: 'LTFM', name: 'Istanbul Airport (IST)', runways: ['16L', '16R', '17L', '17R', '18', '34L', '34R', '35L', '35R', '36'], gates: ['A1', 'B5', 'F12', 'G1'] },

  // --- EUROPE ---
  { icao: 'EGLL', name: 'London Heathrow (LHR)', runways: ['09L', '09R', '27L', '27R'], gates: ['A14', 'A22', 'B36', 'B42', 'C54'] },
  { icao: 'LFPG', name: 'Paris Charles de Gaulle (CDG)', runways: ['08L', '08R', '09L', '09R', '26L', '26R', '27L', '27R'], gates: ['E21', 'F12', 'G04'] },
  { icao: 'EHAM', name: 'Amsterdam Schiphol (AMS)', runways: ['06', '09', '18C', '18L', '18R', '22', '24', '27', '36C', '36L', '36R'], gates: ['D10', 'E4', 'F7'] },
  { icao: 'EDDF', name: 'Frankfurt (FRA)', runways: ['07L', '07C', '07R', '25L', '25C', '25R', '18'], gates: ['A1', 'B20', 'C15'] },
  { icao: 'LEMD', name: 'Madrid Barajas (MAD)', runways: ['14L', '14R', '18L', '18R', '32L', '32R', '36L', '36R'], gates: ['T4-10', 'T2-5'] },
  { icao: 'LSZH', name: 'Zurich (ZRH)', runways: ['10', '14', '16', '28', '32', '34'], gates: ['A5', 'B12', 'E22'] },

  // --- NORTH AMERICA ---
  { icao: 'KJFK', name: 'New York JFK (JFK)', runways: ['04L', '04R', '13L', '13R', '22L', '22R', '31L', '31R'], gates: ['1', '4', '12', '25'] },
  { icao: 'KLAX', name: 'Los Angeles (LAX)', runways: ['06L', '06R', '07L', '07R', '24L', '24R', '25L', '25R'], gates: ['10', '24', '101', '150'] },
  { icao: 'KSFO', name: 'San Francisco (SFO)', runways: ['01L', '01R', '10L', '10R', '19L', '19R', '28L', '28R'], gates: ['A1', 'B15', 'F4', 'G92'] },
  { icao: 'KORD', name: 'Chicago O\'Hare (ORD)', runways: ['04L', '04R', '09L', '09C', '09R', '10L', '10C', '10R', '22L', '22R', '27L', '27C', '27R', '28L', '28C', '28R'], gates: ['B1', 'C18', 'K5', 'M10'] },
  { icao: 'CYYZ', name: 'Toronto Pearson (YYZ)', runways: ['05', '06L', '06R', '15L', '15R', '23', '24L', '24R', '33L', '33R'], gates: ['120', '135', '512'] },

  // --- OCEANIA ---
  { icao: 'YSSY', name: 'Sydney Kingsford Smith (SYD)', runways: ['07', '16L', '16R', '25', '34L', '34R'], gates: ['8', '24', '50', '63'] },
  { icao: 'NZAA', name: 'Auckland (AKL)', runways: ['05L', '05R', '23L', '23R'], gates: ['2', '8', '15'] },

  // --- SOUTH AMERICA ---
  { icao: 'SBGR', name: 'São Paulo Guarulhos (GRU)', runways: ['09L', '09R', '27L', '27R'], gates: ['201', '205', '304', '312'] },
  { icao: 'SAEZ', name: 'Buenos Aires Ezeiza (EZE)', runways: ['11', '17', '29', '35'], gates: ['1', '8', '14'] },

  // --- AFRICA ---
  { icao: 'FAOR', name: 'Johannesburg (JNB)', runways: ['03L', '03R', '21L', '21R'], gates: ['A1', 'B5', 'C12'] },
  { icao: 'HECA', name: 'Cairo (CAI)', runways: ['05C', '05L', '05R', '23C', '23L', '23R'], gates: ['T3-G1', 'T2-F'] }
];

export const AIRLINES: AirlineData[] = [
  // --- ASIA (Expanded) ---
  { name: 'Singapore Airlines', callsign: 'SIA', domain: 'singaporeair.com' },
  { name: 'Cathay Pacific', callsign: 'CPA', domain: 'cathaypacific.com' },
  { name: 'Japan Airlines', callsign: 'JAL', domain: 'jal.co.jp' },
  { name: 'All Nippon Airways', callsign: 'ANA', domain: 'ana.co.jp' },
  { name: 'Korean Air', callsign: 'KAL', domain: 'koreanair.com' },
  { name: 'Asiana Airlines', callsign: 'AAR', domain: 'flyasiana.com' },
  { name: 'Thai Airways', callsign: 'THA', domain: 'thaiairways.com' },
  { name: 'Air India', callsign: 'AIC', domain: 'airindia.in' },
  { name: 'IndiGo', callsign: 'IGO', domain: 'goindigo.in' },
  { name: 'Vietnam Airlines', callsign: 'HVN', domain: 'vietnamairlines.com' },
  { name: 'Malaysia Airlines', callsign: 'MAS', domain: 'malaysiaairlines.com' },
  { name: 'Garuda Indonesia', callsign: 'GIA', domain: 'garuda-indonesia.com' },
  { name: 'EVA Air', callsign: 'EVA', domain: 'evaair.com' },
  { name: 'China Eastern', callsign: 'CES', domain: 'ceair.com' },
  { name: 'China Southern', callsign: 'CSN', domain: 'csair.com' },
  { name: 'Air China', callsign: 'CCA', domain: 'airchina.com.cn' },
  { name: 'Philippine Airlines', callsign: 'PAL', domain: 'philippineairlines.com' },
  
  // --- MIDDLE EAST ---
  { name: 'Emirates', callsign: 'UAE', domain: 'emirates.com' },
  { name: 'Qatar Airways', callsign: 'QTR', domain: 'qatarairways.com' },
  { name: 'Etihad Airways', callsign: 'ETD', domain: 'etihad.ae' },
  { name: 'Turkish Airlines', callsign: 'THY', domain: 'turkishairlines.com' },
  { name: 'Saudia', callsign: 'SVA', domain: 'saudia.com' },

  // --- GLOBAL ---
  { name: 'British Airways', callsign: 'BAW', domain: 'britishairways.com' },
  { name: 'Lufthansa', callsign: 'DLH', domain: 'lufthansa.com' },
  { name: 'Air France', callsign: 'AFR', domain: 'airfrance.com' },
  { name: 'KLM Royal Dutch', callsign: 'KLM', domain: 'klm.com' },
  { name: 'United Airlines', callsign: 'UAL', domain: 'united.com' },
  { name: 'Delta Air Lines', callsign: 'DAL', domain: 'delta.com' },
  { name: 'American Airlines', callsign: 'AAL', domain: 'aa.com' },
  { name: 'Qantas', callsign: 'QFA', domain: 'qantas.com.au' },
  { name: 'Air Canada', callsign: 'ACA', domain: 'aircanada.com' },
  { name: 'LATAM Airlines', callsign: 'LAN', domain: 'latamairlines.com' }
];

export const AIRCRAFT_MODELS = [
  { label: 'Airbus A220-300', value: 'A223' },
  { label: 'Airbus A319', value: 'A319' },
  { label: 'Airbus A320neo', value: 'A20N' },
  { label: 'Airbus A321neo', value: 'A21N' },
  { label: 'Airbus A330-900neo', value: 'A339' },
  { label: 'Airbus A340-600', value: 'A346' },
  { label: 'Airbus A350-900', value: 'A359' },
  { label: 'Airbus A350-1000', value: 'A35K' },
  { label: 'Airbus A380-800', value: 'A388' },
  { label: 'Boeing 737-800', value: 'B738' },
  { label: 'Boeing 737 MAX 8', value: 'B38M' },
  { label: 'Boeing 747-400', value: 'B744' },
  { label: 'Boeing 747-8i', value: 'B748' },
  { label: 'Boeing 757-200', value: 'B752' },
  { label: 'Boeing 767-300ER', value: 'B763' },
  { label: 'Boeing 777-200LR', value: 'B77L' },
  { label: 'Boeing 777-300ER', value: 'B77W' },
  { label: 'Boeing 777F', value: 'B77F' },
  { label: 'Boeing 787-8 Dreamliner', value: 'B788' },
  { label: 'Boeing 787-9 Dreamliner', value: 'B789' },
  { label: 'Boeing 787-10 Dreamliner', value: 'B78X' },
  { label: 'Embraer E175', value: 'E175' },
  { label: 'Embraer E190-E2', value: 'E290' },
  { label: 'Bombardier CRJ-900', value: 'CRJ9' },
  { label: 'ATR 72-600', value: 'AT76' },
  { label: 'Concorde', value: 'CONC' },
  { label: 'Gulfstream G650', value: 'GLF6' },
  { label: 'Cessna 172 Skyhawk', value: 'C172' }
];

export const ATIS_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const MASTER_SCRIPT: Procedure[] = [
  {
    id: 'aircraft-prep',
    title: '1. AIRCRAFT PREPARATION',
    icon: '⚡',
    lines: [
      { id: 'ap1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Good morning. Let’s start the pre-flight checks.' },
      { id: 'ap2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Pre-flight checklist initiated.' },
      { id: 'ap3', speaker: 'Pilot', icon: '👨‍✈️', text: 'IRS aligning, estimated alignment time 7 minutes.' },
      { id: 'ap4', speaker: 'Pilot', icon: '👨‍✈️', text: 'Copy.' },
      { id: 'ap5', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Good morning Captain, cabin crew onboard. Cabin preparation commencing.' },
      { id: 'ap6', speaker: 'Pilot', icon: '👨‍✈️', text: 'Good morning. Estimated departure in 45 minutes. Please advise when cabin is ready.' }
    ]
  },
  {
    id: 'boarding-phase',
    title: '2. BOARDING PHASE',
    icon: '👥',
    lines: [
      { id: 'bp1', speaker: 'Cabin Crew', icon: '📢', text: 'Good morning ladies and gentlemen, welcome aboard {airline} Flight {flightCode} to {destination}. Boarding has now commenced. Please have your boarding passes ready and follow crew instructions. Thank you.' },
      { id: 'bp2', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Captain, boarding has started. Estimated completion in 20 minutes.' },
      { id: 'bp3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Copy. Please advise when boarding is complete.' }
    ]
  },
  {
    id: 'before-start',
    title: '3. BEFORE START / DOORS CLOSED',
    icon: '🚪',
    lines: [
      { id: 'bs1', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Captain, boarding complete. All passengers seated. Cabin secure.' },
      { id: 'bs2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Thank you. Please arm doors and cross-check.' },
      { id: 'bs3', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Doors armed and cross-checked.' },
      { id: 'bs4', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, this is your captain speaking. Welcome aboard {airline} Flight {flightCode}. Our flight time today will be approximately {flightTime} hours. Please ensure your seatbelts are fastened and electronic devices are set to flight mode. Cabin crew, prepare for departure.' }
    ]
  },
  {
    id: 'push-start',
    title: '4. PUSHBACK & ENGINE START',
    icon: '🔄',
    lines: [
      { id: 'ps1', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Delivery, {airline} {flightCode}, request IFR clearance to {destination}.' },
      { id: 'ps2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, cleared to {destination} via {origin} departure, climb initially {altitude}, squawk {squawk}.' },
      { id: 'ps3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared to {destination} via {origin} departure, initial climb {altitude}, squawk {squawk}, {airline} {flightCode}.' },
      { id: 'ps4', speaker: 'Pilot', icon: '👨‍✈️', text: 'Ground, {airline} {flightCode} at gate {gate}, request pushback and engine start.' },
      { id: 'ps5', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, pushback approved, face west.' },
      { id: 'ps6', speaker: 'Pilot', icon: '👨‍✈️', text: 'Pushback approved, face west, {airline} {flightCode}.' },
      { id: 'ps7', speaker: 'Pilot', icon: '👨‍✈️', text: 'Clear to start engine one.' },
      { id: 'ps8', speaker: 'Pilot', icon: '👨‍✈️', text: 'Starting engine one.' },
      { id: 'ps9', speaker: 'Pilot', icon: '👨‍✈️', text: 'Engine one stabilized. Start engine two.' }
    ]
  },
  {
    id: 'taxi',
    title: '5. TAXI',
    icon: '🚕',
    lines: [
      { id: 'tx1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Ground, {airline} {flightCode} ready to taxi.' },
      { id: 'tx2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to runway {runway} via Alpha, Bravo, hold short Runway {runway}.' },
      { id: 'tx3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Taxi to runway {runway} via Alpha, Bravo, hold short Runway {runway}, {airline} {flightCode}.' },
      { id: 'tx4', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Cabin crew, please be seated for takeoff.' }
    ]
  },
  {
    id: 'takeoff',
    title: '6. LINE-UP & TAKEOFF',
    icon: '🛫',
    lines: [
      { id: 'to1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Tower, {airline} {flightCode} holding short Runway {runway}, ready for departure.' },
      { id: 'to2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, line up and wait Runway {runway}.' },
      { id: 'to3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Line up and wait Runway {runway}, {airline} {flightCode}.' },
      { id: 'to4', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, wind 260 at 10, Runway {runway} cleared for takeoff.' },
      { id: 'to5', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared for takeoff Runway {runway}, {airline} {flightCode}.' },
      { id: 'to6', speaker: 'Pilot', icon: '👨‍✈️', text: 'Thrust set. Checked. 80 knots. Checked. V1. Rotate. Positive climb. Gear up.' }
    ]
  },
  {
    id: 'climb-departure',
    title: '7. CLIMB & DEPARTURE',
    icon: '📈',
    lines: [
      { id: 'cd1', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, climb and maintain FL{altitude}.' },
      { id: 'cd2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Climb and maintain FL{altitude}, {airline} {flightCode}.' },
      { id: 'cd3', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we have reached our cruising altitude. You may now move about the cabin when the seatbelt sign is turned off.' }
    ]
  },
  {
    id: 'cruise-phase',
    title: '8. CRUISE PHASE',
    icon: '✈️',
    lines: [
      { id: 'cr1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cruise checklist.' },
      { id: 'cr2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cruise checklist complete.' },
      { id: 'cr3', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Captain, cabin service commencing.' },
      { id: 'cr4', speaker: 'Pilot', icon: '👨‍✈️', text: 'Approved.' }
    ]
  },
  {
    id: 'descent-prep',
    title: '9. DESCENT PREPARATION',
    icon: '📉',
    lines: [
      { id: 'dp1', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, descend and maintain FL120.' },
      { id: 'dp2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Descend and maintain FL120, {airline} {flightCode}.' },
      { id: 'dp3', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we have started our descent into {destination}. Please return to your seats and fasten your seatbelts.' }
    ]
  },
  {
    id: 'approach-landing',
    title: '10. APPROACH & LANDING',
    icon: '🎯',
    lines: [
      { id: 'al1', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, cleared ILS Runway {landingRunway}.' },
      { id: 'al2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared ILS Runway {landingRunway}, {airline} {flightCode}.' },
      { id: 'al3', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, wind 240 at 8, Runway {landingRunway} cleared to land.' },
      { id: 'al4', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared to land Runway {landingRunway}, {airline} {flightCode}.' },
      { id: 'al5', speaker: 'Pilot', icon: '👨‍✈️', text: 'Minimums. Landing. Spoilers deployed. Reverse green.' }
    ]
  },
  {
    id: 'taxi-in',
    title: '11. AFTER LANDING & TAXI IN',
    icon: '🛣️',
    lines: [
      { id: 'ti1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Ground, {airline} {flightCode} clear of Runway {landingRunway}, request taxi to gate.' },
      { id: 'ti2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to gate {gate} via Alpha.' },
      { id: 'ti3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Taxi to gate {gate} via Alpha, {airline} {flightCode}.' },
      { id: 'ti4', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, welcome to {destination}. Please remain seated until the seatbelt sign is turned off.' }
    ]
  },
  {
    id: 'parking-shutdown',
    title: '12. PARKING & ENGINE SHUTDOWN',
    icon: '🏁',
    lines: [
      { id: 'ps1', speaker: 'Pilot', icon: '👨‍✈️', text: 'Parking brake set. Shutdown checklist.' },
      { id: 'ps2', speaker: 'Pilot', icon: '👨‍✈️', text: 'Engines shut down. Checklist complete.' },
      { id: 'ps3', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Captain, doors disarmed.' },
      { id: 'ps4', speaker: 'Pilot', icon: '👨‍✈️', text: 'Thank you. You may open the doors.' },
      { id: 'ps5', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Thank you for flying with us today. On behalf of {airline} and the entire crew, we wish you a pleasant stay in {destination}.' }
    ]
  }
];