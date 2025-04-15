import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './pages/Chat';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="/chat" element={<ProtectedRoute />}>
						<Route path="/chat" element={<Chat />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
