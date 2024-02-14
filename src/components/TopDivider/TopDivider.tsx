import { Avatar, Divider, Stack, Typography } from "@mui/material";
import LogOutButton from "../../pages/Login/components/LogOutButton";

export default function TopDivider() {
  const userName = localStorage.getItem("userName");

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography>{userName}</Typography>
        </Stack>

        <LogOutButton />
      </Stack>
      <Divider />
    </Stack>
  );
}
