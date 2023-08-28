import React from "react";
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../utils/cookieFunctions';
import Layout from "../../componentes/LayoutComponent";
import routes from "../../router/routes";

const HomePage = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        deleteCookie('token');
        navigate(routes.LOGIN);
    };
    
    return (
        <Layout>
            <h1>Bienvenido/a </h1>
            <section>
                <button className="button-logout" onClick={handleLogout}>Cerrar Sesión</button>
            </section>
        </Layout>
    )
}

export default HomePage