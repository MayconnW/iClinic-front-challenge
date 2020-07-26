import React, { useCallback, useState } from 'react';
import { DARK_SIDE, LIGHT_SIDE } from 'config/constants';
import history from 'services/history';
import { motion, Variants } from 'framer-motion';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';

import getPathSide from 'services/getPathSide';
import { Container } from './styles';

const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const handleStartClick = useCallback(async () => {
    setLoading(true);
    const side = await getPathSide();
    setLoading(false);
    history.push('path', { side });
  }, []);

  const iClinic = 'iClinic'.split('');

  const variants: Variants = {
    visible: (i: number) => ({
      transform: 'translateY(0)',
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <Container>
      <div>
        <h1>
          <span>Welcome to </span>
          {iClinic.map((item, i) => (
            <motion.strong
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              {item}
            </motion.strong>
          ))}
        </h1>
        <h5>Frontend challenge</h5>
      </div>
      <motion.button
        type="button"
        onClick={handleStartClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {!loading ? (
          'Start'
        ) : (
          <SyncLoader size={15} color="#fff" loading={loading} />
        )}
      </motion.button>
    </Container>
  );
};

export default Main;
