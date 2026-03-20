import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  adicionar = () => {
    this.setState((state) => ({ valor: state.valor + 1 }));
  };

  subtrair = () => {
    this.setState((state) => ({ valor: state.valor - 1 }));
  };

  render() {
    return (
      <div className="counter">
        <div className="counter-display">
          <span className="counter-value">{this.state.valor}</span>
        </div>
        <div className="counter-buttons">
          <button className="counter-btn counter-btn-sub" onClick={this.subtrair}>
            −
          </button>
          <button className="counter-btn counter-btn-add" onClick={this.adicionar}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
