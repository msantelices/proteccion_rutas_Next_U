import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../componentes/LayoutComponent';
import routes from '../../router/routes'

const NotFoundPage = () => {
    
    return (
        <Layout>
            <h1>Not Found</h1>
            <nav>
                <Link to={ routes.HOME }>Ir a Home</Link>
            </nav>
        </Layout>
    )
}

export default NotFoundPage