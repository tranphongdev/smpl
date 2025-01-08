import { Navigate, useLocation } from 'react-router-dom';
import { webRoutes } from '~/routes/web';

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const admin = true;
  const location = useLocation();

  if (!admin) {
    return <Navigate to={webRoutes.login} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
