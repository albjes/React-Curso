import React, { Component } from "react";

export class Eventos extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 2,
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

const Boton = ({ myOnClick }) => (
  <button
    onClick={myOnClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
  >
    Botón hecho componente
  </button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div className="mb-11 ">
        <h2 className="text-3xl">Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Saludar
        </button>
        <br />
        {/*Evento Personalizado*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
