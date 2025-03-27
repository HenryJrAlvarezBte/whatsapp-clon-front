import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			navigate('/chat');
		} catch (error) {
			alert('Error al iniciar sesion');
		}
	};
	return (
		<div>
			<h2>Iniciar sesión</h2>
			<Form onSubmit={handleSubmit}>
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

				<Form.Group controlId="formPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingresa tu contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Iniciar sesion
				</Button>
			</Form>
		</div>
	);
};

export default Login;
