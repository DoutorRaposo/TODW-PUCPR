import { calcular, formatarResultado } from './calculatorUtils';

describe('calcular', () => {
  test('executa soma, subtração e multiplicação', () => {
    expect(calcular(2, 3, '+')).toBe(5);
    expect(calcular(10, 4, '-')).toBe(6);
    expect(calcular(7, 6, '*')).toBe(42);
  });

  test('retorna "Erro" ao dividir por zero', () => {
    expect(calcular(5, 0, '/')).toBe('Erro');
    expect(calcular(10, 2, '/')).toBe(5);
  });
});

describe('formatarResultado', () => {
  test('arredonda valores com mais de 8 casas decimais', () => {
    expect(formatarResultado(1 / 3)).toBe('0.33333333');
  });

  test('preserva strings e inteiros sem alterá-los', () => {
    expect(formatarResultado('Erro')).toBe('Erro');
    expect(formatarResultado(42)).toBe('42');
  });
});
