import Card from "./Card";
import Formulario from "./Formulario";
import { useState } from 'react'


function App() {
  const[nombre, setNombre]=useState("nombre")
  const[color, setColor]=useState("color")
  const [show, setShow] = useState(false)
  const handleSubmit=(e) =>{
    e.preventDefault()
    if(nombre.length > 3 && color.length>6){
      setShow(true)
    }else{
      setShow(false) 
      alert("Por favor chequea que la información sea correcta")
    }

    
  }


  return (
    <>
      <h1>Elegi tu color favorito</h1>
      <Formulario setNombre={setNombre} setColor={setColor} handleSubmit={handleSubmit}/>
        {show && <Card nombre={nombre} color={color}/>}
    </>
  );
}


export default App;
