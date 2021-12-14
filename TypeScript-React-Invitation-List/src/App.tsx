import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {name: 'Albert Einstein',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Albert_Einstein_1947.jpg',
    age: 80,
    note: 'E=mc2'}
  ]);

// people.map((person) => {
//   console.log(person.name)
//   return null
// })

  return (
    <div className="App">
      <h1>People Invited To The Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
