import React, { useEffect, useState } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    return () => {
      //console.log("Fase de Desmontaje");
    };
  });

  return (
    <div className="mb-11">
      <h2 className="text-3xl">Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY} px</p>
    </div>
  );
}
