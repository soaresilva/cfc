import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cityFrom: "",
    cityTo: "",
    distance: null,
    duration: null,
    fetched: false,
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
            };

        default:
            return state;
    }
};

export default reducer;
