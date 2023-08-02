import { Link } from "react-router-dom";
import "./NavBar.css"
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Logo } from "../components/Logo"
import { NavBarContext } from "../context/NavBarContext";

export const NavBar = () => {
    const [menuHidden, setMenuHidden] = useState(true);
    const { logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuHidden(!menuHidden);
    };

    return (
        <>
        <header>
        <Logo />
          <nav id="navegacion">
            <ul className="opciones">
                <li>
                    <button className="menu"
                    onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
                    </button>
                </li>
                <li className="link">
                    <Link to="/exercises">Ejercicios</Link></li>
                <li className="link"><Link to="/likes">Likes</Link></li>
                <li className="link"><Link to="/favorites">Favoritos</Link></li>                    
                <li className="link"><Link to="/" onClick={() => logout()}>Cerrar Sesión</Link></li>
            </ul>
            </nav>   
        </header>
        
        </>
                   
    )
}