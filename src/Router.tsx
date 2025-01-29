import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CleaningSuppliesPage } from './pages/CleaningSupplies.page';
import { DetailersDepotPage } from './pages/DetailersDepot.page';
import { PartsPage } from './pages/Parts.page';
import { ToolsPage } from './pages/Tools.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { FandIPage } from './pages/f_i.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cleaning',
    element: <CleaningSuppliesPage />,
  },
  {
    path: '/detailers',
    element: <DetailersDepotPage />,
  },
  {
    path: '/f_and_i',
    element: <FandIPage />,
  },
  {
    path: '/parts',
    element: <PartsPage />,
  },
  {
    path: '/tools',
    element: <ToolsPage />,
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
