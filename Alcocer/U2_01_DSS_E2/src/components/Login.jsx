const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center text-primary mb-4">Iniciar Sesión</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Tu correo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Tu contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
                <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none text-muted">¿No tienes cuenta?</a>
                </div>
            </div>
        </div>
    )
}

export default Login