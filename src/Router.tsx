import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/Aboutpage';
import { BasicAppShell } from './components/BasicAppShell';
import { KadaverPage } from './pages/Kadaverpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicAppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/home', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/kadaver', element: <KadaverPage /> },
      { path: '/*', element: <HomePage /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
