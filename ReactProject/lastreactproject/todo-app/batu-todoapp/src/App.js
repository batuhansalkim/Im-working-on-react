
import './App.css';
import useToggle from './useToggle';


function App() {
  const [state, toggle] = useToggle();
  return (
    <div className='App'>
      <button onClick={toggle}>{state ? "Gizle" :"Göster"}
      </button>
      {state && <h1>Batuhan Salkım</h1>}

      
    </div>
    
  );
}

export default App;
