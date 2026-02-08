import { Procedure } from './types';

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