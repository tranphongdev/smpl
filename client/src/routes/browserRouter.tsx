import { createBrowserRouter } from 'react-router-dom';
import { webRoutes } from '~/routes/web';
import loadable from '@loadable/component';
import { ProgressBar, Redirect, RequireAuth } from '~/components';
import { AuthLayout, DefaultLayout } from '~/layouts';
import { ErrorPage, Login, NotFoundPage, ForgotPassword } from '~/pages';

const errorElement = <ErrorPage />;
const fallbackElement = <ProgressBar />;

const DashboardPage = loadable(() => import('~/pages/Dashboard'), {
  fallback: fallbackElement,
});

const ListAccountPage = loadable(
  () => import('~/pages/UserManagement/ListAccount'),
  {
    fallback: fallbackElement,
  }
);

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <Redirect />,
    errorElement: errorElement,
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <Login />,
      },
      {
        path: webRoutes.forgotPassword,
        element: <ForgotPassword />,
      },
    ],
  },

  // protected routes
  {
    element: (
      <RequireAuth>
        <DefaultLayout />
      </RequireAuth>
    ),
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <DashboardPage />,
      },
      {
        path: webRoutes.listAccount,
        element: <ListAccountPage />,
      },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: errorElement,
  },
]);
