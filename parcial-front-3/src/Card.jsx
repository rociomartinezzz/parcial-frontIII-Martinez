import React from "react";




const Card = ({nombre, color}) => {
  return (
  <div>
<h2>Hola {nombre}!</h2>
<h3>Sabemos que tu color favorito es {color}</h3>
  </div>
  )
}


export default Card;