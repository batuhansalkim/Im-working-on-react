import logo from './logo.svg';
import './App.css';

// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }


// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          batuhan salkım deneme website.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
