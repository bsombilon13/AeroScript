
import { Procedure } from './types';

export const MASTER_SCRIPT: Procedure[] = [
  {
    id: 'pre-departure',
    title: 'PRE-DEPARTURE – AT THE GATE',
    icon: '🅿️',
    lines: [
      { id: 'l1', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Clearance, {airline} {flightCode}, gate {gate}, IFR to {destination}, information Alpha, request clearance.' },
      { id: 'l2', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, cleared to {destination} via {origin} departure. Maintain {altitude} feet, expect flight level 350 ten minutes after departure. Departure frequency {departureFreq}, squawk {squawk}.' },
      { id: 'l3', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared as filed, maintain {altitude}, departure {departureFreq}, squawk {squawk}. {airline} {flightCode}.' },
      { id: 'l4', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, good {timeOfDay}. This is your captain speaking. Welcome on board Flight {flightCode} to {destination}. We’re currently completing our pre-departure checks and expect an on-time departure. Flight time today will be approximately {flightTime} hours. Please ensure your mobile phones are set to airplane mode.' },
      { id: 'l5', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, please place your carry-on baggage properly in the overhead compartments or under the seat in front of you. Kindly fasten your seatbelt and ensure your seatback is upright and tray table stowed.' }
    ]
  },
  {
    id: 'pushback',
    title: 'DOOR CLOSED – PUSHBACK',
    icon: '🚪',
    lines: [
      { id: 'l6', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin secure. Doors armed.' },
      { id: 'l7', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Ground, {airline} {flightCode}, gate {gate}, request pushback.' },
      { id: 'l8', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, pushback approved, facing South.' },
      { id: 'l9', speaker: 'Pilot', icon: '👨‍✈️', text: 'Pushback approved, facing South. {airline} {flightCode}.' },
      { id: 'l10', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, the aircraft doors are now closed and we are ready for pushback. Please remain seated with your seatbelt fastened.' }
    ]
  },
  {
    id: 'taxi',
    title: 'TAXI – TO RUNWAY',
    icon: '🚕',
    lines: [
      { id: 'l11', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Ground, {airline} {flightCode}, ready to taxi.' },
      { id: 'l12', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to runway {runway} via taxiway Bravo, hold short runway {runway}.' },
      { id: 'l13', speaker: 'Pilot', icon: '👨‍✈️', text: 'Taxi to runway {runway} via Bravo, hold short runway {runway}. {airline} {flightCode}.' },
      { id: 'l14', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, please be seated for departure.' }
    ]
  },
  {
    id: 'takeoff',
    title: 'TAKEOFF – DEPARTURE',
    icon: '🛫',
    lines: [
      { id: 'l15', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Tower, {airline} {flightCode}, holding short runway {runway}, ready for departure.' },
      { id: 'l16', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, wind 240 at 10, runway {runway}, cleared for takeoff.' },
      { id: 'l17', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared for takeoff runway {runway}. {airline} {flightCode}.' },
      { id: 'l18', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Cabin crew, take your seats.' }
    ]
  },
  {
    id: 'climb',
    title: 'CLIMB – DEPARTURE CONTROL',
    icon: '⬆️',
    lines: [
      { id: 'l19', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, contact Departure {departureFreq}.' },
      { id: 'l20', speaker: 'Pilot', icon: '👨‍✈️', text: '{origin} Departure, {airline} {flightCode}, passing 2500 climbing {altitude}.' },
      { id: 'l21', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, radar contact. Climb and maintain {altitude}.' },
      { id: 'l22', speaker: 'Pilot', icon: '👨‍✈️', text: 'Climb and maintain {altitude}. {airline} {flightCode}.' }
    ]
  },
  {
    id: 'cruise',
    title: '✈️ CRUISE',
    icon: '✈️',
    lines: [
      { id: 'l23', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we have reached our cruising altitude of {altitude} feet. The seatbelt sign has been turned off; however, we recommend keeping your seatbelt fastened while seated. Cabin crew will be commencing inflight service shortly.' },
      { id: 'l24', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, we will now begin our inflight service.' }
    ]
  },
  {
    id: 'descent',
    title: '⬇️ DESCENT – APPROACH',
    icon: '⬇️',
    lines: [
      { id: 'l25', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, descend and maintain 10000 feet, contact Approach {approachFreq}.' },
      { id: 'l26', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Approach, {airline} {flightCode}, descending through FL180 for 10000.' },
      { id: 'l27', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, expect ILS runway {runway}, descend and maintain 4000.' },
      { id: 'l28', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we’ve started our descent into {destination}. Please ensure your seatbelt is fastened, seatback upright, and tray table stowed. Cabin crew, please prepare the cabin for arrival.' },
      { id: 'l29', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Ladies and gentlemen, we will be landing shortly. Please return to your seats and fasten your seatbelt.' }
    ]
  },
  {
    id: 'landing',
    title: '🛬 FINAL – LANDING',
    icon: '🛬',
    lines: [
      { id: 'l30', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, contact Tower {towerFreq}.' },
      { id: 'l31', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Tower, {airline} {flightCode}, established on ILS runway {runway}.' },
      { id: 'l32', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, wind 220 at 8, runway {runway}, cleared to land.' },
      { id: 'l33', speaker: 'Pilot', icon: '👨‍✈️', text: 'Cleared to land runway {runway}. {airline} {flightCode}.' }
    ]
  },
  {
    id: 'post-landing',
    title: '🚕 AFTER LANDING – TAXI TO GATE',
    icon: '🚕',
    lines: [
      { id: 'l34', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Tower, {airline} {flightCode}, runway vacated.' },
      { id: 'l35', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, contact Ground {groundFreq}.' },
      { id: 'l36', speaker: 'Pilot', icon: '👨‍✈️', text: '{destination} Ground, {airline} {flightCode}, clear of runway, request taxi to gate.' },
      { id: 'l37', speaker: 'ATC', icon: '🗼', text: '{airline} {flightCode}, taxi to gate {gate} via Alpha.' },
      { id: 'l38', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, welcome to {destination}. Please remain seated with your seatbelt fastened as we taxi to the gate.' }
    ]
  },
  {
    id: 'gate-arrival',
    title: '🅿️ AT THE GATE – DOORS OPEN',
    icon: '🅿️',
    lines: [
      { id: 'l39', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Chocks in place. Doors may be disarmed.' },
      { id: 'l40', speaker: 'Captain PA', icon: '👨‍✈️', text: 'Ladies and gentlemen, we’ve arrived at the gate and the seatbelt sign has been turned off. On behalf of the flight deck and cabin crew, thank you for flying with us.' },
      { id: 'l41', speaker: 'Cabin Crew', icon: '👩‍✈️', text: 'Please take care when opening the overhead compartments as items may have shifted during the flight. Thank you and have a pleasant day.' }
    ]
  }
];
