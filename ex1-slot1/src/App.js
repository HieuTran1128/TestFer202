import logo from './logo.svg';
import './App.css';

function App() {
  const person= {name:"Hieu", age:21};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello worlds, {person.name} {person.age} years old</h1>
      </header>
    </div>
  );
}

export default App;
