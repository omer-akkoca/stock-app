import { Navigate} from "react-router-dom"
import { useSelector } from 'react-redux'

function UserRoute({children}) {

    const user = useSelector(state => state.userReducer)

    return (
        (user && user.id) ? children : <Navigate to="/"/>
    )
}

export default UserRoute;