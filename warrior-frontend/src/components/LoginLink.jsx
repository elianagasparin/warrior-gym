import { Link } from "react-router-dom"

export const LoginLink = ({text}) => {
    return (
        <Link to='/login' className="enter">{text}</Link>
    )
}