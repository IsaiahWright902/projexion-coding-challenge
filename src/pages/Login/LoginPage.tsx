import { useForm } from "react-hook-form";
import {
  LoginFormDTO,
  loginValidator,
} from "../../domain/validators/loginValidators";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInUser } from "../../GraphQl/actions/UserActions";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginFormDTO>({
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginValidator),
  });

  const onSubmit = async (formData: LoginFormDTO) => {
    await LogInUser(formData);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box>
        <Paper
          elevation={4}
          sx={{ padding: "20px", height: "50vh", width: "500px" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
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
                variant="standard"
                label="Username"
                placeholder="Enter username"
                {...register("username")}
                helperText={errors.username?.message}
                error={!!errors.username?.message}
              />
              <TextField
                variant="standard"
                placeholder="Enter password"
                label="Password"
                {...register("password")}
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
                variant="contained"
              >
                Log In
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Stack>
  );
}
