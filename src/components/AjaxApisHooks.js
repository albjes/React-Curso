import React, { useEffect, useState } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img className="m-auto" src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxApisHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json)

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();
        //console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <div className="mb-11">
      <h2 className="text-3xl">Peticiones Asincronas con HOOKS</h2>
      <div className="w-full border-b md:border-r p-8">
        <div className="flex flex-wrap items-center mb-6">
          {pokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            pokemons.map((el) => (
              <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
