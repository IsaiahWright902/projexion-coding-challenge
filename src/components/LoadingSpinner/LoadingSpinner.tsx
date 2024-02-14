import { CircularProgress, Stack } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Stack pt={10} justifyContent="center" alignItems="center">
      <CircularProgress />
    </Stack>
  );
}
