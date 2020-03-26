import * as actionType from "./actionTypes";

export const selectFlightDetails = (cityFrom, cityTo, distance, fly_duration) => {
  return {
    type: actionType.SELECT_FLIGHT,
    cityFrom: cityFrom,
    cityTo: cityTo,
    distance: distance,
    duration: fly_duration
  };
};

export const selectAirportTo = (event, airportTo, reason) => {
  return {
    type: actionType.SELECT_AIRPORT_TO,
    airportTo: airportTo,
    reason: reason
  };
};

export const selectAirportFrom = (event, airportFrom, reason) => {
  return {
    type: actionType.SELECT_AIRPORT_FROM,
    airportFrom: airportFrom,
    reason: reason
  };
};
