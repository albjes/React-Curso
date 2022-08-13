import React from "react";
import { useFetch } from "hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://jsonplaceholder.typicode.com/users/";
  //console.log(useFetch());

  let { data, isPending, error } = useFetch(url);
  return (
    <div className="mb-11">
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{JSON.stringify(error)}</h3>
      <h3 className="text-xs" style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(data)}
      </h3>
    </div>
  );
}
