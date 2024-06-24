import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {

    const { isLoggedIn, logout } = useAuth();

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
                        </li>
                        {isLoggedIn ?
                            <li className="nav-item">
                                <a type="button" className="nav-link" onClick={logout}>Logout</a>
                            </li> :
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;