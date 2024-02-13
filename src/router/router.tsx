import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "../pages/Login/LoginPage";

export function Router() {
  const { token } = useAuth();

  const unauthenticatedRoutes: RouteObject[] = [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];

  const authenticatedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <>mock route</>,
        },
      ],
    },
  ];

  const routes = createBrowserRouter([
    ...unauthenticatedRoutes,
    ...(token ? authenticatedRoutes : []),
  ]);

  console.log(token);

  return <RouterProvider router={routes} />;
}
