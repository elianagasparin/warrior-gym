import { Link, useNavigate } from "react-router-dom";
import '../components/Forms.css';
import { useContext, useState } from "react";
import { loginService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { Button } from "../components/Button";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const token = await loginService({email, password});
            console.log(token);

            login(token);

            localStorage.setItem("token", token);
            
            navigate("/exercises");
            
        } catch (error) {
            setError(error.message);
        }
    };

    const handleClick = () => {
        console.log('Acción exitosa.')
    }
    
    return (
        <section className="loginForm">
            <h3 className="formTitle">Iniciar Sesión</h3>
            <form onSubmit={handleForm}>                
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
                        <Button onClick={handleClick} className={'entrar'} text={'Entrar'} type={'submit'} />                   
                    </li>
                </ul> 
            </form>
            <p className="link">Aún no estas registrado? <Link to='/register' className="registrar">Registrate</Link></p>
        </section>
    )
}