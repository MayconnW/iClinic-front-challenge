import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import history from 'services/history';
import { useLocation } from 'react-router-dom';
import { DARK_SIDE, Side } from 'config/constants';
import { darkTheme, lightTheme } from 'styles/themes';
import { motion } from 'framer-motion';
import { SyncLoader } from 'react-spinners';
import getPathSide from 'services/getPathSide';

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
  const [loading, setLoading] = useState(false);
  const [changedTimes, setChangedTimes] = useState(0);

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

  const handlePlayAgain = useCallback(async () => {
    setLoading(true);
    const response = await getPathSide();
    setTheme(response === DARK_SIDE ? darkTheme : lightTheme);
    setSide(response);
    setLoading(false);
    setChangedTimes(i => i + 1);
  }, []);

  return useMemo(
    () =>
      side && (
        <ThemeContext.Provider value={theme}>
          <Container>
            <Header>
              <ReactSVG src={leftArrow} onClick={() => history.push('/')} />
              <span>back</span>
            </Header>
            <Content>
              <button type="button" onClick={handlePlayAgain}>
                {!loading ? (
                  'choose your path again, Padawan'
                ) : (
                  <SyncLoader
                    size={15}
                    color={theme.color.primary}
                    loading={loading}
                  />
                )}
              </button>
              <motion.img
                key={`side-${changedTimes}`}
                src={side === DARK_SIDE ? darthVader : luke}
                animate={{
                  scale: [1, 1.3, 1.5, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ['20%', '20%', '50%', '50%', '20%', '50%'],
                }}
              />
              <motion.h5
                key={`character-${changedTimes}`}
                animate={{
                  transition: {
                    delay: 0.5,
                  },
                  scale: [1, 1, 1.1, 1],
                  opacity: [0, 0.2, 0.5, 0.7, 0.9, 1],
                }}
              >
                Your master is
                <strong>
                  {side === DARK_SIDE ? 'Darth Vader' : 'Luke Skywalker'}
                </strong>
              </motion.h5>
            </Content>
          </Container>
        </ThemeContext.Provider>
      ),
    [side, handlePlayAgain, loading, theme, changedTimes],
  );
};

export default Path;
