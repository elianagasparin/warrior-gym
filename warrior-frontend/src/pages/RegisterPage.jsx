import '../components/Forms.css'
import { useState } from "react"
import { registerUserService } from "../services";
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await registerUserService({name, email, password});
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleClick = () => {
        console.log('Acción exitosa.');
    }

    return (
        <section className="registerForm">
            <h3 className="formTitle">Registro</h3>
            <form onSubmit={handleForm}>
            <ul>
                <li className="form-content">
                    <fieldset>
                        <label htmlFor="name">Nombre:</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            placeholder="Introduce tu nombre"
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="off"
                        />
                    </fieldset>
                </li>
                <li className="form-content">
                    <fieldset>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email" 
                            placeholder="Ingresa tu correo electrónico"
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                    </fieldset>
                </li>
                <li className="form-content">
                    <fieldset>
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </fieldset>
                </li>
                {error ? <p className="error">{error}</p> : null}
            </ul> 
            <Button type={'submit'} className={'entrar'} text={"Registrarme"} onClick={handleClick} />
            </form>
        </section>
    )
}
