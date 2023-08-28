import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../../utils/cookieFunctions'
import routes from '../../router/routes';
import './style.css'

const LogInPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorUser, setErrorUser] = useState("")
    const [errorPass, setErrorPass] = useState("")
    const [fetchError, setFetchError] = useState("")

    const navigate = useNavigate()

    //Actualizar valores de estados username y password
    const handleChangeUser = e => {
        setErrorUser('')
        setUsername(e.target.value)
    };

    const handleChangePassw = e => {
        setErrorPass('')
        setPassword(e.target.value)
    };

    //Validar credenciales
    const login = async (e) => {
        e.preventDefault();

        //Validaciones de front
        let emptyFields = 0

        if(!username) {
            setErrorUser('El usuario es requerido')
            emptyFields += 1
        }
        if(!password){
            setErrorPass('La contraseña es requerida')
            emptyFields += 1
        }

        if(emptyFields > 0) {
            return
        }

        // Consulta en back
        const data = {
            username: username,
            password: password,
        };
      
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const json = await response.json()
            
            if (json.success) {
                // Si la respuesta es exitosa (código de estado 200), token se guarda en la cookie 'token'
                setCookie('token', json.token, { secure: true })
                navigate(routes.HOME)

            } else {
                // Si la respuesta no es exitosa, mostrar un mensaje de error
                setFetchError(json.message)
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error)
        }
    };
    
    return (
        <div className='container'>
            <form onSubmit={ login }>
                <h1>Login</h1>
                <section className="info">
                    <label htmlFor="user">Usuario</label>
                    <input 
                        type="text" 
                        id="user" 
                        placeholder="usuario" 
                        value={ username }
                        onChange={ handleChangeUser }
                    />
                    <p className='error-message'>{ errorUser }</p>
                </section>
                <section className="info">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="******"
                        value={ password }
                        onChange={ handleChangePassw }
                    />
                    <p className='error-message'>{ errorPass }</p>
                </section>
                <p className='error-message login-error'>{ fetchError }</p>
                <section className="button">
                    <button>Inicio de Sesión</button>
                </section>
                <nav className="recover">
                    <Link to={ routes.RECOVERPASS}>¿Olvidaste tu contraseña?</Link>
                </nav>
            </form>
        </div>
    )
}

export default LogInPage 
