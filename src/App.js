import './App.css';
import Boton from './components/Boton.jsx'
import Contador from './components/Contador.jsx';
import freeCodeCampLogo from './images/FreeCodeCamp-logo.png';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); /*Set te permite actualizar el num*/ 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' /> 
      </div>

      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton 
          texto='Clic'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
