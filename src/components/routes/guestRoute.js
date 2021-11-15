import { Navigate} from "react-router-dom"
import { useSelector } from 'react-redux'

const GuestRoute = ({ children }) => {

    const user = useSelector(state => state.userReducer)

    return (
        !(user && user.id) ? children : <Navigate to="/dashboard"/>
    )
}

export default GuestRoute;