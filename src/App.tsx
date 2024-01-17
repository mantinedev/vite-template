import { Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import CustomLoader from '@/components/Loader';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Suspense fallback={<CustomLoader />}>
        <KindeProvider
          isDangerouslyUseLocalStorage
          clientId="a6b9fb378282420bbfc9b59cd3abc1aa"
          domain="https://sjoef.kinde.com"
          redirectUri="http://localhost:3000/home"
          logoutUri="http://localhost:3000/login"
        >
          <Router />
        </KindeProvider>
      </Suspense>
    </MantineProvider>
  );
}
