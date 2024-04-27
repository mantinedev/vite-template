import { useLocalStorage } from '@mantine/hooks';
import { createContext, useContext, useMemo } from 'react';

import { SESSION_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants/localStorage';
import { User } from '@/services/http-api-service';
import { Maybe } from '@/types';

type AuthContext = {
	user: Maybe<User>;
	isLoggedIn: boolean;
	login: (data: User) => void;
	logout: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

export function useAuthContext(): AuthContext {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuthContext must be used within an AuthContext.Provider');
	}

	return context;
}

type Props = {
	children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
		key: SESSION_STORAGE_KEY,
		defaultValue: false
	});

	const [user, setUser] = useLocalStorage<User | null>({
		key: USER_STORAGE_KEY
	});

	const login = async (data: User) => {
		setIsLoggedIn(true);
		setUser(data);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUser(null);
	};

	const value = useMemo(
		() => ({
			user,
			isLoggedIn,
			login,
			logout
		}),
		[user]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
