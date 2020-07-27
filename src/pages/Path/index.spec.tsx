import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Path from './index';

const mockedHistoryPush = jest.fn();
const mockedGetPathSide = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useLocation: () => ({
      state: { side: 4 },
    }),
  };
});

jest.mock('services/history', () => {
  return { push: (param: string) => mockedHistoryPush(param) };
});

jest.mock('services/getPathSide', () => {
  return () => mockedGetPathSide.mockReturnValue(1);
});

describe('Path Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedGetPathSide.mockClear();
    cleanup();
  });

  it('should be able to choose the path again', async () => {
    const { getByTestId } = render(<Path />);

    const buttonPlayAgain = getByTestId('button-play-again');

    fireEvent.click(buttonPlayAgain);

    await waitFor(() => {
      expect(mockedGetPathSide).toHaveBeenCalled();
    });
  });

  it('should be able to return to the main page', () => {
    const { getByTestId } = render(<Path />);

    const buttonBack = getByTestId('button-back-to-home');

    fireEvent.click(buttonBack);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
