import dotenv from 'dotenv';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import history from 'services/history';
import GlobalStyle from 'styles/global';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from 'styles/themes';

dotenv.config();

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeContext.Provider>
  );
};

export default App;
