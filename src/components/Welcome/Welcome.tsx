import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export function Welcome() {
  const { user } = useKindeAuth();
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hello
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {user?.given_name ? `, ${user.given_name}` : ''}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Welkom bij Sjoef! Hier kan je je eigen profiel aanmaken en je eigen gegevens beheren.
      </Text>
    </>
  );
}
