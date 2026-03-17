import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [valorVisor, setValorVisor] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [aguardandoNovoValor, setAguardandoNovoValor] = useState(false);

  // Adiciona digito ao visor
  const digitarNumero = (digito) => {
    if (aguardandoNovoValor) {
      setValorVisor(digito);
      setAguardandoNovoValor(false);
    } else {
      setValorVisor(valorVisor === '0' ? digito : valorVisor + digito);
    }
  };

  // Adiciona ponto decimal
  const digitarPonto = () => {
    if (aguardandoNovoValor) {
      setValorVisor('0.');
      setAguardandoNovoValor(false);
      return;
    }
    if (!valorVisor.includes('.')) {
      setValorVisor(valorVisor + '.');
    }
  };

  // Executa o calculo entre dois valores
  const calcular = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Erro';
      default: return b;
    }
  };

  // Seleciona a operacao (+, -, *, /)
  const selecionarOperacao = (novaOperacao) => {
    const valorAtual = parseFloat(valorVisor);

    if (valorAnterior !== null && !aguardandoNovoValor) {
      const resultado = calcular(valorAnterior, valorAtual, operacao);
      setValorVisor(String(resultado));
      setValorAnterior(resultado);
    } else {
      setValorAnterior(valorAtual);
    }

    setOperacao(novaOperacao);
    setAguardandoNovoValor(true);
  };

  // Calcula o resultado ao pressionar =
  const calcularResultado = () => {
    if (operacao === null || valorAnterior === null) return;

    const valorAtual = parseFloat(valorVisor);
    const resultado = calcular(valorAnterior, valorAtual, operacao);

    setValorVisor(String(resultado));
    setValorAnterior(null);
    setOperacao(null);
    setAguardandoNovoValor(true);
  };

  // Limpa todos os valores
  const limpar = () => {
    setValorVisor('0');
    setValorAnterior(null);
    setOperacao(null);
    setAguardandoNovoValor(false);
  };

  return (
    <div className="calculator">
      <div className="display">
        <span className="display-value">{valorVisor}</span>
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={limpar}>AC</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('/')}>/</button>

        <button className="btn btn-number" onClick={() => digitarNumero('7')}>7</button>
        <button className="btn btn-number" onClick={() => digitarNumero('8')}>8</button>
        <button className="btn btn-number" onClick={() => digitarNumero('9')}>9</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('*')}>*</button>

        <button className="btn btn-number" onClick={() => digitarNumero('4')}>4</button>
        <button className="btn btn-number" onClick={() => digitarNumero('5')}>5</button>
        <button className="btn btn-number" onClick={() => digitarNumero('6')}>6</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('-')}>-</button>

        <button className="btn btn-number" onClick={() => digitarNumero('1')}>1</button>
        <button className="btn btn-number" onClick={() => digitarNumero('2')}>2</button>
        <button className="btn btn-number" onClick={() => digitarNumero('3')}>3</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('+')}>+</button>

        <button className="btn btn-number btn-zero" onClick={() => digitarNumero('0')}>0</button>
        <button className="btn btn-number" onClick={digitarPonto}>.</button>
        <button className="btn btn-operator" onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
