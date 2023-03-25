import { Navigate, Outlet } from 'react-router-dom';
import { getUserData } from '../../utils/localStorage';

const PublicRoute = ({children}) => {
    const isAuthenticated = getUserData();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />  
};

export default PublicRoute;