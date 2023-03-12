import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';



function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
