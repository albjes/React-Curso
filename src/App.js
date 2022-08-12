import "App.css";

import { Eventos, MasSobreEventos } from "components/Eventos";

import AjaxApis from "components/AjaxApis";
import CicloVida from "components/CicloVida";
import ComunicacionComponentes from "components/ComunicacionComponentes";
import ContadorHooks from "components/ContadorHooks";
import Estado from "components/Estado";
import Header from "components/Header";
import Nav from "components/Nav";
import Propiedades from "components/Propiedades";
import React from "react";
import RelojHooks from "components/RelojHooks";
import RenderizadoCondicional from "components/RenderizadoCondicional";
import RenderizadoElementos from "components/RenderizadoElementos";
import ScrollHooks from "components/ScrollHooks";

function App() {
  let msg = "Ejercicios React";
  return (
    <section className="text-center">
      <Nav />
      <Header msg={msg} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto p-4">
              <Propiedades />
              <hr />
              <Estado />
              <hr />
              <RenderizadoCondicional />
              <hr />
              <RenderizadoElementos />
              <hr />
              <Eventos />
              <hr />
              <MasSobreEventos />
              <hr />
              <ComunicacionComponentes />
              <hr />
              <CicloVida />
              <hr />
              <AjaxApis />
              <hr />
              <ContadorHooks />
              <hr />
              <ScrollHooks />
              <hr />
              <RelojHooks />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
