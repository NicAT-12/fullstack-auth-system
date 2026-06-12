import { Link } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
    return (
        <AuthLayout>
            <Link to='/' className="auth-back">&lt; Back to Home</Link>
            <div className="auth-header">
                <h1 className="auth-header__title">Login</h1>
                <p className="auth-header__text">Access your account</p>
            </div>
            <LoginForm />
            <Link to='/register' className="auth-form__link">
                <p>Don't have an account? Create one</p>
            </Link>
        </AuthLayout>
    )
}

export default Login