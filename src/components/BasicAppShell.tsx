import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export default function BasicAppShell() {
  const { isAuthenticated, isLoading } = useKindeAuth();

  return (
    <AppShell header={{ height: 90 }} padding="md">
      {isAuthenticated && !isLoading ? (
        <AppShell.Header>
          <Navbar />
        </AppShell.Header>
      ) : null}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
