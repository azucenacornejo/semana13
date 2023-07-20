import logo from './logo.svg';
import './App.css';
import C01component from './component/C01component';
import C02contador from './component/C02contador';
import C03component from './component/C03component';

function App() {
  return (
    <div className="App">
      <h1>Componente 1</h1>
      <C01component  />
      <h1>Componente 2</h1>
      <C02contador />
      <h1>Componente 3</h1>
      <C03component/>
    </div>
  );
}

export default App;
