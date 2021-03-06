import { Column } from '../models';
import { decimalFormatter } from './decimalFormatter';

describe('the Decimal Formatter', () => {
  it('should display an empty string when no value is provided', () => {
    const output = decimalFormatter(1, 1, '', {} as Column, {});
    expect(output).toBe('');
  });

  it('should display original string when non-numeric value is provided', () => {
    const output = decimalFormatter(1, 1, 'hello', {} as Column, {});
    expect(output).toBe('hello');
  });

  it('should display $0 when number 0 is provided', () => {
    const input = 0;
    const output = decimalFormatter(1, 1, input, {} as Column, {});
    expect(output).toBe('0.00');
  });

  it('should display a number with negative dollar sign when a negative number is provided', () => {
    const input = -15;
    const output = decimalFormatter(1, 1, input, {} as Column, {});
    expect(output).toBe('-15.00');
  });

  it('should display a number with dollar sign when a number is provided', () => {
    const input = 99;
    const output = decimalFormatter(1, 1, input, {} as Column, {});
    expect(output).toBe('99.00');
  });

  it('should display a number with dollar sign when a string number is provided', () => {
    const input = '99';
    const output = decimalFormatter(1, 1, input, {} as Column, {});
    expect(output).toBe('99.00');
  });

  it('should display a number with dollar sign and use "minDecimal" params', () => {
    const input = 99.1;
    const output = decimalFormatter(1, 1, input, { params: { minDecimal: 2 } } as Column, {});
    expect(output).toBe('99.10');
  });

  it('should display a number with dollar sign and use "minDecimalPlaces" params', () => {
    const input = 99.1;
    const output = decimalFormatter(1, 1, input, { params: { minDecimalPlaces: 2 } } as Column, {});
    expect(output).toBe('99.10');
  });

  it('should display a number with dollar sign and use "maxDecimal" params', () => {
    const input = 88.156789;
    const output = decimalFormatter(1, 1, input, { params: { maxDecimal: 3 } } as Column, {});
    expect(output).toBe(`88.157`);
  });

  it('should display a number with dollar sign and use "maxDecimalPlaces" params', () => {
    const input = 88.156789;
    const output = decimalFormatter(1, 1, input, { params: { maxDecimalPlaces: 3 } } as Column, {});
    expect(output).toBe(`88.157`);
  });
});
