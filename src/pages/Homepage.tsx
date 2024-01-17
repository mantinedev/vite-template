import { Container, useMantineColorScheme } from '@mantine/core';
import { Welcome } from '@/components/Welcome/Welcome';
import React from 'react';

export default function HomePage() {
  const { setColorScheme } = useMantineColorScheme();
  React.useEffect(() => {
    setColorScheme('dark');
  }, []);

  return (
    <Container p="md">
      <Welcome />
    </Container>
  );
}
