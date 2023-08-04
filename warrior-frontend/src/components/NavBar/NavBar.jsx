import { Link } from "react-router-dom";
import "./NavBar.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Logo } from "../Logo"

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { logout } = useContext(AuthContext);

    return (
        <>
        <header>
        <Logo />
        <button className="menu" onClick={()=> {
            setMenuOpen(!menuOpen)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </button>
        </header>
        <nav id="navegacion">
            <ul className={menuOpen ? "open" : ""}>
                <li><Link to="/search" >Buscar</Link></li>
                <li><Link to="/exercises">Ejercicios</Link></li>
                <li><Link to="/workouts" >Entrenamientos</Link></li>
                <li><Link to="/likes">Likes</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>                    
                <li><Link to="/" className='logout' onClick={() => logout()}>Cerrar Sesión</Link></li>
            </ul>
        </nav>
        </>
    )
}