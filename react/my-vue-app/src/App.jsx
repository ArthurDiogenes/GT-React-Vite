import { useState } from 'react'
import './App.css'

function App() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="container">
      <div className={`card ${isPressed ? 'card-active' : ''}`}>
        <div className="card-icon">
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
          </svg>
        </div>
        <h1>Card Neomórfico</h1>
        <p>Um exemplo de card com design neomórfico e efeitos de hover e click usando apenas o css</p>
        <button
          className="card-btn"
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          Clique aqui
        </button>
      </div>
    </div>
  );
}

export default App
