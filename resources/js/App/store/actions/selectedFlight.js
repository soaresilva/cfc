import * as actionType from "./actionTypes";
import { carbonFormula } from "./../../functions/carbonFormula";

export const selectFlightDetails = (cityFrom, cityTo, distance, fly_duration, dateDepart, economyClass, businessClass) => {
  const totalCO2Amount = carbonFormula(distance, totalCO2Amount, economyClass, businessClass);
  return {
    type: actionType.SELECT_FLIGHT,
    cityFrom: cityFrom,
    cityTo: cityTo,
    distance: distance,
    duration: fly_duration,
    totalCO2amount: totalCO2Amount,
    dateDepart: dateDepart
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

export const selectDateFrom = (dateFrom) => {
  return {
    type: actionType.SELECT_DATE_FROM,
    dateFrom: dateFrom
  };
};

export const selectDateTo = (dateTo) => {
  return {
    type: actionType.SELECT_DATE_TO,
    dateTo: dateTo
  };
};
