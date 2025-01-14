  import logo from './logo.svg';
  import './App.css';

  function App() {
    const companies = [
      { name: "Company One", category: "Finance", start: 1981, end: 2004 },
      { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
      { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
      { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
      { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
      { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
      { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
      { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
      { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    const person = {
      name: "Costas",
      address: {
        street: "Lalaland 12"
      }
    };




    const starttartAfter1987 = companies.filter(company => company.start > 1987);
    starttartAfter1987.forEach(company =>{
      console.log(`Name: ${company.name}, ${company.category}, ${company.start}`)
    });
  



    const withRetail = companies.filter(company => company.category === "Retail");
    
    withRetail.forEach(company =>{
      console.log(`Name: ${company.name}, ${company.start}, ${company.end}`)
    }) 




    const sortByEndDate = [...companies].sort((a, b) => a.end - b.end);

    const sortByAge = ages.sort((a,b) => b - a);

    
    const sumAge = ages.reduce((acc, age) => acc + age, 0);


    const { name, category } = companies[0];
    const newCompany = {
      name,
      category,
      print() {
        return `Name: ${this.name}, Category: ${this.category}`;
      }
    };


    function sumRandomNumber() {
      const count = Math.floor(Math.random() * 9) + 1;
      const numbers = Array.from({ length: count}, () => Math.floor(Math.random() * 100));
      const sum = numbers.reduce((total, num) => total + num, 0);
      console.log(`Generated ${count} numbers: ${numbers}`);
      return { sum, numbers };
    }
    const { numbers: randomNumbers, sum: randomSum } = sumRandomNumber();



    const data = [11, "Hello", "[5, 21]", 54, "???"];

    function randomValue() {
      const randomType = Math.floor(Math.random() * 3);

      if (randomType === 0) {
        return Math.floor(Math.random() * 100);
      }

      else if (randomType === 1) {
        return `${Math.floor(Math.random() * 100)}`
      }

      else {
        const specialChars = ['@', '#', '$', '%', '&', '*', '!', '?'];
        return specialChars[Math.floor(Math.random() * specialChars.length)];
      }
    }

    const randomValues = [];
    while (randomValues.length < 2) { // Add 2 random values
      randomValues.push(randomValue());
    }

    const newData = [...data, ...randomValues]

    function addToArray(...args) {
      let result = [];
      args.forEach(arg => {
        if(Array.isArray(arg)) {
          result.push(...arg);
        }
        else {
          result.push(arg);
        }
      });
      return result;
    }

    const combinedArray = addToArray(...newData);


    const { address: { street } } = person;

    return (
      <div className="App">
        <header className="App-header">


          <h1>1. All company</h1>
          <ul>
          {companies.map((company, index) =>(
            <li key={index}>
              Name: {company.name}, Category:{company.category}
            </li>
          ) 
            )}
          </ul>
          <br></br><br></br>



            <h1>2. Start After 1987</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody>
                {starttartAfter1987.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.category}</td>
                    <td>{company.start}</td>
                  </tr>
                ))}
              </tbody>
            </table><br></br><br></br>



            <h1>3. category Retail and year +1</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {withRetail.map((company,index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.start +1}</td>
                    <td>{company.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br><br></br>




            <h1>4. Sort By End Date</h1>   
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>End</th>
                  </tr>
                </thead>
                <tbody>
                  {sortByEndDate.map((company, index) => (
                    <tr key={index}>
                      <td>{company.name}</td>
                      <td>{company.end}</td>
                    </tr>
                  ))}
                </tbody>
            </table> <br></br><br></br>


            <h1>5. Sort By Age</h1>   
            <ul>
            {sortByAge.map((age, index) => (
              <li key={index}>{age}</li>
            ))}
            </ul>
            <br></br><br></br>      



            <h1>6. Total Age: {sumAge}</h1>


            <h1>7. New Company Print</h1>
            {newCompany.print()}
            <br></br><br></br>   


            <h1>8. Take numbers and return sum</h1>
            Numbers: {randomNumbers.join(', ')}
            <br></br>
            Sum: {randomSum}
            <br></br><br></br>  


            <h1>9. Combined Array</h1>
            {combinedArray.join(', ')}
            <br></br><br></br>  


            <h1>10. Destructured Street: {street}</h1>
        </header>
        
      </div>
    );
  }

  export default App;
