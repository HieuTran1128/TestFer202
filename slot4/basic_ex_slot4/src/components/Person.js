function Person() {
    const person= {name:"Hieu", age:21};
    return (
        <div>
            <ul>
                <li> Name: {person.name} - Age: {person.age}</li>
            </ul>
        </div>
    );
}    
export default Person;
