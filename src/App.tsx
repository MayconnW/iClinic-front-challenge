import dotenv from 'dotenv';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import history from 'services/history';
import GlobalStyle from 'styles/global';

dotenv.config();

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
