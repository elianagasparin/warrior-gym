import { Link } from "react-router-dom";
import "./NavBar.css"
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Logo } from "../components/Logo"

export const NavBar = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
        <header>
        <Logo />
          <nav id="navegacion">
            <ul className="opciones">
                <li>
                    <button className="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
                    </button>
                </li>
                <li><Link to="/exercises">Ejercicios</Link></li>
                <li><Link to="/likes">Likes</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>                    
                <li><Link to="/" onClick={() => logout()}/>Cerrar Sesión</li>
            </ul>
            </nav>   
        </header>
        
        </>
                   
    )
}