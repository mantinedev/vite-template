import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();
  if (!isAuthenticated && !isLoading) {
    return <Navigate to={'/login'} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
