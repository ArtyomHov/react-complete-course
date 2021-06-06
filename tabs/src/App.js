import React, {useState, useEffect} from 'react'
import { FeAngleDoubleRight } from '/react-icons/fa'

import './App.css';
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setKobs] = useState([])
  const [value, setValue] = useState(0)
  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return {
    }
  }
  return (
  )
}

export default App;
