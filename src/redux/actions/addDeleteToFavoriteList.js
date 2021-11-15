import * as ACTIONS from "./actionTypes"
import { login } from "./auth"

export const addToFavorite = () => ({
    action : ACTIONS.ADD_TO_FAVORITE_LIST
})

export const removeFromFavorite = () => ({
    action : ACTIONS.REMOVE_FROM_FAVORITE_LIST
})

export const handleAddFavoriteList = (user,symbol) => {
    return (dispatch) =>{
        const newUser = {
            ...user,
            favorite_stocks: [...user.favorite_stocks,symbol]  
        }
        dispatch(login(newUser))
    }
}

export const handleRemoveFromFavorite = (user,symbol) =>{
    return (dispatch) =>{
        const newUser = {
            ...user,
            favorite_stocks: user.favorite_stocks.filter(el => el !== symbol)
        }
        dispatch(login(newUser))
    }
}