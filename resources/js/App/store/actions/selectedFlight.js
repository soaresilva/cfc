import * as actionType from "./actionTypes";

export const selectFlightDetails = (
    cityFrom,
    cityTo,
    distance,
    fly_duration
) => {
    return {
        type: actionType.SELECT_FLIGHT,
        cityFrom: cityFrom,
        cityTo: cityTo,
        distance: distance,
        duration: fly_duration
    };
};
