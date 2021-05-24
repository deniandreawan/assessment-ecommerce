import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { PRIMARY, SECONDARY, WHITE } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    error: {
      main: red.A400,
    },
    background: {
      main: WHITE,
    },
  },
});

export default theme;
