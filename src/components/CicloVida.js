import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log(100);
  }

  componentWillUnmount() {
    console.log(3, "El Componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El Componente se inicializa, aun no está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El Componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o la props del Componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  parar = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El Componente se dibuja o redibuja por un cambio en el DOM"
    );
    return (
      <div className="mb-11 ">
        <h2 className="text-3xl">Ciclo de Vida de Componentes de Clases</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={this.iniciar}
        >
          Iniciar
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={this.parar}
        >
          Parar
        </button>
      </div>
    );
  }
}
