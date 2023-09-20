import { Link } from "react-router-dom"

export const LoginButton = ({text}) => {
    return (
        <Link to='/login' className="enter">{text}</Link>
    )
}