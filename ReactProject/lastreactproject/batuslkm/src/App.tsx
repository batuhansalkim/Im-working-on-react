import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import {Provider} from "react-redux";
import { store } from "./store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
