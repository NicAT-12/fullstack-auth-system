const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <section className="auth-layout__card">
                {children}
            </section>
        </div>
    )
}

export default AuthLayout