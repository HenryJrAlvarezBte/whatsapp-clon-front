import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCC0wBIiOV2UInxFXmod1gzu_rW7hxyaYM',
	authDomain: '',
	projectId: 'authentication-2cd41',
	storageBucket: '',
	massagingSenderId: '',
	appId: '126130595639',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
