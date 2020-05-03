import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import "@openfonts/open-sans_latin"

const openSans = {
  fontFamily: "Open Sans, serif",
  fontStyle: "normal",
  fontWeight: "400",
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFB000",
      contrastText: "#3d4451",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    background: {
      default: "#FFFFFF",
      secondary: "#F9F9FA",
    },
    success: {
      main: "#A5FA39",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontSize: 16,
    h1: {
      fontSize: 50,
      lineHeight: 1,
      fontWeight: "bold",
      color: "#FFB000",
      textAlign: "center",
      margin: "20px 0 20px",
    },
    h2: {
      fontSize: 65,
      lineHeight: 1,
      fontWeight: "bold",
      color: "#FFB000",
      textAlign: "center",
      margin: "20px 0 20px",
    },
    h3: {
      fontSize: 40,
      lineHeight: 1.4,
      fontWeight: "bold",
      textAlign: "center",
      color: "#000000",
      margin: 0,
    },
    h4: {
      fontSize: 30,
      lineHeight: 1.8,
      fontWeight: "bold",
      textAlign: "left",
      color: "#000000",
      margin: 0,
    },
    body1: {
      fontSize: 25,
      lineHeight: 1.3,
      color: "#000000",
    },
    body2: {
      fontSize: 18,
      lineHeight: "1.4",
      color: "#000000",
    },
    button: {
      fontSize: "1rem",
      lineHeight: "1.4",
      fontWeight: "bold",
      color: "#FFB000",
      textTransform: "initial",
    },
    caption: {
      fontSize: ".8rem",
      lineHeight: "1",
      color: "rgb(61, 68, 81)",
    },
  },
  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [openSans],
      },
    },
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
      },
    },
  },
})
export default responsiveFontSizes(theme)
