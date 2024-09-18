import './App.css';
import { useState } from 'react';


const Texto = () => {
  return <p>Hola, puedes ocultarme</p>;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleButton = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleButton}>
          {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
        </button>
        {isVisible && <Texto />}
      </header>
    </div>
  );
}

export default App;