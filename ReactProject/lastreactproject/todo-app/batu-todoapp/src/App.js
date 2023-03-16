import './App.css';
import { Person } from './components/Person';

function App() {

  return (
    <div className='App'>
      <Person
      name="batu"
      email="batu@gmail.com"
      age={21}
      isMarried = {false}
      friends = {["neco","baris","cörüt","albardak"]}
      />
          
    </div>
    
  );
}

export default App;
