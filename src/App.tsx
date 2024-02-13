import AuthProvider from "./auth/AuthProvider";
import ThemeRegistry from "./components/Theme/ThemeRegistry";
import { Router } from "./router/router";

export function App() {
  return (
    <AuthProvider>
      <ThemeRegistry>
        <Router />
      </ThemeRegistry>
    </AuthProvider>
  );
}
