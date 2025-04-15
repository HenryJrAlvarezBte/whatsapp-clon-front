import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	return (
		<div className="text-white">
			<Container>
				<h1>Whatsapp</h1>
				{user ? (
					<>
						<p>Bienvenido, {user.email}</p>
						<Button variant="danger" onClick={handleLogout}>
							Cerrar sesión
						</Button>
					</>
				) : (
					<>
						<Button variant="primary" onClick={() => navigate('/login')}>
							Iniciar sesión
						</Button>
						<Button variant="secondary" onClick={() => navigate('/register')}>
							Registrarse
						</Button>
					</>
				)}
				<Button
					variant="primary"
					className="m-2"
					onClick={() => navigate('/login')}
				>
					Iniciar sesion
				</Button>
				<Button
					variant="secondary"
					className="m-2"
					onClick={() => navigate('/register')}
				>
					Registrarse
				</Button>
			</Container>
		</div>
	);
};

export default Home;
