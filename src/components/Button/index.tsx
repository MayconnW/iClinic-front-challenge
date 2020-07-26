import React, { useContext, ButtonHTMLAttributes } from 'react';
import { ThemeContext } from 'styled-components';
import { SyncLoader } from 'react-spinners';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<Props> = ({ loading = false, children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container type="button" disabled={loading} {...rest}>
      {!loading ? (
        <>{children}</>
      ) : (
        <SyncLoader size={15} color={theme.color.primary} loading={loading} />
      )}
    </Container>
  );
};

export default Button;
