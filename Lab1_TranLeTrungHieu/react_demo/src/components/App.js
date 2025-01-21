import React, { Component } from "react";
import "../styles/App.css";
import HelloWorld from "./Hello";
import Person from "./Person";

class App extends Component {
    render() {
        // Tạo đối tượng Person
        const person = new Person("John Doe", 25);
        return (
            <div>
                <h1>My React App!</h1>
                <h2>
                    <HelloWorld />
                </h2>
                <h2>{person.sayHello()}</h2>
            </div>
        );
    }
}

export default App;