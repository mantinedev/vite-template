import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/providers/AuthProvider';

export const DefaultRoute = () => {
	const { isLoggedIn } = useAuthContext();

	if (!isLoggedIn) {
		return <Navigate to="/auth/login" replace />;
	}

	return <Navigate to="/user/dashboard" replace />;
};
