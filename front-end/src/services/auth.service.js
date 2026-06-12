const API_URL = import.meta.env.VITE_API_URL;

// register
export const register = async (userData) => {
    const urlRegister = `${API_URL}/api/auth/register`;
    const response = await fetch(urlRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data
};

// login
export const login = async (userData) => {
    const urlLogin = `${API_URL}/api/auth/login`;
    const response = await fetch(urlLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data
};

// getProfile
export const getProfile = async () => {
    const urlProfile = `${API_URL}/api/auth/profile`;
    const response = await fetch(urlProfile, {
        method: 'GET',
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data
};

// logout
export const logout = async () => {
    const urlLogout = `${API_URL}/api/auth/logout`;

    const response = await fetch(urlLogout, {
        method: 'POST',
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }

    return await response.json();
};