import { Button } from "@mui/material";
import { useAuth } from "../../auth/AuthProvider";

export default function HomePage() {
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("userName");
  };

  return (
    <>
      <Button onClick={handleLogout}>logout</Button>
    </>
  );
}
