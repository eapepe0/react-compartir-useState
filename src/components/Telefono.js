import React from "react";

export default function Telefono(props) {
  console.log(props);
  return (
    <section>
      <code>Tu telefono es {props.numero}</code>
    </section>
  );
}
