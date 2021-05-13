import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
    color: '#008c88',
  },
  palette: {
    primary: {
      main: '#25a6bb',
      light: '#008c88',
      dark: '#18343f',
    },
    secondary: {
      main: '#9f28bc',
      light: '#EB1B98',
      dark: '#6480A9',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
