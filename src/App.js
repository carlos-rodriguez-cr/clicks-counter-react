import './App.css';
import Boton from './components/Boton.jsx'
import freeCodeCampLogo from './images/FreeCodeCamp-logo.png';

function App() {

  const manejarClick = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' /> 
      </div>

      <div className='contenedor-principal'>
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
