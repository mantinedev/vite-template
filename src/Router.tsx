import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthUiLayout from './layouts/AuthUILayout';
import UserUiLayout from './layouts/UserUILayout';
import { LoginPage } from './pages/auth/Login.page';
import ErrorPage from './pages/Error.page';
import { HomePage } from './pages/Home.page';
import { UserManagementPage } from './pages/UserManagement.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <></>,
		errorElement: <ErrorPage />
	},
	{
		path: '/auth',
		element: <AuthUiLayout />,
		children: [
			{
				path: 'login',
				element: <LoginPage />
			}
		]
	},
	{
		path: '/user',
		element: <UserUiLayout />,
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
