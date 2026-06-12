export const validateAuthMiddleware = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send('Email and password are required'); // Verifica si email o password existen

    if (!email.trim() || !password.trim()) return res.status(400).send('Email and password are required'); // Verifica que email y password no sean solo espacios en blanco

    if (!email.includes('@') || !email.includes('.')) return res.status(400).send('Invalid email format'); // Verifica si email tiene '@' o '.'

    next();
};