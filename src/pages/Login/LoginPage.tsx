import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginPage() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("test");
    navigate("/home", { replace: true });
  };

  //   setTimeout(() => {
  //     handleLogin();
  //   }, 3 * 1000);

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box>
        <Paper
          elevation={4}
          sx={{ padding: "20px", height: "50vh", width: "500px" }}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            height={"100%"}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <img
                style={{ width: "250px" }}
                src="https://uploads-ssl.webflow.com/6290d7cd41b2b54ff21934a5/63375a2f316247867ea3529c_Projexion%20-%20Full%20Color%20Dark%20Back%20Horizontal-p-500.png"
              />
              <Typography>Coding Challenge!</Typography>
            </Stack>

            <TextField
              size="medium"
              variant="standard"
              placeholder="Username"
            />
            <TextField variant="standard" placeholder="Password" />
            <Button variant="contained">Log In</Button>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
}
