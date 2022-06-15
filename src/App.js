import React, { useContext } from 'react';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components'
import ThemeContext from './Context/ThemeContext';

function App() {
    const { theme } = useContext(ThemeContext)
  return (
    <>
    <ThemeProvider theme={{ theme }}>
    <GlobalStyles />
    <LandingPage />
    </ThemeProvider>
    </>
  );
}

export default App;
