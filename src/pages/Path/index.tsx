import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import history from 'services/history';
import { useLocation } from 'react-router-dom';
import { DARK_SIDE, Side } from 'config/constants';
import { darkTheme, lightTheme } from 'styles/themes';

import { ReactSVG } from 'react-svg';
import darthVader from 'assets/images/darth-vader.png';
import luke from 'assets/images/luke.png';
import leftArrow from 'assets/images/left-arrow.svg';

import { Container, Header, Content } from './styles';

interface HistoryProps {
  side: Side;
}

const Path: React.FC = () => {
  const location = useLocation<HistoryProps>();
  const [side, setSide] = useState<Side | null>(null);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    try {
      const { state } = location;
      if (state.side === DARK_SIDE) {
        setTheme(darkTheme);
      }
      setSide(state.side);
    } catch {
      history.push('/');
    }
  }, [location]);

  return (
    side && (
      <ThemeContext.Provider value={theme}>
        <Container>
          <Header>
            <ReactSVG src={leftArrow} onClick={() => history.push('/')} />
            <span>back</span>
          </Header>
          <Content>
            <button type="button" onClick={() => history.push('/')}>
              choose your path again, Padawan
            </button>
            <img
              src={side === DARK_SIDE ? darthVader : luke}
              alt="Darth Vader"
            />
            <h5>
              Your master is
              <strong>
                {side === DARK_SIDE ? 'Darth Vader' : 'Luke Skywalker'}
              </strong>
            </h5>
          </Content>
        </Container>
      </ThemeContext.Provider>
    )
  );
};

export default Path;
