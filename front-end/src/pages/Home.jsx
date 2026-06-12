import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home">
            <h1 className="home__title">
                Welcome to the authentication system
            </h1>

            <p className="home__text">
                Sign in or create an account to continue.
            </p>
            <div className="home__actions">
                <Link to="/login" className="home__button">
                    Sign In
                </Link>

                <Link to="/register" className="home__button home__button--secondary">
                    Create An Account
                </Link>
            </div>
        </main>
    );
};

export default Home;