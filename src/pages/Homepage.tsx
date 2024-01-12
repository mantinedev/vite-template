import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <Container p="md">
      <Welcome />
      <ColorSchemeToggle />
    </Container>
  );
}
