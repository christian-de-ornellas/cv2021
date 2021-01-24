import React from 'react';
import { createMuiTheme, ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import Home from './pages/Home';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#fbc531',
          },
          secondary: {
            main: '#e4e450',
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
