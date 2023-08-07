import operate from '../logic/operate';

describe('mathematical operations', () => {
  test('Add two numbers', () => {
    expect(operate(10, 10, '+')).toBe('20');
  });

  test('Subtract two numbers', () => {
    expect(operate(30, 10, '-')).toBe('20');
  });

  test('Multiply two numbers', () => {
    expect(operate(5, 20, 'x')).toBe('100');
  });

  test('Divide two numbers', () => {
    expect(operate(25, 5, '÷')).toBe('5');
  });

  test('Use Modulo', () => {
    expect(operate(81, 9, '%')).toEqual('0');
  });
});
