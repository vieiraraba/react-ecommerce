/* Importing the css file for the login page. */
import './Login.css';

/* Importing the Link component from the react-router-dom package. */
import { Link } from "react-router-dom";

/**
 * This is a login page
 * @returns A React element.
 */
const Login = () => {
    return (
        <>
        This is a login page
        <Link to="/">Home</Link>
        </>
    )
}


export default Login;