import React from "react";

export default function Nombre(props) {
  console.log(props);
  return (
    <section>
      <code>Tu nombre es {props.name}</code>
      {/* como es llamado como name={database.nombre}, se usa props.name */}
    </section>
  );
}
