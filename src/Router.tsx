import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProtectedRoute from '@/components/ProtectedRoute';

import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/Homepage';
import AboutPage from '@/pages/Aboutpage';
import KadaverPage from '@/pages/Kadaverpage';
import BasicAppShell from '@/components/BasicAppShell';
import LogoutPage from '@/pages/LogoutPage';

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BasicAppShell />,
      children: [
        {
          path: '/home',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/about',
          element: (
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/kadaver',
          element: (
            <ProtectedRoute>
              <KadaverPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/logout',
          element: (
            <ProtectedRoute>
              <LogoutPage />
            </ProtectedRoute>
          ),
        },
        { path: '/login', element: <LoginPage /> },
        {
          path: '/*',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: '',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
