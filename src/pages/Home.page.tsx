import { FeaturedItems } from '@/components/FeaturedItems/FeaturedItems';
import { Header } from '../components/Header/Header';
import { Container, Divider } from '@mantine/core';

export function HomePage() {
  return (
    <Container>
      <FeaturedItems title='New Products'/>
      <Divider my='xl'/>
      <FeaturedItems title='Sale Items'/>
      <Divider my='xl'/>
      <FeaturedItems title='Top Sellers'/>
    </Container>
  );
}
