import './App.css';
import React, {useRef} from "react";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return(
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
