import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/providers/AuthProvider';

type Props = {
	children: React.ReactNode;
};

export const UserProtectedRoute = ({ children }: Props) => {
	const { isInitialized, isLoggedIn } = useAuthContext();

	if (isInitialized && !isLoggedIn) {
		return <Navigate to="/auth/login" replace />;
	}
	return children;
};
