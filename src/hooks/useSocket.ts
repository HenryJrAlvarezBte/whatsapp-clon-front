import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001';

const useSocket = () => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const newSocket = io(SOCKET_URL, {
			withCredentials: true,
		});
		setSocket(newSocket);

		return () => {
			newSocket.close();
		};
	}, []);

	return socket;
};

export default useSocket;
