import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div className="mb-11">
        <h2 className="text-3xl">Comunicación Entre Componentes</h2>
        <h2>Contador: {this.state.contador}</h2>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo número 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo número 2"
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h2>{props.mensaje}</h2>
      <button onClick={props.incrementarContador} className="text-4xl">
        +
      </button>
    </>
  );
}
