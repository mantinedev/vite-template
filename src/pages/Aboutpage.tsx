import { Title, Container } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export default function AboutPage() {
  return (
    <Container ta="center">
      <Title>About Pagina</Title>
      <ColorSchemeToggle />
    </Container>
  );
}
