import { useLocalStorage } from '@mantine/hooks';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { SESSION_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants/localStorage';
import { Maybe } from '@/types';
import { User } from '@/types/user';

type AuthContext = {
	isInitialized: boolean;
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
	const [isInitialized, setIsInitialized] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
		key: SESSION_STORAGE_KEY,
		defaultValue: false
	});

	const [user, setUser] = useLocalStorage<User | null>({
		key: USER_STORAGE_KEY
	});

	useEffect(() => {
		if (!isInitialized) {
			setIsInitialized(true);
		}
	}, []);

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
			isInitialized,
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
