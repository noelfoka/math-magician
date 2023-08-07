import calculate from '../logic/calculate';

describe('unit tests for calculate.js', () => {
  test('When button AC is clicked the result should be 0', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('When button + is clicked the result should be summation', () => {
    const obj = {
      total: 10,
      next: 10,
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });

  test('When button +/- is clicked the result should be positive/negative', () => {
    const obj = {
      total: 0,
      next: 10,
      operation: null,
    };
    const buttonName = '+/-';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: 0,
      next: '-10',
      operation: null,
    });
  });

  test('When button = is clicked and there no operation, nothing to do', () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toStrictEqual({ });
  });
});
