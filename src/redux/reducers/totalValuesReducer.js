import * as ACTIONS from "../actions/actionTypes"
import INITIALSTATE from "./initializationState"

function totalValuesReducer(state = INITIALSTATE.totalValues, action) {
    switch (action.type) {
        case ACTIONS.TOTAL_VALUES:
            return action.payload;
        default:
            return state;
    }
}

export default totalValuesReducer;