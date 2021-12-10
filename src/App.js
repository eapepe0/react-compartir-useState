import React from "react";

import Nombre from "./components/Nombre";
import Telefono from "./components/Telefono";
import Redes from "./components/Redes";

export default function App() {
  /* definimos por defecto database con sus datos */
  const [database, setDatabase] = React.useState({
    id: "0",
    nombre: "Cristian",
    telefono: "47543298",
    redes: "twitter.com/@eapepe0"
  });
  /* la variable state se puede compartir por que esta en el nivel alto de los componentes */
  /* donde App.js es el padre */
  /* donde Nombre , Redes , Telefono son los hijos */

  /* funcion que cambia el numero de telefono */
  function cambiarNumero() {
    setDatabase((prevDatabase) => {
      return { ...prevDatabase, telefono: "1160337330" };
    });
  }

  /* funcion que cambia el nombre */
  function cambiarNombre() {
    setDatabase((prevDatabase) => {
      return { ...prevDatabase, nombre: "Colosin" };
    });
  }

  /* funcion que cambia las redes*/
  function cambiarRedes() {
    setDatabase((prevDatabase) => {
      return { ...prevDatabase, redes: "github.com/eapepe0" };
    });
  }
  return (
    <div className="App">
      <h1>Agenda (como compartir useState entre componentes)</h1>

      <button onClick={cambiarNumero}> cambiar numero</button>
      {/* con este boton al clickear tiene la funcion cambiar numero */}
      <button onClick={cambiarNombre}> cambiar nombre</button>
      <button onClick={cambiarRedes}> cambiar red social</button>
      <h2>Nombre (componente Nombre)</h2>
      <Nombre name={database.nombre} />
      {/* le paso al componente Nombre , como props name que es database.nombre */}
      <h2>Telefono (componente Telefono)</h2>
      <Telefono numero={database.telefono} />
      <h2>Redes (componente Redes)</h2>
      <Redes link={database.redes} />
    </div>
  );
}
