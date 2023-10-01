import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {AuthPage} from './pages/Auth.page'
import Dashboard from './pages/Dashboard.page';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path : '/auth',
    element : <AuthPage />
  },
  {
    path:'/dashboard',
    element : <Dashboard/>
  }

]);

export function Router() {
  return <RouterProvider router={router} />;
}
