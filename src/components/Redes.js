import React from "react";

export default function Redes(props) {
  return (
    <section>
      <code>
        Tus redes sociales : <a href={props.link}> {props.link}</a>
      </code>
    </section>
  );
}
