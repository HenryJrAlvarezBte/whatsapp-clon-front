import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import '../styles/chat.css';

const Chat = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	return (
		<Container fluid className="p-3">
			<Row>
				<Col
					md={3}
					className="border-end text-white bg-gray-900"
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

				<Col
					md={9}
					className="d-flex flex-column text-white bg-dark"
					style={{ height: '90vh' }}
				>
					<div>
						<h5>Chat con usuario 1</h5>
						<Button variant="danger" onClick={handleLogout}>
							Cerrar sesión
						</Button>
					</div>

					<div
						className="flex-grow-1 border p-3 mb-3 bg-dark"
						style={{ overflowY: 'auto', backgroundColor: '#f1f1f1' }}
					>
						<div className="mb-2">
							<strong>Usuario 1:Hola, ¿cómo estás?</strong>
						</div>
						<div className="mb-2 text-end">
							<strong>Yo: Como estas?</strong>
						</div>
					</div>

					<Form className="d-flex gap-2">
						<Form.Control type="text" placeholder="Escribe un mensaje..." />
						<Button variant="primary">Enviar</Button>
					</Form>
				</Col>
			</Row>
			{/* <div className="container mt-5 text-center text-white">
				<h1>Chat</h1>
				<p>
					Estas contectado como: <strong>{user?.email}</strong>
				</p>
				<Button onClick={handleLogout}>Cerrar sesión</Button>
			</div> */}
		</Container>
	);
};

export default Chat;
