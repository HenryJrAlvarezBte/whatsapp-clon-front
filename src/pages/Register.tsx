import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import { useAuth } from '../context/AuthContext';

const Register = () => {
	const { register } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await register(email, password);
			navigate('/chat');
		} catch (err) {
			alert('Error al registrarse');
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center">
			<h2 className="text-center mb-4">Registrarse</h2>

			<Form onSubmit={handleSubmit} className="mt-3">
				<Form.Group controlId="formEmail">
					<Form.Label>Correo electrónico</Form.Label>
					<Form.Control
						type="email"
						placeholder="Ingrese su correo electrónico"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formPassword" className="mt-3">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingrese su contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button variant="primary" type="submit" className="mt-4 w-100">
						Registrarse
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default Register;
