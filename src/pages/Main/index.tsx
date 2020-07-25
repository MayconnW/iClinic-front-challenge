import React from 'react';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          Welcome to <strong>iClinic</strong>
        </h1>
        <h5>Frontend challenge</h5>
      </div>
      <button type="button">Start</button>
    </Container>
  );
};

export default Main;
