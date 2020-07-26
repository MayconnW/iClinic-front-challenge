import React, { useCallback } from 'react';
import { DARK_SIDE, LIGHT_SIDE } from 'config/constants';
import history from 'services/history';

import getPathSide from 'services/getPathSide';
import { Container } from './styles';

const Main: React.FC = () => {
  const handleStartClick = useCallback(async () => {
    const side = await getPathSide();
    history.push('path', { side });
  }, []);

  return (
    <Container>
      <div>
        <h1>
          Welcome to <strong>iClinic</strong>
        </h1>
        <h5>Frontend challenge</h5>
      </div>
      <button type="button" onClick={handleStartClick}>
        Start
      </button>
    </Container>
  );
};

export default Main;
