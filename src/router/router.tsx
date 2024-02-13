import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";

export function Router() {
  const { token } = useAuth();

  const unauthenticatedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute />,
    },
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
          element: <HomePage />,
        },
      ],
    },
  ];

  const routes = createBrowserRouter([
    ...unauthenticatedRoutes,
    ...(token !== "unauthenticated" ? authenticatedRoutes : []),
  ]);

  return <RouterProvider router={routes} />;
}
