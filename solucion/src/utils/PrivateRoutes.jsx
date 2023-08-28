import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './cookieFunctions';
import routes from '../router/routes'


const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const cookie = getCookie('token');
        if (!cookie) {
            navigate(routes.LOGIN);
        }
    }, []);

    return children;
};

export default PrivateRoute; 