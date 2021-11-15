import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux" 
import { handleAddFavoriteList, handleRemoveFromFavorite } from '../../redux/actions/addDeleteToFavoriteList'

function AddDeletefavoriteStock({symbol}) {

    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const stock = user.favorite_stocks.find(el => el === symbol)
        if (!(stock === undefined)) {
            setIsFavorite(true)
        }
    }, [user,symbol])

    const handleClick = () =>{
        if (isFavorite) {
            setIsFavorite(false)
            dispatch(handleRemoveFromFavorite(user,symbol))
        } else {
            setIsFavorite(true)
            dispatch(handleAddFavoriteList(user,symbol))
        }
    }

    return (
        <abbr title="Add or remove to your favorites list.">
            <i
                className="fas fa-star add-delete-favorite"
                style={{color: isFavorite ? "yellow" : "white"}}
                onClick={handleClick}
            />
        </abbr>
    )
}

export default AddDeletefavoriteStock;