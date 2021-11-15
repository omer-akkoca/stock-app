import INITIALSTATE from "./initializationState"
import * as ACTIONS from "../actions/actionTypes"

function buyedStocksTotalReducer(state = INITIALSTATE.buyedStocksTotal, action) {
    switch (action.type) {
        case ACTIONS.BUYED_STOCKS_TOTAL:
            const newState = action.payload
            return newState;
        default:
            return state;
    }
}

export default buyedStocksTotalReducer;