import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

// Const a: Map<string, number> | null = new Map();

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
      <button type={'submit'}>Just a button</button>
    </MantineProvider>
  );
}
