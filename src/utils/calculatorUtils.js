export function calcular(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Erro';
    default: return b;
  }
}

export function formatarResultado(valor) {
  if (typeof valor === 'string') return valor;
  const texto = String(valor);
  if (texto.includes('.') && texto.split('.')[1].length > 8) {
    return String(parseFloat(valor.toFixed(8)));
  }
  return texto;
}
