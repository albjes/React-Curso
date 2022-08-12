import React, { useState } from "react";

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <div className="mb-11">
      <h2 className="text-3xl">Hooks - useState</h2>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button onClick={restar} className="text-4xl">
          -
        </button>
        <span className="font-bold text-3xl">{contador}</span>
        <button onClick={sumar} className="text-4xl">
          +
        </button>
      </nav>
    </div>
  );
}
