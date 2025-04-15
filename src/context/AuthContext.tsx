import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, setUser);
		return () => unsubscribe();
	}, []);

	const login = async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password);
	};

	const register = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password);
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error('useAuth debe usarse dentro de un AuthProvider');
	return context;
};
