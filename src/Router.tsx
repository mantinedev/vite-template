import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthUiLayout from './layouts/AuthUILayout';
import { DefaultRoute } from './layouts/Middlewares/DefaultRoute';
import UserUiLayout from './layouts/UserUILayout';
import { LoginPage } from './pages/auth/Login.page';
import ErrorPage from './pages/Error.page';
import { HomePage } from './pages/Home.page';
import { UserManagementPage } from './pages/UserManagement.page';
import { GuestProtectedRoute } from './layouts/Middlewares/GuestProtectedRoute';
import { UserProtectedRoute } from './layouts/Middlewares/UserProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultRoute />,
		errorElement: <ErrorPage />
	},
	{
		path: '/auth',
		element: (
			<GuestProtectedRoute>
				<AuthUiLayout />
			</GuestProtectedRoute>
		),
		children: [
			{
				path: 'login',
				element: <LoginPage />
			}
		]
	},
	{
		path: '/user',
		element: (
			<UserProtectedRoute>
				<UserUiLayout />
			</UserProtectedRoute>
		),
		children: [
			{
				path: 'dashboard',
				element: <HomePage />
			},
			{
				path: 'user-management',
				element: <UserManagementPage />
			}
		]
	}
]);

export function Router() {
	return <RouterProvider router={router} />;
}
