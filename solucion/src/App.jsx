import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import LogInPage from './Pages/LogIn'
import RecoverPasswordPage from './Pages/RecoverPassw'
import NotFoundPage from './Pages/NotFound'
import PrivateRoute from './utils/PrivateRoutes'
import routes from './router/routes'
import './App.css'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.HOME} element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute >
                }/>   
                <Route path={routes.LOGIN} element={<LogInPage />} />
                <Route path={routes.RECOVERPASS} element={<RecoverPasswordPage />} />
                <Route path={routes.ERROR404} element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
