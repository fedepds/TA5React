import './App.css';
import { useState } from 'react';

// Definir el componente Texto con la primera letra en mayúscula
const Texto = () => {
  return <p>Hola, puedes ocultarme</p>;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleButton = () => {
    setIsVisible(!isVisible); // Alterna la visibilidad
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