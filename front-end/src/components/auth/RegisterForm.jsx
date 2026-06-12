import { useState } from "react";

import validateEmail from "../../utils/validatos";
import FormError from "../ui/FormError";
import { getProfile, login, register } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const completeAllFields = 'Please complete all fields';
    const errorInvalidEmailAddress = 'Please enter a valid email address';
    const errorPasswordTooShort = 'Please enter a password that is at least 6 characters long';
    const errorPasswordNotMatch = 'Passwords must match'

    async function handleSubmit(event) {
        event.preventDefault();

        const hasEmptyFields =
            email.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === '';

        const isEmailValid = validateEmail(email);

        const isPasswordValid = password.length >= 6;

        const doPasswordsMatch = password === confirmPassword;

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

        if (!doPasswordsMatch) {
            setError(errorPasswordNotMatch);

            return;
        }

        setError('');

        const userData = {
            email,
            password
        };

        try {
            await register(userData);

            await login(userData);

            const profile = await getProfile();

            console.log(profile);

            navigate('/profile');
        } catch (error) {
            console.error(error);
            setError('Something went wrong. Please try again.');
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

            <div className="auth-form__group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm your password" />
            </div>

            {<FormError message={error} />}

            <button type="submit" className="auth-form__button">
                Create Account
            </button>
        </form>
    );
};

export default RegisterForm;