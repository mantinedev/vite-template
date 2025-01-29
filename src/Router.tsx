import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CleaningSuppliesPage } from './pages/CleaningSupplies.page';
import { DetailersDepotPage } from './pages/DetailersDepot.page';
import { PartsPage } from './pages/Parts.page';
import { ToolsPage } from './pages/Tools.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { FandIPage } from './pages/f_i.page';
import { LoginPage } from './pages/Login.page';
import { Header } from './components/Header/Header';
import { WithHeaderAndFooter } from './utils/WithHeaderAndFooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Header />
    <HomePage />
    </>
  },
  {
    path: '/cleaning',
    element: 
    <>
      <Header />
      <CleaningSuppliesPage />
    </>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/detailers',
    element: 
    <>
      <Header />
      <DetailersDepotPage />
    </>,
  },
  {
    path: '/f_and_i',
    element: 
    <>
      <Header />
      <FandIPage />
    </>,
  },
  {
    path: '/parts',
    element: 
    <>
      <Header />
      <PartsPage />
    </>,
  },
  {
    path: '/tools',
    element: 
    <>
      <Header />
      <ToolsPage />
    </>,
  },
  {
    path: '/about',
    element: 
    <>
      <Header />
      <AboutUsPage />
    </>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
