import React from "react";




const Card = ({nombre, color}) => {
  const saludo = {
    backgroundColor: 'grey',
    border: "2px solid blue",
    color: 'white',
  }

  return (
  <div style={saludo}>
<h2>Hola {nombre}!</h2>
<h3>Sabemos que tu color favorito es {color}</h3>
  </div>
  )
}


export default Card;