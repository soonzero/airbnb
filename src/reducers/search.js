export default function search(currentState, action) {
  if (currentState === undefined) {
    return {
      destination: "",
      checkIn: "",
      checkOut: "",
      guests: {
        total: undefined,
        adults: undefined,
        kids: undefined,
        infants: undefined,
        animals: undefined,
      },
    };
  }

  const newState = { ...currentState };
  if (action.type == "SET_SEARCH_CONDITION") {
    newState.destination = action.data.destination;
    newState.checkIn = action.data.checkIn;
    newState.checkOut = action.data.checkOut;
    newState.total = action.data.guests.total;
    newState.guests.adults = action.data.guests.adults;
    newState.guests.kids = action.data.guests.kids;
    newState.guests.infants = action.data.guests.infants;
    newState.guests.animals = action.data.guests.animals;
  } else if (action.type == "CLEAR_SEARCH_CONDITION") {
    newState.destination = "";
    newState.checkIn = "";
    newState.checkOut = "";
    newState.total = undefined;
    newState.guests.adults = undefined;
    newState.guests.kids = undefined;
    newState.guests.infants = undefined;
    newState.guests.animals = undefined;
  }

  return newState;
}
