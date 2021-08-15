import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('버튼 테스트', () => {
  it('getByTestId', () => {
    render(<Button />); // 2~3ms

    const button = screen.getByTestId('submit-button-testid');
    expect(button).toBeInTheDocument();
  });

  it('querySelector', () => {
    render(<Button />); // 3~5ms

    const button = document.querySelector('.submit-button')!;
    expect(button).toBeInTheDocument();
  });

  it('getByRole', () => {
    render(<Button />); // 10~26ms

    const button = screen.getByRole('button', { name: '등록' });
    expect(button).toBeInTheDocument();
  });
});
