import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,

    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightHeavy: 800,
    fontWeightExtraBold: 900,
  },
  direction: "rtl",
});

export default theme;
