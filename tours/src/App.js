import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setTours(tours)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(true)
    }

  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (tours.length === 0) {
    return (
      <div className="title">
      <h2>No tours left.</h2>
      <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    )
  }
  return loading === true 
  ?  (
    <main>
      <Loading />
    </main>
  )
  : (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App;
