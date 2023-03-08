import './App.css';
import {useState} from "react";

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className='App'>
      <button onClick={()=>{}}>
        Show Text
      </button>
      {showText && <Text/>}
    </div>
  );
}

export default App;
