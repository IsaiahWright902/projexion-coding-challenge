import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#01ea81",
      dark: "#5ebd74",
    },
    secondary: {
      main: "#40A2D8",
    },
    error: {
      main: "#F0EDCF",
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body>
        <Box
          width="100%"
          minHeight="100vh"
          sx={{
            backgroundColor: `tsipGrey.light`,
          }}
        >
          <Container
            sx={{
              padding: isMobile ? "16px " : "64px 128px",
            }}
          >
            {children}
          </Container>
        </Box>
      </body>
    </ThemeProvider>
  );
}
