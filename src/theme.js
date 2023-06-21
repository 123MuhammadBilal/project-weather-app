import { createTheme } from "@mui/material/styles";
const Theme = createTheme({
  colorPalette: {
    primary: {
      main: "#E07A5F",
      dark: "#010101",
    },
    secondary: {
      main: "#E0E0E0",
      light: "#F4F1DE",
    },
  },
  typography: {
    regular_h1: {
      fontFamily: "Roboto",
      fontSize: 38,
      fontWeight: 400,
      letterSpacing: 0,
      textAlign: "left",
    },
    medium_h1: {
      fontSize: 12,
    },
    bold_h1: {
      fontSize: 12,
    },
    h1: {
      fontWeight: 500,
    },
    p: {
      fontSize:'10px',
    },
    
    button: {
      fontStyle: "italic",
    },
    // tab:{
    //   sx={{
    //     bgcolor:theme.colorPalette.primary.main,
    //     color:theme.colorPalette.secondary.main,
    //     margin:'10px 10px', 
    //   }}
    // }

  },
  tabs: {

    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: 'red'
    }
  }
});
export default Theme;
