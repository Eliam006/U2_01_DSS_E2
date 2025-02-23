import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Bitacora from './Bitacora';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("El correo no es válido.");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 5 caracteres.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Inicio de sesión exitoso!");
        navigate("/bitacora");
        localStorage.setItem("token", data.data.token);
        console.log(data.data.token);
        console.log(data);

      } else {
        const errorData = await response.json();
        setError(errorData.message || "Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div className='shadow-lg p-4 mb-5 bg-body-tertiary rounded' style={{ minWidth: '400px', width: '80%', maxWidth: '800px' }}>
      <p className='fs-2 fw-bold'>Bienvenido</p>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Contraseña</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary w-100 mb-3'>Iniciar Sesión</button>
      </form>
      <Link to='/registro' className="w-100 btn btn-outline-info">Registrarse</Link>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/bitacora' element={<Bitacora />} />
    </Routes>
  );
}

export default App
