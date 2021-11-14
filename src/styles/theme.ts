import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(89, 210, 188, 1)",
      main: "#5E17EB",
      dark: "#7ED957",
      contrastText: "#fff",
    },
    info: {
      main: "#7ED957",
    },
    secondary: {
      main: "#004AAD",
    },
  },
});
export default theme;
