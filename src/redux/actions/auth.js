import * as ACTIONTYPES from "./actionTypes"

export const login = (user) => ({
    type : ACTIONTYPES.LOGIN,
    payload : user
})

export const handleLogin = (email,password) =>{
    return (dispatch) => {
        const users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        const loggedUser = users.find(el => el.email === email && el.password === password)
        if (!(loggedUser === undefined)) {
            dispatch(login(loggedUser))
        }else{
            throw new Error("There is no user with this informations.")
        }
    }
}

export const handleSignup = (user) =>{
    return (dispatch) =>{
        const users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if (users.find(el => el.email === user.email) === undefined) {
            localStorage.setItem("users",JSON.stringify([...users,user]))
            dispatch(login(user))
        }else{
            throw new Error("This email address already taken.")
        }
    }
}

export const logout = () => ({
    type : ACTIONTYPES.LOGOUT,
    payload : {}
})