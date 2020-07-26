import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: calc(50vh + 28px);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #2c97d1;

    h1 {
      font-weight: normal;
      font-size: 72px;
      line-height: 88px;
      text-align: center;

      strong {
        font-weight: bold;
      }
    }

    h5 {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.35em;
      text-transform: uppercase;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 189px;
    height: 56px;
    background: #2c97d1;
    color: #fff;
    border-radius: 10px;
    /*transform: translateY(28px);*/
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
  }
`;
