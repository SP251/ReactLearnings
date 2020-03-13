import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Surekha', age: 28},
      {name: 'Nagarjuna', age: 28},
      {name: 'Bindu', age: 30}
    ],
  });

  const [ otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 28},
        {name: 'Nagarjuna Elisetty', age: 28},
        {name: 'Bindu', age: 30}
      ]
    });
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick = {() => switchNameHandler('Surekha Pachipulusu')}>Click me!</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click = {switchNameHandler.bind(personsState, "Surekha!!!")}>My Hobbies: Reading newspapers
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
        />      
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  
}

export default app;
