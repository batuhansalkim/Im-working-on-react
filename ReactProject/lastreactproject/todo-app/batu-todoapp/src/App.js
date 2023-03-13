import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1> PAGE NOT FOUND 404 ERROR sayfa bulunamadi</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
    
  );
}

export default App;
