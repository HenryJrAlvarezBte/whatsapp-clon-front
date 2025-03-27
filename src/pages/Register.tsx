import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			navigate('/chat');
		} catch (err) {
			alert('Error al registrarse');
		}
	};

	return (
		<div>
			<h2>Registrarse</h2>

			<Form>
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

				<Form.Group controlId="formPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingrese su contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button variant="primary" type="submit">
						Registrarse
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Register;
