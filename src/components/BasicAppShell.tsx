import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function BasicAppShell() {
  return (
    <AppShell header={{ height: 90 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
