import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('summation correctly', () => {
    render(<Calculator />);

    const five = screen.getByText('5');
    const two = screen.getByText('2');
    const add = screen.getByText('+');
    const equal = screen.getByText('=');
    const result = screen.getByRole('none');
    fireEvent.click(five);
    fireEvent.click(add);
    fireEvent.click(two);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('7');
  });

  test('multiplies correctly', () => {
    render(<Calculator />);

    const five = screen.getByText('5');
    const two = screen.getByText('2');
    const multiply = screen.getByText('x');
    const equal = screen.getByText('=');
    const result = screen.getByRole('none');
    fireEvent.click(five);
    fireEvent.click(multiply);
    fireEvent.click(two);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('10');
  });

  test('Divide correctly ', () => {
    render(<Calculator />);

    const eight = screen.getByText('8');
    const divide = screen.getByText('÷');
    const two = screen.getByText('2');
    const equal = screen.getByText('=');
    const result = screen.getByRole('none');
    fireEvent.click(eight);
    fireEvent.click(divide);
    fireEvent.click(two);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('4');
  });

  test('Checks wrong multiplication result ', () => {
    render(<Calculator />);

    const nine = screen.getByText('9');
    const multiply = screen.getByText('x');
    const two = screen.getByText('2');
    const equal = screen.getByText('=');
    const result = screen.getByRole('none');
    fireEvent.click(nine);
    fireEvent.click(multiply);
    fireEvent.click(two);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('18');
  });

  test('Checks wrong modulo result ', () => {
    render(<Calculator />);

    const nine = screen.getByText('9');
    const modulo = screen.getByText('%');
    const three = screen.getByText('3');
    const equal = screen.getByText('=');
    const result = screen.getByRole('none');
    fireEvent.click(nine);
    fireEvent.click(modulo);
    fireEvent.click(three);
    fireEvent.click(equal);

    expect(result.innerHTML).not.toBe('1');
  });
});
