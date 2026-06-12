import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";

const Profile = ({ userData }) => {
    const navigate = useNavigate();

    const handleLogout = async() => {
        await logout();
        navigate('/');
    };
    return (
        <main className="profile">
            <section className="profile__card">
                <Link to='/' className="auth-back">&lt; Back to Home</Link>
                <h1 className="profile__title">Profile</h1>

                <div className="profile__info">
                    <p className="profile__label">ID</p>
                    <p className="profile__value">{userData.id}</p>
                </div>

                <div className="profile__info">
                    <p className="profile__label">Email</p>
                    <p className="profile__value">{userData.email}</p>
                </div>
                <button onClick={handleLogout} className="profile__logout-btn">
                    Logout
                </button>
            </section>
        </main>
    )
};

export default Profile;