
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const phoneRegex = /^[0-9]{10}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('El nombre es obligatorio.');
            return;
        }

        if (!emailRegex.test(email)) {
            setError('El correo no es válido.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError('El número de teléfono debe tener exactamente 10 dígitos.');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.');
            return;
        }

        setError('');
        enviarRegistro();
    };

    const cleanInput = (input) => {
        return input.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "").trim();
    };

    const cleanEmail = (input) => {
        return input.replace(/[^a-zA-Z0-9@._-]/g, "").trim();
    };

    const cleanPhone = (input) => {
        return input.replace(/\D/g, "");
    };

    const sanitizeInput = (input) => {
        return input.replace(/[<>{}]/g, "");
    };

    const enviarRegistro = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/user/registro/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: sanitizeInput(name),
                    email: sanitizeInput(email),
                    password: sanitizeInput(password),
                    phone: sanitizeInput(phone),
                    age: parseInt(age, 10)
                }),
            });

            if (response.ok) {
                navigate("/");
                alert('Registro exitoso!');
            } else {
                alert('Error al registrar usuario.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='shadow-lg p-4 mb-5 bg-body-tertiary rounded' style={{ minWidth: '400px', width: '80%', maxWidth: '800px' }}>
            <p className='fs-2 fw-bold'>Crea una cuenta</p>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label>Nombre completo</label>
                    <input type='text' className='form-control' placeholder='Juan Pablo'
                        value={name}
                        onChange={(e) => setName(cleanInput(e.target.value))}
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label>Correo</label>
                    <input type='email' className='form-control' placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(cleanEmail(e.target.value))}
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label>Teléfono</label>
                    <input type='tel' className='form-control' placeholder="777 213 3256"
                        value={phone}
                        onChange={(e) => setPhone(cleanPhone(e.target.value))}
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label>Edad</label>
                    <input type='number' className='form-control'
                        value={age}
                        min={18}
                        max={99}
                        onKeyDown={(e) => {
                            if (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-") {
                                e.preventDefault();
                            }
                        }}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label>Contraseña</label>
                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit' className='btn btn-primary w-100 mb-3'>Registrarse</button>
            </form>
        </div>
    )
}

export default Register