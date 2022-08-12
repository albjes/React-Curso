import React, { useRef } from "react";

export default function Referencias() {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //console.log(refMenu.current);

  const handleToggleMenu = () => {
    /*const $menu = document.getElementById("menus");

    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.classList.remove("hidden");
    } else {
      e.target.textContent = "Menú";
      $menu.classList.add("hidden");
    } */

    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.classList.remove("hidden");
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.classList.add("hidden");
    }
  };
  return (
    <div className="mb-11">
      <h2 className="text-3xl">Referencias</h2>
      <button
        onClick={handleToggleMenu}
        ref={refMenuBtn}
        id="menu-btn"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Menú
      </button>
      <nav ref={refMenu} id="menu" className="hidden">
        <a href="http://www.google.com">Seccion 1</a>
        <br />
        <a href="http://www.google.com">Seccion 2</a>
        <br />
        <a href="http://www.google.com">Seccion 3</a>
        <br />
        <a href="http://www.google.com">Seccion 4</a>
        <br />
        <a href="http://www.google.com">Seccion 5</a>
      </nav>
    </div>
  );
}
