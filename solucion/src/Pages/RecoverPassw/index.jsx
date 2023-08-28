import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../componentes/LayoutComponent';
import routes from '../../router/routes';

const RecoverPasswordPage = () => {
    
    return (
        <Layout>
            <h1>Recover Password</h1>
            <nav>
                <Link to={ routes.LOGIN}>Volver a Inicio de Sesión</Link>
            </nav>
        </Layout>
    )
}

export default RecoverPasswordPage