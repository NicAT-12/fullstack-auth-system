import { useState } from "react";

import FormError from "../ui/FormError";
import validateEmail from "../../utils/validatos";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const completeAllFields = 'Please complete all fields';
    const errorInvalidEmailAddress = 'Please enter a valid email address';
    const errorPasswordTooShort = 'Please enter a password that is at least 6 characters long';

    async function handleSubmit(event) {
        event.preventDefault();

        const hasEmptyFields = email.trim() === '' || password.trim() === '';

        const isEmailValid = validateEmail(email);

        const isPasswordValid = password.length >= 6;

        if (hasEmptyFields) {
            setError(completeAllFields);

            return;
        }

        if (!isEmailValid) {
            setError(errorInvalidEmailAddress);

            return;
        }

        if (!isPasswordValid) {
            setError(errorPasswordTooShort);

            return;
        }

        const userData = {
            email,
            password
        };

        try {
            await login(userData);

            navigate('/profile');
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-form__group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" />
            </div>

            <div className="auth-form__group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" />
            </div>

            {<FormError message={error} />}

            <button type="submit" className="auth-form__button">
                Login
            </button>
        </form>
    )
};

export default LoginForm;