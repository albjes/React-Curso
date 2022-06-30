import React, { Component } from "react";
import data from "helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    console.log(data);
    return (
      <div className="mb-11">
        <h2 className="text-3xl">Renderizado Elementos</h2>
        <h2 className="mb-4">Estaciones del Año (Renderizado Array)</h2>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3 className="mt-4 mb-4">
          FrameWorks Frontend JavaScript (Renderizado JSON)
        </h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
