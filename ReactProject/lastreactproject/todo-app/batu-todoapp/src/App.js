
import './App.css';
import { BatuhanSalkim } from './useCount';


function App() {
  const {count,arttır,azalt,reset} = BatuhanSalkim(0);
  return (
    <div className='App'>
      {count}
      <button onClick={arttır}>arttır</button>    
      <button onClick={azalt}>azalat</button>    
      <button onClick={reset}>sıfırla</button>    
    </div>
    
  );
}

export default App;
