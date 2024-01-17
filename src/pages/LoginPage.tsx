import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Button, Title } from '@mantine/core';

export const LoginPage: React.FC = () => {
  const { login, register, user, isAuthenticated, getToken } = useKindeAuth();

  const handleSignUp = React.useCallback(async () => {
    await register();
  }, [register]);

  const handleSignIn = React.useCallback(
    async (e: any) => {
      e.preventDefault();
      await login({ app_state: { foo: 'bar' } });
    },
    [login]
  );

  return (
    <div className="flex flex-col m-auto w-1/3">
      <Title order={1} className="flex self-center align-middle mb-56">
        WELCOME TO SJOEF
      </Title>
      <Button onClick={handleSignIn} color="violet" className="mb-4" size="xl">
        sign In
      </Button>
      <Title order={4} className="flex self-center align-middle mb-8">
        - or -{' '}
      </Title>
      <Button onClick={handleSignUp} color="violet" size="xl">
        sign up
      </Button>
    </div>
  );
};
export default LoginPage;
