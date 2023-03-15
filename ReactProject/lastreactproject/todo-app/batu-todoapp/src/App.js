
import './App.css';
import { BatuhanSalkim } from './useCount';


function App() {
  const {count,arttır,azalt,reset} = BatuhanSalkim();
  return (
    <div className='App'>
      
      <button onClick={arttır}>arttır</button>    
      <button onClick={azalt}>azalat</button>    
      <button onClick={reset}>sıfırla</button>    
    </div>
    
  );
}

export default App;
