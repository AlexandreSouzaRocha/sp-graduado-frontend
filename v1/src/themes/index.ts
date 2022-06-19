import { createTheme, Theme } from '@mui/material';

const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#8000FF',
      dark: '#5900B3',
      light: '#8C19FF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#EEEEEE',
      paper: '#F5F7FA',
    },
    text: {
      primary: '#000',
      secondary: '#929292',
    },
    mode: 'light',
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#8000FF',
      dark: '#5900B3',
      light: '#8C19FF',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#929292',
    },
    mode: 'dark',
  },
});

export default {
  lightTheme,
  darkTheme,
};
