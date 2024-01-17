import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export const LogoutPage = () => {
  const { logout } = useKindeAuth();

  React.useEffect(() => {
    logout();
  });

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};
export default LogoutPage;
