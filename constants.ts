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

export const ATIS_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const MASTER_SCRIPT: Procedure[] = [
  {
    id: 'boarding',
    title: 'BOARDING & CABIN PREPARATION',
    icon: '👥',
    lines: [
      { id: 'b1', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Good {timeOfDay}, ladies and gentlemen. On behalf of {airline} and the entire crew, we welcome you aboard flight {flightCode} to {destination}.' },
      { id: 'b2', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Please ensure your carry-on luggage is safely stowed in the overhead bins or under the seat in front of you. Emergency exits must remain clear of all items.' },
      { id: 'b3', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Cabin crew, boarding is complete. Please secure the cabin for departure and report.' },
      { id: 'b4', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, all doors closed and armed. Cross-check.' }
    ]
  },
  {
    id: 'pre-departure',
    title: 'PRE-FLIGHT – ATC CLEARANCE',
    icon: '📋',
    lines: [
      { id: 'l1', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Delivery, {airline} {flightCode}, gate {gate}, request IFR clearance to {destination} with information {atis}.' },
      { id: 'l2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, cleared to {destination} via the {origin} departure, then as filed. Maintain {altitude}, squawk {squawk}.' },
      { id: 'l3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared to {destination} via {origin} departure, maintain {altitude}, squawk {squawk}. {airline} {flightCode}.' },
      { id: 'l4', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we expect a smooth flight today with a flight time of {flightTime} hours. We will be departing shortly. Cabin crew, safety demonstration please.' }
    ]
  },
  {
    id: 'push-start',
    title: 'PUSHBACK & ENGINE START',
    icon: '🔄',
    lines: [
      { id: 'l7', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Ground, {airline} {flightCode}, request pushback and engine start.' },
      { id: 'l8', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, push and start approved. Tail north, face south. Contact Ground on {groundFreq} when ready to taxi.' },
      { id: 'l9', speaker: 'Pilot', icon: '👨‍✈️', text: 'Push and start approved, face south, {airline} {flightCode}.' },
      { id: 'l10', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, please observe the seatbelt sign. Ensure your seatback is in the full upright position and your tray table is stowed.' }
    ]
  },
  {
    id: 'taxi',
    title: 'TAXI – RUNWAY PROCEEDURE',
    icon: '🚕',
    lines: [
      { id: 'l11', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Ground, {airline} {flightCode}, ready for taxi with information {atis}.' },
      { id: 'l12', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to holding point runway {runway} via taxiway Bravo. Cross runway 16.' },
      { id: 'l13', speaker: 'Pilot', icon: '👨‍✈️', text: 'Taxi to holding point runway {runway} via Bravo, crossing runway 16. {airline} {flightCode}.' },
      { id: 'l14', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, take your seats for takeoff.' }
    ]
  },
  {
    id: 'takeoff',
    title: 'TAKEOFF & INITIAL CLIMB',
    icon: '🛫',
    lines: [
      { id: 'l15', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Tower, {airline} {flightCode}, holding short runway {runway}, ready for departure.' },
      { id: 'l16', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, runway {runway}, wind 260 at 10, cleared for takeoff.' },
      { id: 'l17', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared for takeoff runway {runway}. {airline} {flightCode}.' },
      { id: 'l18', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, contact Departure on {departureFreq}. Have a safe flight.' }
    ]
  },
  {
    id: 'climb-cruise',
    title: 'CLIMB & CRUISE SERVICE',
    icon: '☁️',
    lines: [
      { id: 'l19', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Departure, {airline} {flightCode} is with you, passing 2,500 for {altitude}.' },
      { id: 'l20', speaker: 'Captain PA', icon: '👨‍✈️', text: 'We have reached our cruising altitude of {altitude} feet. I have turned off the seatbelt sign, but please keep it fastened while seated.' },
      { id: 'l21', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'We will now begin our in-flight service. We have a selection of meals and beverages available for purchase. Please refer to the menu in your seat pocket.' }
    ]
  },
  {
    id: 'descent',
    title: 'DESCENT – APPROACH PREP',
    icon: '📉',
    lines: [
      { id: 'l22', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, descend and maintain FL120. Contact {destination} Approach on {approachFreq}.' },
      { id: 'l23', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Approach, {airline} {flightCode}, descending FL120 with information {atis}.' },
      { id: 'l24', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, expect ILS approach runway {landingRunway}. Descend and maintain 3,000 feet, QNH 1013.' },
      { id: 'l25', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, we have begun our descent into {destination}. Please ensure all electronic devices are in flight mode and your seatbelts are securely fastened.' }
    ]
  },
  {
    id: 'final-approach',
    title: 'FINAL – LANDING CLEARANCE',
    icon: '🎯',
    lines: [
      { id: 'l26', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Tower, {airline} {flightCode}, established on the ILS runway {landingRunway}.' },
      { id: 'l27', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, continue approach runway {landingRunway}. You are number 1.' },
      { id: 'l28', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, runway {landingRunway}, cleared to land. Wind 240 at 8.' },
      { id: 'l29', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared to land runway {landingRunway}. {airline} {flightCode}.' },
      { id: 'l29a', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, we are now on our final approach to {destination}. Please ensure your seatbelt is securely fastened, your tray table is stowed, and your window shade is open.' },
      { id: 'l30a', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, please perform final checks of the cabin for landing.' },
      { id: 'l30', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, take your seats for landing.' }
    ]
  },
  {
    id: 'taxi-gate',
    title: 'POST-LANDING – TAXI TO GATE',
    icon: '🛣️',
    lines: [
      { id: 'l32', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, welcome to {destination}. Vacate right on Delta, contact Ground on {groundFreq}.' },
      { id: 'l33', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Ground, {airline} {flightCode}, runway vacated on Delta, request taxi to gate {gate}.' },
      { id: 'l34', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to gate {gate} via Delta and Alpha. Cross runway 22.' }
    ]
  },
  {
    id: 'arrival',
    title: 'ARRIVAL – GATE OPERATIONS',
    icon: '🏁',
    lines: [
      { id: 'l36', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Welcome to {destination}. Please remain seated until the aircraft has come to a complete stop and the seatbelt sign is off.' },
      { id: 'l36a', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, we have arrived at the gate. Please remain seated until the seatbelt sign has been turned off and the Captain indicates it is safe to disembark. Thank you for flying {airline}!' },
      { id: 'l37', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'We hope you enjoyed your flight. Please check your surroundings for any personal items before you disembark.' },
      { id: 'l38', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, doors disarmed and cross-check. Ground staff, you may approach the aircraft.' },
      { id: 'l39', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, the seatbelt sign has been turned off. You may now collect your belongings and disembark through the forward doors. Thank you for flying {airline}!' }
    ]
  }
];