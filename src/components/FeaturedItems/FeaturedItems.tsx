import { Carousel } from '@mantine/carousel';
import { Image, Text, Title, useMantineTheme, Container, Card } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './FeaturedItems.module.css';

interface FeaturedCardProps {
  image: string;
  title: string;
  price: string;
}

function FeatureCard({ image, title, price }: FeaturedCardProps) {
  return (
    <Card
    shadow="sm"
    padding="md"
    component="a"
    // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    target="_blank"
  >
    <Card.Section mt={3}>
      <Image
        src={image}
        h={180}
        fit="contain"
      />
    </Card.Section>

    <Text fw={500} size="lg" mt="md">
      {title}
    </Text>

    <Text mt="xs" size="sm">
      ${price}
    </Text>
  </Card>
  );
}

const data = [
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2024/09/0603-150x150.png',
    title: 'MP Oil',
    price: '9.99',
  },
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2023/12/10901-1-150x150.png',
    title: 'MP Spray',
    price: '14.99',
  },
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2023/12/06011-1-150x150.png',
    title: 'MP Brake Fluid',
    price: '37.50',
  },
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2024/07/10121-1.png',
    title: 'Cleaning Solution',
    price: '5.99',
  },
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2023/12/4290-400x400-1.png',
    title: 'Cling Fluid',
    price: '6.49',
  },
  {
    image:
      'https://mocproducts.com/wp-content/uploads/2023/12/70074.png',
    title: 'Cleaning Sponge',
    price: '6.19',
  },
];

interface FeaturedItemProps {
  title: string;
}

export function FeaturedItems({ title }: FeaturedItemProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <FeatureCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Title order={2} className={classes.title} mb='md'>{title}</Title>
      <Carousel
        slideSize={{ base: '50%', sm: '33.3333%' }}
        slideGap={{ base: 3, sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 2 : 3}
      >
        {slides}
      </Carousel>
    </Container>
  );
}