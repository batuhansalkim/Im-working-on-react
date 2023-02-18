import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './Components';
import Thebootstrap from './boot/Thebootstrap';


function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <Title>Batuhan</Title>
      <Title theme="dark">Batuhan</Title>
      <Thebootstrap />
    </div>
  );
}

export default App;
