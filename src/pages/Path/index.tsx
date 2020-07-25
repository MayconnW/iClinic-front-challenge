import React from 'react';

import { ReactSVG } from 'react-svg';
import darthVader from 'assets/images/darth-vader.png';
import luke from 'assets/images/luke.png';
import leftArrow from 'assets/images/left-arrow.svg';

import { Container, Header, Content } from './styles';

const Path: React.FC = () => {
  return (
    <Container>
      <Header>
        <ReactSVG src={leftArrow} />
        <span>back</span>
      </Header>
      <Content>
        <button type="button">choose your path again, Padawan</button>
        <img src={darthVader} alt="Darth Vader" />
        <h5>
          Your master is <strong>Darth Vader</strong>
        </h5>
      </Content>
    </Container>
  );
};

export default Path;
