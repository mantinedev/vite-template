import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/providers/AuthProvider';

type Props = {
	children: React.ReactNode;
};

export const UserProtectedRoute = ({ children }: Props) => {
	const { isLoggedIn } = useAuthContext();
	if (!isLoggedIn) {
		return <Navigate to="/auth/login" replace />;
	}
	return children;
};
