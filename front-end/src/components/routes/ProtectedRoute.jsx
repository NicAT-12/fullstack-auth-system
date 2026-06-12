import { useState, useEffect, cloneElement } from "react";
import { Navigate } from "react-router-dom";
import { getProfile } from "../../services/auth.service";

const ProtectedRoute = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getProfile();
                setUserData(profile);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [])

    if (loading) {
        return (
            <main className="route-status">
                <h3 className="route-status__message">Verificando sesión...</h3>
            </main>
        );
    }

    if (error) {
        return <Navigate to='/login' replace />
    }

    return cloneElement(children, { userData })
};

export default ProtectedRoute;