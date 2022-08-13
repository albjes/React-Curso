import "App.css";
import "./components/Estilos.css";
import "./components/Estilos.scss";

import { Eventos, MasSobreEventos } from "components/Eventos";

import AjaxApisHooks from "components/AjaxApisHooks";
import CicloVida from "components/CicloVida";
import ComunicacionComponentes from "components/ComunicacionComponentes";
import ContadorHooks from "components/ContadorHooks";
import Estado from "components/Estado";
import Estilos from "components/Estilos";
import Formularios from "components/Formularios";
import Header from "components/Header";
import HooksPersonalizados from "components/HooksPersonalizados";
import Nav from "components/Nav";
import Propiedades from "components/Propiedades";
import React from "react";
import Referencias from "components/Referencias";
import RelojHooks from "components/RelojHooks";
import RenderizadoCondicional from "components/RenderizadoCondicional";
import RenderizadoElementos from "components/RenderizadoElementos";
import ScrollHooks from "components/ScrollHooks";

//import AjaxApis from "components/AjaxApis";

function App() {
  let msg = "Ejercicios React";
  return (
    <section className="text-center">
      <Nav />
      <Header msg={msg} />
      <main>
        <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto p-4 ">
            <div className="flex flex-wrap my-12 dark:text-white">
              <Estilos title="Propiedades">
                <Propiedades />
              </Estilos>
              <Estilos title="Estado">
                <Estado />
              </Estilos>
              <Estilos title="RenderizadoCondicional">
                <RenderizadoCondicional />
              </Estilos>
              <Estilos title="RenderizadoElementos">
                <RenderizadoElementos />
              </Estilos>
              <Estilos title="Eventos">
                <Eventos />
              </Estilos>
              <Estilos title="MasSobreEventos">
                <MasSobreEventos />
              </Estilos>
              <Estilos title="ComunicacionComponentes">
                <ComunicacionComponentes />
              </Estilos>
              <Estilos title="CicloVida">
                <CicloVida />
              </Estilos>
              {/* <AjaxApis /> */}
              <Estilos title="ContadorHooks">
                <ContadorHooks />
              </Estilos>
              <Estilos title="ScrollHooks">
                <ScrollHooks />
              </Estilos>
              <Estilos title="RelojHooks">
                <RelojHooks />
              </Estilos>
              <Estilos title="AjaxApisHooks">
                <AjaxApisHooks />
              </Estilos>
              <Estilos title="HooksPersonalizados">
                <HooksPersonalizados />
              </Estilos>
              <Estilos title="Referencias">
                <Referencias />
              </Estilos>
              <Estilos title="Formularios">
                <Formularios />
              </Estilos>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
