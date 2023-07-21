import { Link } from "react-router-dom"
import './FormPage.css'
import { useState } from "react"

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <section className="loginForm">
            <h3 className="formTitle">Iniciar Sesión</h3>
            <form>                
                <ul>
                    <li className="form-content">
                        <fieldset>
                            <label htmlFor='email'>Email:</label>
                            <input 
                                type='email' 
                                name='email'
                                id='email' 
                                placeholder='Ingresa tu correo electrónico'
                                required
                            />
                        </fieldset>
                    </li>
                    <li className="form-content">
                        <fieldset>
                           <label htmlFor='password'>Contraseña:</label>
                            <input 
                                type='password' 
                                name='password'
                                id='password' 
                                placeholder='Ingresa tu contraseña'
                                required
                            />
                        </fieldset>
                    </li>
                    <li className="form-content">
                        <button className="entrar">
                            <Link to='/workouts'>Entrar</Link>
                        </button>                    
                    </li>
                </ul> 
            </form>
            <p className="link">Aún no estas registrado? <Link to='/register' className="registrar">Registrate</Link></p>
        </section>
    )
}