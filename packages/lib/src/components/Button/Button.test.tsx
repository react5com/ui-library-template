import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button onClick={jest.fn()} >click me</Button>);
    const div = screen.getByRole('button', { name: /click me/i });
    expect(div).toBeInTheDocument();
  });
});