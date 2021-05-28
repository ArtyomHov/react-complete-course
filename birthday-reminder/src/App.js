import React, { useState } from 'react';
import './App.css';
import List from'./List'
import data from './data'

function App() {
  const [ people, setPeople ] = useState(data) 
  return (
    <main>
      <section className="container">
        <h3>
          {people.length} birthdays today
          <List people={people}/>
          <button onClick={() => setPeople([])}>
            Clear all
          </button>
        </h3>
      </section>
    </main>
  )
}

export default App;
