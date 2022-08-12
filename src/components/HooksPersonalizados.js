import React from "react";
import { useFetch } from "hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://jsonplaceholder.typicode.com/users/";
  //console.log(useFetch());

  let { data, isPending, error } = useFetch(url);
  return (
    <div className="mb-11">
      <h2 className="text-3xl">Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{JSON.stringify(error)}</h3>
      <h3 style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data)}</h3>
    </div>
  );
}
