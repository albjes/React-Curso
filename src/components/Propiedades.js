import PropTypes from "prop-types";
import React from "react";

const Propiedades = (props) => (
  <div>
    <h3 className="text-3xl">Propiedades de Componentes</h3>
    <i>{props.porDefecto}</i>
  </div>
);

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

Propiedades.propTypes = {
  porDefecto: PropTypes.string.isRequired,
};

export default Propiedades;
