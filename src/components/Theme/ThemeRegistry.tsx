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
      main: "#ff0033",
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontSize: "38px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "32px",
    },
    h3: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
    },
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
    </ThemeProvider>
  );
}
