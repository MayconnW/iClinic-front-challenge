import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.color.primary};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 347px;
    height: 56px;
    background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    border: none;
  }

  > img {
    width: 100%;
    max-width: 380px;
    border-radius: 50%;
    margin-top: 90px;
  }

  > h5 {
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    color: ${({ theme }) => theme.color.secondary};
    margin-top: 45px;

    strong {
      font-weight: bold;
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 720px) {
    justify-content: space-around;

    > img {
      max-width: 302px;
      margin-top: 0;
    }

    > h5 {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        margin-left: 0;
      }
    }

    > button {
      order: 2;
      margin-bottom: 20px;
      width: 100%;
      max-width: 320px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 50px;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.secondary};
  > div {
    cursor: pointer;
  }
  svg {
    margin-right: 24px;
    path {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }

  > span {
    transform: translateY(-2px);
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    padding: 20px;
  }
`;
