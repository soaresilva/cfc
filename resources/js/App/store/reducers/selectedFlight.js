import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cityFrom: "",
  cityTo: "",
  airportTo: "",
  airportFrom: "",
  distance: null,
  duration: null,
  totalCO2amount: null,
  dateDepart: null,
  dateFrom: null,
  dateTo: null,
  quantity: null,
  fetched: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_FLIGHT:
      return {
        ...state,
        cityFrom: action.cityFrom,
        cityTo: action.cityTo,
        distance: action.distance,
        duration: action.duration,
        fetched: true,
        totalCO2amount: action.totalCO2amount,
        dateDepart: action.dateDepart
      };
    case actionTypes.SELECT_AIRPORT_TO:
      if (action.reason === "clear") {
        return {
          ...state,
          airportTo: ""
        };
      }
      return {
        ...state,
        airportTo: action.airportTo.title.slice(0, 3)
      };
    case actionTypes.SELECT_AIRPORT_FROM:
      if (action.reason === "clear") {
        return {
          ...state,
          airportFrom: ""
        };
      }
      return {
        ...state,
        airportFrom: action.airportFrom.title.slice(0, 3)
      };

    case actionTypes.SELECT_DATE_TO:
      return {
        ...state,
        dateTo: action.dateTo
      };

    case actionTypes.SELECT_DATE_FROM:
      return {
        ...state,
        dateFrom: action.dateFrom
      };

    case actionTypes.SELECT_QUANTITY:
      return {
        ...state,
        quantity: action.quantity
      }
    default:
      return state;
  }
};

export default reducer;
