import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <span className="display-value">0</span>
      </div>
      <div className="buttons">
        <button className="btn btn-clear">AC</button>
        <button className="btn btn-operator">/</button>

        <button className="btn btn-number">7</button>
        <button className="btn btn-number">8</button>
        <button className="btn btn-number">9</button>
        <button className="btn btn-operator">*</button>

        <button className="btn btn-number">4</button>
        <button className="btn btn-number">5</button>
        <button className="btn btn-number">6</button>
        <button className="btn btn-operator">-</button>

        <button className="btn btn-number">1</button>
        <button className="btn btn-number">2</button>
        <button className="btn btn-number">3</button>
        <button className="btn btn-operator">+</button>

        <button className="btn btn-number btn-zero">0</button>
        <button className="btn btn-number">.</button>
        <button className="btn btn-operator">=</button>
      </div>
    </div>
  );
}

export default Calculator;
