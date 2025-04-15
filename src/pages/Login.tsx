import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(email, password);
			navigate('/chat');
		} catch (error) {
			alert('Error al iniciar sesion');
		}
	};
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<h2 className="text-center mb-4">Iniciar sesión</h2>
			<Form onSubmit={handleSubmit} className="mt-3">
				<Form.Group controlId="formEmail">
					<Form.Label>Correo electronico</Form.Label>
					<Form.Control
						type="email"
						placeholder="Ingresa tu correo electronico"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formPassword" className="mt-3">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingresa tu contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit" className="mt-4 w-100">
					Iniciar sesion
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
