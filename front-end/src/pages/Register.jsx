import { Link } from "react-router-dom"

import RegisterForm from "../components/auth/RegisterForm"
import AuthLayout from "../layouts/AuthLayout"

const Register = () => {
    return (
        <AuthLayout>
            <Link to='/' className="auth-back">&lt; Back to Home</Link>
            <div className="auth-header">
                <h1 className="auth-header__title">Register</h1>
                <p className="auth-header__text">Create your account</p>
            </div>
            <RegisterForm />
            <Link to='/login' className="auth-form__link">
                <p>Have an account? Login</p>
            </Link>
        </AuthLayout>
    )
}

export default Register