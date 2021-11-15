import { combineReducers } from "redux"
import userReducer from "./userReducer"
import buyStockReducer from "./buyStockReducer"
import sellStockReducer from "./sellStockReducer"
import buyedStocksTotalReducer from "./buyedStocksTotalReducer"
import totalValuesReducer from "./totalValuesReducer"

const rootReducer = combineReducers({
    userReducer,
    buyStockReducer,
    sellStockReducer,
    buyedStocksTotalReducer,
    totalValuesReducer
})

export default rootReducer;