import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#368bd6"
    },
    secondary: {
      main: "#52852d"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#ffffff"
    }
  }
});

export default theme;
