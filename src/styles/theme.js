import { createTheme } from "@mui/material/styles";

const typographyList = {
    large:{xs:"22px", sm:"39px", md:"2.05vw"},
    h1: {xs:"39px", sm:"39px", md:"4.05vw"}, //fontsize 70 
    h2: {xs:"23px", sm:"33px", md:"3.47vw"}, //fontsize 60 
    h3: {xs:"21px", sm:"28px", md:"2.89vw"}, //fontsize 50 
    h4: {xs:"20px", sm:"22px", md:"2.31vw"}, //fontsize 40 
    h5: {xs:"16px", sm:"19px", md:"1.74vw"}, //fontsize 30 
    h6: {xs:"16px", sm:"19px", md:"1.1rem"}, //fontsize 30 
    subtitle1: {xs:"16px", sm:"16px", md:"1.39vw"}, //fontsize 24
    body1: {xs:"12px", sm:"16px", md:"1.16vw"}, //fontsize 20
    body2: {xs:"12px", sm:"13px", md:"1.04vw"}, //fontsize 18
    caption: {xs:"11px", sm:"11px", md:"0.81vw"}, //fontsize 14
}

let theme = {
    palette:{
        primary:{
            main: "#FF9000",
        },
        secondary:{
            main: "#fff",
            gray: "#c0bbbb"
        },
        custom:{
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        
    },
    typography:{
        fontFamily: "Poppins",
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
                background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));',
            }
          }
        }
     },
}

theme = createTheme(theme)
Object.keys(typographyList).forEach((item) => {
    const typography = typographyList[item]
    theme.typography[item] = {
      fontSize: `${typography.md}`,
      [theme.breakpoints.only("xs")]: {
        fontSize: `${typography.xs}`,
      },
      [theme.breakpoints.only("sm")]: {
        fontSize: `${typography.sm}`,
      }
    }
  })

  export default theme