import React from 'react'

const Formulario = ({setNombre, setColor,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Ingresa tu nombre</label>
      <input type="text" onChange={(e) => setNombre(e.target.value)}/>
      <label>Ingresa tu color favorito</label>
      <input type="text" onChange={(e) => setColor(e.target.value)}/>
      <button style={{color: 'green',backgroundColor: 'white'}}>Enviar</button>
      
    
    </form>
  )
}

export default Formulario