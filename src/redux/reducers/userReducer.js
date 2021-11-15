import INISTATE from "./initializationState"
import * as ACTIONSTYPES from "../actions/actionTypes"

function userReducer(state = INISTATE.currentUser, action) {
    switch (action.type) {
        case ACTIONSTYPES.LOGIN:
            localStorage.setItem("currentUser",JSON.stringify(action.payload))
            const users = JSON.parse(localStorage.getItem("users"))
            localStorage.setItem("users",JSON.stringify(users.map(user => user.id === action.payload.id ? action.payload : user))) 
            return action.payload;
        case ACTIONSTYPES.LOGOUT:
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;