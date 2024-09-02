import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

// Const a: Map<string, number> | null = new Map();

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
      <button type="button">Just a button</button>
      <a href="https://mantine.dev" target="_blank" rel="noreferrer">
        Link
      </a>
    </MantineProvider>
  );
}
