import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Auth = () => {
    const { user } = useContext(AuthContext);

    return (
        <p>Bienvenid@ {user.name}!</p>
    )
};