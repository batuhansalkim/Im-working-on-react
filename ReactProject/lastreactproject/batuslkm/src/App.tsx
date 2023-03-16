import React from 'react';
import './App.css';
import { Person } from './Components/Person';

function App() {
  return (
    <div className="App">
      <Person
      name="batuhan"
      email="batuhan@gmail.com"
      age={22}
      isMarried = {false}
      friends = {["tuna","necla","mustafa"]}
      />
    </div>
  );
}

export default App;
