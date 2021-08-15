import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

describe('토글버튼 테스트', () => {
  it('초기에는 노랑색이다.', () => {
    render(<ToggleButton />);

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('active');
  });

  it('클릭하면 빨강색이다.', () => {
    render(<ToggleButton />);

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('active');

    fireEvent.click(button);

    expect(button).toHaveClass('active');
  });
});
