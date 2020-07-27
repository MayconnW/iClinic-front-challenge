import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Main from './index';

const mockedHistoryPush = jest.fn();

jest.mock('services/history', () => {
  return { push: (param: string) => mockedHistoryPush(param) };
});

jest.mock('services/getPathSide');

describe('Main Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    cleanup();
  });

  it('should be able to start the path', async () => {
    const { getByText } = render(<Main />);

    const buttonStart = getByText('Start');

    fireEvent.click(buttonStart);
    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('path');
    });
  });
});
