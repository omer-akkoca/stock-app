import INISTATE from "./initializationState"
import * as ACTIONTYPES from "../actions/actionTypes"

const sellStockReducer = (state = INISTATE.buyStock, action) =>{
    switch (action.type) {
        case ACTIONTYPES.SELL_STOCK:
            const newState = action.payload
            return newState;
        case ACTIONTYPES.RESET_SELL_STOCK:
            const newState2 = action.payload
            return newState2;
        default:
            return state;
    }
}

export default sellStockReducer;