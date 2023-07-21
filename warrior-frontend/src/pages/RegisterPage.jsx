import './FormPage.css'
import { useState } from "react"
import { registerUserService } from "../services";

export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await registerUserService({name, email, password});
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="registerForm">
            <h3 className="formTitle">Registro</h3>
            <form onSubmit={handleForm}>
               <ul>
                <li className="form-content">
                    <fieldset>
                        <label htmlFor='name'>Nombre:</label>
                        <input 
                            type='name' 
                            name='name' 
                            id='name'
                            placeholder='Introduce tu nombre' 
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </fieldset>
                </li>
                <li className="form-content">
                    <fieldset>
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type='email' 
                            name='email'
                            id='email' 
                            placeholder='Ingresa tu correo electrónico'
                            required
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>
                </li>
                {error ? <p className="error">{error}</p> : null}
                <li className="form-content">
                    <button className="entrar">Registrarme</button>                    
                </li>
            </ul> 
       </form>
    </section>
    )
}