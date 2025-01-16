import React from 'react';
import { findFirstTeenager } from './firstTeenager';
import { checkIfAllAreTeenagers } from './checkAllTeenagers';
import { findOldestAndYoungest } from './Youngest&Oldest';

function PersonList(){
    const personList= [
        {name: 'Hieu', age: 21, occupation: 'Student'},
        {name: 'Ash Ketchum', age: 10, occupation: 'Student'},
        {name: 'Faker', age: 28, occupation: 'CEO'},
        {name: 'Ba Ga', age: 30, occupation: 'Streamer'},
        {name: 'A Loi', age: 13, occupation: 'Student'}
    ]

    const firstTeenager = findFirstTeenager(personList);
    console.log(firstTeenager);

    const allTeenagers = checkIfAllAreTeenagers(personList);

    const { oldest, youngest } = findOldestAndYoungest(personList);

    return(
        <div>
            <p style={{textAlign: 'center'}}>3&4</p>
            <table style={{
                width: '80%',
                margin: '20px auto',
                borderCollapse: 'collapse',
                textAlign: 'left',
                border: '1px solid #ddd'
            }}>
                <thead>
                    <tr>
                        <th style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            backgroundColor: '#f4f4f4'
                        }}>Name</th>
                        <th style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            backgroundColor: '#f4f4f4'
                        }}>Age</th>
                        <th style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            backgroundColor: '#f4f4f4'
                        }}>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {personList.map((person, index) => (
                        <tr key={index} style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9'
                        }}>
                            <td style={{
                                border: '1px solid #ddd',
                                padding: '8px'
                            }}>{person.name}</td>
                            <td style={{
                                border: '1px solid #ddd',
                                padding: '8px'
                            }}>{person.age}</td>
                            <td style={{
                                border: '1px solid #ddd',
                                padding: '8px'
                            }}>{person.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>5. First Teenager</h2>
            {firstTeenager ? (
                <p>Name: {firstTeenager.name}, Age: {firstTeenager.age}</p>
            ) : (
                <p>No teenager found in the list.</p>
            )}

            <h2>6. Check if all are teenagers:</h2>
            <p>{allTeenagers}</p>  {}

            <h2>9. Find the Oldest and Youngest Person</h2>

            <h3>Oldest Person:</h3>
            <p>Name: {oldest.name}, Age: {oldest.age}</p>

            <h3>Youngest Person:</h3>
            <p>Name: {youngest.name}, Age: {youngest.age}</p>
        </div>   
    )
}

export default PersonList;
