import React, { useState } from "react";

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario, se ha enviado");
  };

  return (
    <div className="mb-11">
      <h2 className="text-3xl mb-8">Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p className="mb-8 mt-8">Elige tu sabor de JS Favorito:</p>
        <div>
          <label htmlFor="vanilla">Vanilla</label>
          <input
            type="radio"
            id="vanilla"
            name="sabor"
            value="vanilla"
            onChange={(e) => setSabor(e.target.value)}
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="react">react</label>
          <input
            type="radio"
            id="react"
            name="sabor"
            value="react"
            onChange={(e) => setSabor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="angular">Angular</label>
          <input
            type="radio"
            id="angular"
            name="sabor"
            value="angular"
            onChange={(e) => setSabor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="vue">Vue</label>
          <input
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={(e) => setSabor(e.target.value)}
          />
        </div>
        <p className="mt-8 mb-4">Elige tu sabor de JS Favorito:</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label className="mt-8 mb-8" htmlFor="terminos">
          Acepto terminos y condiciones
        </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        />
      </form>
    </div>
  ); 
}*/

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario, se ha enviado");
  };

  return (
    <div className="mb-11">
      <h2 className="text-3xl mb-8">Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p className="mb-8 mt-8">Elige tu sabor de JS Favorito:</p>
        <div>
          <label htmlFor="vanilla">Vanilla</label>
          <input
            type="radio"
            id="vanilla"
            name="sabor"
            value="vanilla"
            onChange={handleChange}
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="react">react</label>
          <input
            type="radio"
            id="react"
            name="sabor"
            value="react"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="angular">Angular</label>
          <input
            type="radio"
            id="angular"
            name="sabor"
            value="angular"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="vue">Vue</label>
          <input
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={handleChange}
          />
        </div>
        <p className="mt-8 mb-4">Elige tu lenguaje de programación favorito:</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label className="mt-8 mb-8" htmlFor="terminos">
          Acepto terminos y condiciones
        </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        />
      </form>
    </div>
  );
}
