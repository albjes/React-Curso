import React, { useEffect, useState } from "react";

function Reloj({ hour }) {
  return <h3>{hour}</h3>;
}

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      //console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <div className="mb-11 ">
      <h2 className="text-3xl">Reloj con Hooks</h2>
      {visible && <Reloj hour={hour} />}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setVisible(true)}
      >
        Iniciar
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setVisible(false)}
      >
        Parar
      </button>
    </div>
  );
}
