import logo from './logo.svg';
import './App.css';

function App() {
  const person= [
    {name: 'Hieu', age: 21},
    {name: 'Ash Ketchum', age: 10},
    {name: 'Faker', age: 28},
    {name: 'Ba Ga', age: 30},
    {name: 'A Loi', age: 12}
  ];  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello worlds</h1>
        <ul className="person-list">
          {person.map((person, index) => (
            <li key={index} className="person-item">
                {person.name} - {person.age} year olds
            </li>
          )

        )}
        </ul>
      </header>
    </div>
  );
}

export default App;
