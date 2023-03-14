import { Navigate, Outlet } from 'react-router-dom';
import { getUserData } from '../../utils/localStorage';

const PrivateRoute = ({children}) => {
    const isAuthenticated = getUserData();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;