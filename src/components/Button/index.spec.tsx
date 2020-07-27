import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '.';

const text = 'Click here';

describe('<Button />', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render the button with children', () => {
    const { getByText } = render(<Button type="button">{text}</Button>);

    expect(getByText(text)).toBeTruthy();
  });
});
