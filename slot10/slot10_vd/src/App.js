import { useState } from 'react';

function App() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}> 2. 
      <input 
        type="text" 
        value={name} 
        onChange={(e) => { setName(e.target.value);
          console.log(e.target.value);
        }} 
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>My name is {name}</p>

      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>My age is {age}</p>
    </div>
  );
}

export default App;