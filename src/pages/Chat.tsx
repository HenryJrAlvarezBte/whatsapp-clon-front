import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import '../styles/chat.css';

const Chat = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	return (
		<Container>
			<Row>
				<Col
					md={3}
					className="border-end"
					style={{ height: '90vh', overflowY: 'auto' }}
				>
					<h5>Chats</h5>
					<ListGroup>
						<ListGroup.Item>Usuario 1</ListGroup.Item>
					</ListGroup>
					<ListGroup>
						<ListGroup.Item>Usuario 2</ListGroup.Item>
					</ListGroup>
					<ListGroup>
						<ListGroup.Item>Usuario 3</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<div className="container mt-5 text-center text-white">
				<h1>Chat</h1>
				<p>
					Estas contectado como: <strong>{user?.email}</strong>
				</p>
				<Button onClick={handleLogout}>Cerrar sesión</Button>
			</div>
		</Container>
	);
};

export default Chat;
