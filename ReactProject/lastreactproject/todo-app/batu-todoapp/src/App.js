import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import { useState } from 'react';
function App() {
  const [username,setusername] = useState("batuhan");
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home username={username} />}/>
          <Route path='/menu' element={<Menu username={username} setUsername={setusername}/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1> PAGE NOT FOUND 404 ERROR sayfa bulunamadi</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
