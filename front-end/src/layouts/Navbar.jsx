import { Link } from "react-router-dom";
import ThemeToggle from "../components/ui/ThemeToggle";

const Navbar = ({ theme, handlerTheme }) => {
    return (
        <header className="navbar">
            <Link to="/" className="navbar__brand">
                Auth App
            </Link>

            <nav className="navbar__links">
                <Link to="/" className="navbar__link">Home</Link>
                <Link to="/login" className="navbar__link">Login</Link>
                <Link to="/register" className="navbar__link">Register</Link>
                <Link to="/profile" className="navbar__link">Profile</Link>
                <ThemeToggle
                    theme={theme}
                    handlerTheme={handlerTheme}
                />
            </nav>
        </header>
    );
};

export default Navbar;