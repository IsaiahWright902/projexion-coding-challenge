import { Button } from "@mui/material";
import { useAuth } from "../../../auth/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogOutButton() {
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("userName");
    localStorage.removeItem("refreshToken");
  };

  return (
    <Button
      onClick={handleLogout}
      size="small"
      color={`error`}
      variant="text"
      endIcon={<LogoutIcon />}
    >
      Log Out
    </Button>
  );
}
