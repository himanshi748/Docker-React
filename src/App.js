import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>HELLO DOCKER WITH REACT</h1>
        <br>
        </br>
        <p>React components implement a render() method that takes input data and returns what to display. <br></br>
          This example uses an XML-like syntax called JSX.<br></br>
           Input data that is passed into the component can be accessed by render() via this.props.</p>
      </header>
    </div>
  );
}

export default App;
