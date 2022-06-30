import React, { Component } from "react";

export default class Eventos extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div className="mb-11 ">
        <h2 className="text-3xl">Eventos en Componentes de Clase</h2>
        <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
          <button onClick={this.restar} className="text-4xl">
            -
          </button>
          <span className="font-bold text-3xl">{this.state.contador}</span>
          <button onClick={this.sumar} className="text-4xl">
            +
          </button>
        </nav>
      </div>
    );
  }
}
